test('hello world',()=>{
    
})
const {fahrenheitToCelsius}= require('../tests/math')
fahrenheitToCelsius("converting to F to C",()=>{
    const temp =fahrenheitToCelsius(32)
    expext (temp).tobe(0)
})
