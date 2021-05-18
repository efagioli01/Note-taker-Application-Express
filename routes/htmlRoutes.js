const path = require("path") //need to be able to route different files for html through express
const router = require("express").Router() //built into express, lets us move anything where we need it to go

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
}) 

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html")) //will redirect to home page if taken to bad path
})

module.exports = router