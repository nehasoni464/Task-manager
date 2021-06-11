const request = require('supertest')
const app = require('../src/app')
const User= require('../src/models/user')

const userOne={
    name:'neha',
    email:'neha@soni.com',
    password:'123456789'
}
beforeEach(async()=>{
    await User.deleteMany()
    await new User(userOne).save()

})
test('should a signup a new user', async()=>{
    await request(app).post('/users').send({
        name:'nehaa',
        email:'admin@adi.com',
        password:'55624'
    }).expect(201)
})
test('should login existing user', async ()=>{
    await request(app).post('/users/login').send({
        email:userOne.email,
        password:userOne.password
    }).expect(200)
})
test('should not login non existent user',async()=>{
    await request(app).post('/users/login').send({
        email:userOne.email,
        password:userOne.password
    }).expect(200)
})
  test('should not login nonexistent user', async()=>{
      await request(app).post('/users/login').send({
          email:userOne.email,
          password:'thisisnotgood'
      }).expect(400)
  })
  test('should not get profile for unauthnticated user', async()=>{
      await request(app)
      .get('/users/me')
      .send()
      .expect(401)
  })
  test('should delete account for user', async()=>{
      await request(app)
      .delete('/users/me')
      .set('Authorization','Bearer ${userOne.tokens[0].token}')
      .send()
      .expect(200)
  })
  test('should not delete account for unauthnticate user', async()=>{
      await request(app)
      .delete('/users/me')
      .send()
      .expect(401)
  })