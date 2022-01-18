import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import studentsRouter from './routes/students.js'


const app = express();
const PORT = 8000;

// Connecting to mongodb
const url ='mongodb://localhost/TestDB'
mongoose.connect(url)
const con = mongoose.connection
con.on('open',()=>{
    console.log(`Connected to DB`);
})


// Middleware
app.use(bodyParser.json())
app.use('/students',studentsRouter)
app.listen(PORT, ()=>{
    console.log(`Server listing on : http://localhost:${PORT}`);
})