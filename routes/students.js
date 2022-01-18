import express from "express";
const router = express.Router();
import student from "../models/student.js"

// Getting all data from db
router.get('/',async(req,res)=>{
    try {
        const students = await student.find()
        res.send(students)
    } catch (error) {
        res.send(`Error occured ${error}`)
    }
})
// Getting specific student from DB
router.get('/:id',async(req,res)=>{
    try {
        const specificStudent = await student.findById(req.params.id)
        res.send(specificStudent)
    } catch (error) {
        res.send(`Error occured:=== ${error}`)
    }
})
// Creating new student
router.post('/',async(req,res)=>{
    const newStudent = new student({
        name : req.body.name,
        branch : req.body.branch,
        live : req.body.live
    })
    try {
        const a1 = await newStudent.save()
        res.send(`Added ${a1} to database`)
    } catch (error) {
        res.send(error)
    }
})

// Update student
router.patch('/:id',async(req,res)=>{
    try {
        // const updateStudent = student.updateOne({_id:req.params.id},{$set:{name: req.body.name}})
        // res.send(updateStudent)
        const updateStudentObject = req.body
        const {id} = req.params
        const updateStudent = await student.updateOne({_id:id},{$set:updateStudentObject})
        res.send(updateStudent)
    } catch (error) {
        res.send(error)
    }
})

// Deleting student
router.delete('/:id',async(req, res)=>{
    try {
        const removedStudent = await student.deleteOne({_id: req.params.id})
        res.send(removedStudent)
    } catch (error) {
        res.send(`Error occured:=== ${error}`)
    }
})


export default router

