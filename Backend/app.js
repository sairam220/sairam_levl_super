import express from "express";
import mongoose from 'mongoose'
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from 'cors'

const app=express();
app.use(cors())
app.use(express.json())
app.use('/api/user',router)

app.use('/api/blog',blogRouter)

mongoose.connect('mongodb+srv://gudidasairam123:byKCfqOf0z64fQJq@cluster0.ax9c6fi.mongodb.net/Blog?retryWrites=true&w=majority'
).then(()=>
app.listen(5000,()=>{
    console.log('Server is running at http://localhost:5000')
})
).then(()=>console.log('Connected To Datebase And Listening To Localhost 5000')
).catch((err)=>console.log(err))




//byKCfqOf0z64fQJq