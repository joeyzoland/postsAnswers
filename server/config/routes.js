console.log("future routes")

var boilers = require("../controllers/questions.js")

module.exports = function(app){
  app.get("/boiler", function(req, res) {
    console.log("reached friends.index")
    boilers.index(req, res)
  })
  app.get("/boiler/:id", function(req, res) {
    console.log("reached friends.show")
    boilers.show(req, res)
  })
  app.post("/boiler", function(req, res) {
    console.log("req.body", req.body)
    boilers.create(req, res)
  })

  app.post("/boilerPush/:id", function(req, res) {
    console.log("req.body", req.body)
    boilers.createAnswer(req, res)
  })
  app.put("/boilerLike/:id", function(req, res) {
    console.log("in routes, req.body is", req.body)
    boilers.like(req, res)
  })

  app.put("/boiler/:id", function(req, res) {
    boilers.update(req, res)
  })
  app.delete("/boiler/:id", function(req, res) {
    console.log("id at app.delete is", req.params.id)
    boilers.delete(req, res)
  })
}
