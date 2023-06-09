const mongoose = require("mongoose")

const Schema   = mongoose.Schema

const todoSchema = new Schema({    
    
    title : {
        type: String,
        required: true
    },
    desc : {
        type: String,
        required: true
    }
}, {timestamps :true})

let todo = mongoose.model("Todo", todoSchema)
module.exports = todo