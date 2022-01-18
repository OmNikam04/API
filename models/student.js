import mongoose from 'mongoose'

// We are saying to mongodb that we require 
// a DB with following structure or schema
const studentSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    live:{
        type:Boolean,
        required:true,
        default:true
    }
})


export default mongoose.model('student',studentSchema)