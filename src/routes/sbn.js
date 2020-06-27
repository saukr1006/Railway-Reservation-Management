// const express = require('express')
// const router = new express.Router
// const Train = require('../models/train')

// router.get('/sbn',async(req,res)=>{
//     const take = req.query
//     const a = await Train.find({trNo:take.td})
//     res.send(a)
// })

// module.exports = router


const express = require('express')
const router = new express.Router
const Train = require('../models/train')


router.get('/sbn',async(req,res)=>{
    const take = req.query
    const a = await Train.find({trNo:take.td})
    try{
    res.render('sbn',{
    	a,take
    })
	}	catch(e){
		res.render(e)
	}
})

module.exports = router


