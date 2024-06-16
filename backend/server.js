const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.listen(process.env.PORT,(error)=>{
    if(!error){
        console.log(`Connected to port ${process.env.PORT}`)
    }else{
        console.log('error occured!!')
    }
})
