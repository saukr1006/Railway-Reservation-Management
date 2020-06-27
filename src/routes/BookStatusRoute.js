const BookingStatus = require('../models/BookingStatus')
const express = require('express')
const router = new express.Router
const User = require('../models/users')
const { ensureAuthenticated } = require('../auth')
const Booking = require('../models/Booking')

router.get('/login/bookingstatus', ensureAuthenticated, async (req, res) => {
    const user = await User.findById(req.user._id.toString())
    await user.populate('trains').execPopulate()
    const trains = user.trains
    const ar = []
    //res.send(user.trains)

    for (var i = 0; i < trains.length; i++) {
        var c = Math.floor(Math.random() * 100) + 1  
        var x = new Date();
        var y = trains[i].date
        if (x > y) {
            var completed = 'Finished'
        } else if (x < y) {
            var completed = 'Not Finished'
        }
        const bookingstatus = new BookingStatus({
            completed,
            Train_Number: trains[i].Train_number,
            Train_Name:trains[i].Train_name,
            date:y,
            seat:c
        })
        try {
            await bookingstatus.save()
        } catch (e) {
        }
        ar.push(bookingstatus)
    }
    res.render('Bookingstatus',{
        ar
    })
})


module.exports = router