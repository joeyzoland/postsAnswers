console.log("reached boiler controller")

var mongoose = require("mongoose")

//Gets our model
var Boiler = mongoose.model("Boiler")

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
          res.json({message: "Error", error: "Could not make boiler."})
      } else {
          module.exports.index(req, res)
      }
    })
  },
  update: function(req, res) {
    Boiler.findOne({_id: req.params.id}, function(err, boiler) {
      if (err) {
        res.json({message: "Error", error: "Error: Could not find boiler for updating."})
      }
      else {
        if (req.body.firstName) {
          boiler.firstName = req.body.firstName
        }
        if (req.body.lastName) {
          boiler.lastName = req.body.lastName
        }
        if (req.body.birthday) {
          boiler.birthday = req.body.birthday
        }
        boiler.save(function(err) {
          if(err) {
            res.json({message: "Error", error: "Error: Could not save updates to boiler."})
          }
          else {
            module.exports.index(req, res)
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
