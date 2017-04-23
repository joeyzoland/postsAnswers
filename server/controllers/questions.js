console.log("reached boiler controller")

var mongoose = require("mongoose")

//Gets our model
var Boiler = mongoose.model("Question")

module.exports = {
  index: function(req, res) {
    Boiler.find({}, function(err, boilers) {
      if(err) {
        res.json({message: "Error", error: "Could not find any boilers."})
      }
      else {
        res.json({message: "Success", objects: boilers})
      }
    })
  },
  create: function(req, res) {
    var boiler = new Boiler(req.body)
    boiler.save(function (err) {
      if(err) {
          res.json({message: "Error", error: "Could not create question. Please ensure that your question is at least 10 characters long."})
      } else {
          module.exports.index(req, res)
      }
    })
  },

  createAnswer: function(req, res) {
    var answer = req.body
    Boiler.findOne({_id: req.params.id}, function(err, boiler) {
      if (err) {
        res.json({message: "Error", error: "Error: Could not find question to add answer to."})
      }
      else {
        if (req.body.mainText.length >= 5) {
          boiler.answers.push(req.body)
          boiler.save(function(err) {
            if(err) {
              console.log(err)
              res.json({message: "Error", error: "Error: Could not save updates to boiler."})
            }
            else {
              module.exports.index(req, res)
            }
          })
        }
        else {
          res.json({message: "Error", error: "Error: Please ensure that your answer is at least 5 characters long."})
        }
      }
    })
  },

  like: function(req, res) {
    Boiler.findOne({_id: req.params.id}, function(err, boiler) {
      if (err) {
        res.json({message: "Error", error: "Error: Could not find question to add answer to."})
      }
      else {
        console.log("boiler.answers[req.body.index].likes is", boiler.answers[req.body.index].likes)
        boiler.answers[req.body.index].likes = boiler.answers[req.body.index].likes + 1
        console.log("After updating, boiler.answers[req.body.index].likes is", boiler.answers[req.body.index].likes)
        boiler.markModified("answers")
        boiler.save(function(err) {
          if(err) {
            console.log(err)
            res.json({message: "Error", error: "Error: Could not update like for boiler."})
          }
          else {
            console.log("saved successfully")
            res.json({message: "Success", objects: boiler})
          }
        })
      }
    })
  },

  delete: function(req, res) {
    Boiler.remove({_id: req.params.id}, function (err) {
      if (err) {
          res.json({message: "Error", error: "Error: Could not delete boiler."})
      } else {
          module.exports.index(req, res)
      }
    })
  },
  show: function(req, res) {
    Boiler.find({_id: req.params.id}, function(err, boiler) {
      if(err) {
        res.json({message: "Error", error: "Error: Could not find boiler."})
      }
      else {
        res.json({message: "Success", objects: boiler})
      }
    })
  }
}
