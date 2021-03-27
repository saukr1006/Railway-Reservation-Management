const express = require('express')
const router = new express.Router
const User = require('../models/users')
const passport = require('passport')
const {ensureAuthenticated} = require('../auth')

// router.get('/',(req,res)=>{
//     res.render('test')
// })

router.post('/signup',(req,res)=>{
    const user = new User(req.body)
    user.save().then(()=>{
        res.redirect('/si.html')
    }).catch((e)=>{
        res.send('Bad Request')
    })
})

router.post('/login',passport.authenticate('local'),(req,res)=>{
    if(!req.user){
        res.redirect('/si.html')
    }else{
        res.redirect('/login')
    }
})

router.get('/users',(req,res)=>{
    User.find().then((user)=>{
        res.send(user)
    }).catch((e)=>{
        res.send(e)
    })
})

router.post('/logout',(req,res)=>{
    req.logout()
    res.redirect('/si.html')
})

router.get('/login',ensureAuthenticated,(req,res)=>{
    res.render('login',{
        user:req.user.username
    })
})

module.exports = router