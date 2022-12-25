//MongoDB DataBase Connection
import mongoose from "mongoose";


mongoose.set("strictQuery", false);
const connect = async()=>{
try{
    await mongoose.connect(process.env.MONGO); 
    console.log('Connected To Database');
}catch(error){
    console.log(error);
}
};
mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB Disconnected!");
})

export default  connect