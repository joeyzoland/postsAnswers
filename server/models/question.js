console.log("friends model")
var mongoose = require("mongoose")

//Creates schema
var QuestionSchema = new mongoose.Schema({
  user: {type: String, required: true, minlength: 3},
  mainText: {type: String, required: true, minlength: 10},
  suppText: {type: String},
  answers: Array
})

//Sets our model
var Question = mongoose.model("Question", QuestionSchema)
