app.controller("showController", function($scope, boilerFactory, $routeParams) {
  $scope.boiler = {}

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

  $scope.like = function(object) {
    var index = 0
    for (var i = 0; i < $scope.boiler.answers.length; i++) {
      if ($scope.boiler.answers[i] == object) {
        index = i
        break
      }
    }
    boilerFactory.like($routeParams.id, index, function(data) {
      if (data.message == "Error") {
        $scope.message = data.error
        console.log("got error")
      }
      else if (data.message == "Success") {
        $scope.boiler = data.objects
      }
    })
  }
})
