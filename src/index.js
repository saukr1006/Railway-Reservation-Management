//This is the main file
//To run type "npm run start"

const express = require('express')
const path = require('path')
const publicDir = path.join(__dirname,'/public') 
const viewsPath = path.join(__dirname,'/views') 
const session = require('express-session')
const passport = require('passport')
const userRoute = require('./routes/userRoute')
const trainRoute = require('./routes/trainRoute')
const bookingRoute = require('./routes/bookingRoute')
const bookingStatus = require('./routes/BookStatusRoute')
const stationRoute = require('./routes/stationRoute')
const mealsRoute = require('./routes/mealsRoute')
const sbn = require('./routes/sbn')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000
app.use(express.static(publicDir))
app.set('view engine','hbs')
app.set('views',viewsPath)
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))


//For login authorisation
app.use(passport.initialize());
app.use(passport.session());

require('./passport')(passport)


app.use(userRoute) 
app.use(trainRoute)
app.use(bookingRoute)
app.use(bookingStatus)
app.use(stationRoute)
app.use(mealsRoute)
app.use(sbn)

app.listen(port,()=>{
    console.log('Server is up on port '+port)
})

