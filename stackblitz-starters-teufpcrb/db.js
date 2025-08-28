const mongoose = require('mongoose')
const connectionString='mongoose:/localhost:27017/studentDb'
mongoose.connect(connectionString,{
    userNewurlparser : true,
    useUnifiedTopology : true ,
})
.then(()=>{
    console.log("mongodb is running sucessfully")
})
.catch(err =>{
    console.log(err)
})