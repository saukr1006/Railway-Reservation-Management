const Meals = require('../models/Meals')
const express = require('express')
const router = new express.Router

router.get('/meals',async(req,res)=>{
    const meal = await Meals.find()
    try{
        res.render('meals', {
            meal
        })
    } catch (e) {
        res.render(e)
    }
})

module.exports = router