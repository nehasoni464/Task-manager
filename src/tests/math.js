const celsiusToFarenheit=(temp)=>{
    return (temp *1.8)+32
}
const fahrenheitToCelsius=(temp)=>{
    return (temp-32)/1.8
}
module.exports={
    celsiusToFarenheit,
    fahrenheitToCelsius
}