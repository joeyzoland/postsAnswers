console.log("future mongoose connection and model loading")

var mongoose = require("mongoose")

var fs = require("fs")

var path = require("path")

//Change the below route to your database!!!
//Change the below route to your database!!!
//Change the below route to your database!!!
mongoose.connect("mongodb://localhost/postsAnswers")
var models_path = path.join(__dirname, "./../models")

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf(".js") >= 0) {
    require(models_path + "/" + file)
  }
})
