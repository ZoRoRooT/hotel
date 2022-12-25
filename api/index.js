import express from "express"
import dotenv from "dotenv"
import connect from "./Mongo.js"
import authRoute from "./routes/auth.js"
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"

const app = express();
const port = 5001;
dotenv.config()

//Middlewares
app.use(express.json())
app.use('/api/auth',authRoute)
app.use('/api/users',usersRoute)
app.use('/api/hotels',hotelsRoute)
app.use('/api/rooms',roomsRoute)

app.use((err,req,res,next)=>{
const errorStatus = err.status ||500
const errorMessage = err.message ||"Something went worng!"
return res.status(errorStatus).json(err)
})


app.listen(port,()=>{
    connect();
    console.log(`server is runnng on ${port}`)
})

