console.log("friends model")
var mongoose = require("mongoose")

//Creates schema
var BoilerSchema = new mongoose.Schema({
  firstName: {type: String, required: true, minlength: 2},
  lastName: {type: String, required: true, minlength: 2},
  birthday: {type: Date, required: true}
})

//Sets our model
var Boiler = mongoose.model("Boiler", BoilerSchema)
