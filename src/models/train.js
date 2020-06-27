const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    trNo:{
        type:Number,
        required:true
    },
    trName:{
        type:String,
        required:true
    },
    start:{
        type:String,
        required:true
    },
    end:{
        type:String,
        required:true
    },
    runsOn:[{
        days:{
            type:String,
            required:true
        },
    }],
    date:Date
})

const Train = mongoose.model('Train', userSchema)

// This is for adding trains to the database ......
// const train = new Train({
//     trName:'Majra Express',
//     trNo:20,
//     start:'Ahmedabad',
//     end:'New Delhi',
//     //runsOn:[{days:'Tuesday'},{days:'Thursday'},{days:'Saturday'},{days:'Friday'}],
//     runsOn:[{days:'Wednesday'},{days:'Monday'},{days:'Sunday'}]
// })
// train.save().then(()=>{
//     //console.log(train)
// }).catch((e)=>{
//     //console.log(e)
// })
module.exports = Train
