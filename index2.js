const express = require('express')

const router = express.Router();
router
    .route("/")
    .get((req,res)=> res.sendFile(__dirname + "/index2.html"))
    .post((req,res)=>res.send("POST"))
module.exports = router;

