var express = require("express")
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    root = __dirname,
    mongoose = require("mongoose")

require("./server/config/mongoose.js")

app.use(express.static(path.join(root, "client")))
app.use(express.static(path.join(root, "bower_components")))

//Make sure bodyParser is placed before routes, as shown below
app.use(bodyParser.json())
var routes = require("./server/config/routes.js")(app)

app.listen(8000, function() {
  console.log("server running on port 8000")
})
