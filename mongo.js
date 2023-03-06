const mongoose=require('mongoose')
//const {mongoPass}=require('./config.json')
const mongoPath=`mongodb+srv://hakanakbudak:nHO6GrzzsgNynsRB@cluster0.iimvbvt.mongodb.net/test-db?
retryWrites=true&w=majority`

module.exports=async()=>{
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose
}