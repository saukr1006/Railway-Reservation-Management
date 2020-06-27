const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    completed:{
        type:String,
        required:true
    },
    Train_Number:{
        type:Number,
        required:true
    },
    Train_Name:{
        type:String,
        required:true
    },
    date:{
        type:String
    },
    seat:String
})

const BookingStatus = mongoose.model('BookingStatus', userSchema)

module.exports = BookingStatus
