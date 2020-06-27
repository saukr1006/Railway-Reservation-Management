const express = require('express')
const router = new express.Router
const Train = require('../models/train')


router.get('/trains', (req,res)=>{
    const take = req.query
    const day = get(take.date)
    Train.find({start:take.start,end:take.end,'runsOn.days':day}).then((train)=>{
        res.render('loginguest',{
            train
        })
    }).catch((e)=>{
        res.send(e)
    })
})

const get = (date)=>{
    const dayGet = new Date(date.toString());
    const day = dayGet.getDay();
    if(day===0){
        return 'Sunday'
    }
    else if(day===1){
        return 'Monday'
    }
    else if(day===2){
        return 'Tuesday'
    }
    else if(day===3){
        return 'Wednesday'
    }
    else if(day===4){
        return 'Thursday'
    }
    else if(day===5){
        return 'Friday'
    }
    else if(day===6){
        return 'Saturday'
    }
}

module.exports = router
