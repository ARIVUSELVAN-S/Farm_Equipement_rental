const { default: mongoose } = require("mongoose");
const Mongoose  = require("mongoose");

function connectDB(){
    mongoose.connect('mongodb+srv://Arivu:Arivu@cluster0.ul8awjd.mongodb.net/test',{useUnifiedTopology:true,useNewUrlParser: true})
    const connection=mongoose.connection
    connection.on('connected',()=>{
        console.log('Mongo db connected')
    })
    connection.on('error',()=>{
        console.log("mongodb connection error poi ennanu paru")
    })
}
connectDB()
module.exports=mongoose