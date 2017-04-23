app.controller("newAnswerController", function($scope, boilerFactory, $location, $routeParams) {
  $scope.friends=[]

  $scope.show = function() {
    boilerFactory.show($routeParams.id, function(data) {
      // console.log("reached controller's show")
      // console.log("In the show controller, data is", data)
      if (data.message == "Error") {
        $scope.message = data.error
        console.log("got error")
      }
      else if (data.message == "Success") {
        $scope.boiler = data.objects[0]
      }
    })
  }
  $scope.show()

  $scope.create = function() {
    console.log("before creating answer, boilerFactory.login is", boilerFactory.login)
    var user = boilerFactory.login
    var mainText = $scope.answerModel
    var suppText = $scope.supplementModel
    var newAnswer =
    {id: $routeParams.id,
      object: {user: user, mainText: mainText, suppText: suppText, likes: 0}
    }

    boilerFactory.createAnswer(newAnswer, function(data) {
      if (data.message == "Success") {
        $location.url("/")
      }
      else if (data.message == "Error") {
        $scope.message = data.error
      }
    })
  }
})
