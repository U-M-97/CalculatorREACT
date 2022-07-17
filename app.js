const express = require("express")
const app = express()
app.use(express.json())
const port = process.env.PORT || 4000

const path = require("path")
app.use(express.static(path.join(__dirname, "/Frontend/build")))

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/Frontend/build', 'index.html'))
})


app.listen(port, ()=> {
    console.log("Server is running on port " + port)
})