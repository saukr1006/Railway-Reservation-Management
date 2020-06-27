const express = require('express')
const router = new express.Router
const Station = require('../models/station')

router.get('/station', async (req, res) => {
    const take = req.query
    const a = await Station.find({ stName: take.station })
    //console.log(a)
    try {
        const sn = a[0].stName
        const np = a[0].noOfPlatform
        res.render('station', {
            a, sn, np
        })
    } catch (e) {
        res.send(e)
    }
})

module.exports = router