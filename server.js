const express = require("express");
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json()); //allows us to pass data to and fro routes in json format
app.use(express.urlencoded({ extended: true })); //allows it to func in browser
app.use(express.static("public"));  //allows us to access what is in public foldder, html, css, all statoc files
app.use("/api", apiRoutes) //setting up express to use api routes 
app.use("/", htmlRoutes) //lets express know whatever port running to display html

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
 
