const express = require('express')
const app = express()
const port = 3002
app.use(express.static('people'))
app.use(express.static('style'))
app.use("/",require("./router/index"))
app.use("/index2",require("./router/index2"))
app.use("/about",require("./router/about"))
app.use("/map",require("./router/map"))
app.listen(port, function () {
    console.log(`app launched at address: http://localhost:${port}`)
})

