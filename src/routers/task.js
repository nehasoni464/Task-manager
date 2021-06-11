const express = require('express')
const Task = require('../db/model/task')
const router = new express.Router()
const auth = require('../middleware/auth')



router.post('/tasks', auth, async (req, res) => {
    //const task=new Task(req.body)
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try {
        await task.save()
        res.send(task)
    }
    catch (e) { res.status(400).send(e) }

})




router.get('/tasks', auth, async (req, res) => {
    const match = {}
    const sort={}
    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }
    if(req.query.sortBy){
        const parts= req.query.sortBy.split(":")
        sort[parts[0]]=parts[1]==='disc'?-1:1
    }
    try {
        // const task= await Task.find({owner:req.user._id})
        // res.send(task)
        await req.user.populate({
            path: 'tasks',
            match,
            options:{
                limit:parseInt(req.query.limit),
                skip:1,
                sort
            }
        }).execPopulate()
        res.send(req.user.tasks)

    }
    catch (e) {
        res.status(500).send(e)
    }


})

router.get('/tasks/:id', auth, async (req, res) => {
    const idd = req.params.id
    try {
        //const task= await Task.findById(idd)
        const task = await Task.findOne({ _id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }
    catch (e) { res.status(500).send(e) }

})

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates' })
    }
    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
        // const task= await Task.findByIdAndUpdate(req.params.id)

        if (!task) {
            return res.status(404).send()
        }
        updates.forEach((update) => task[update] = req.body[update])
        await task.save()
        res.send(task)
    } catch (e) {
        res.send(400).send(e)
    }
})


router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        //const task= await Task.findByIdAndDelete(req.params.id)
        const task = await Task.findOneAndDelete({ _id: req.params.id, ownwer: req.user._id })
        if (!task) {
            return res.status(404).send()

        }
        res.send(task)

    } catch (e) { res.status(500).send }

})
module.exports = router

