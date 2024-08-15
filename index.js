import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from './Routers/AuthRouters.js'
import mongoose from "mongoose";
import cookieParser from "cookieparser";


dotenv.config()
const app =express()
const port =process.env.PORT || 8000;
const corsOption = {
    origin:true,
    credentials:true,
}

//database connection
mongoose.set("strictQuery",false);
const connect= async()=>{
    try{
         await mongoose.connect(process.env.MONGO_URI,{
            serverSelectionTimeoutMS: 5000,
         })
         console.log('Mongoose connected successfully');
         
    }catch(err){
       console.log('MongoDB Connection failed');
       
    }
}


//middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());


app.use('/api/v1/auth',authRoute)

app.listen(port, ()=>{
    connect()
    console.log('server listening on port',port);
    
})