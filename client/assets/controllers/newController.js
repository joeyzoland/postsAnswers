app.controller("newController", function($scope, boilerFactory, $location) {
  $scope.friends=[]

  $scope.create = function() {
    console.log("before creating, boilerFactory.login is", boilerFactory.login)
    var user = boilerFactory.login
    var mainText = $scope.questionModel
    var suppText = $scope.supplementModel
    var newQuestion = {user: user, mainText: mainText, suppText: suppText}

    boilerFactory.create(newQuestion, function(data) {
      if (data.message == "Success") {
        $location.url("/")
      }
      else if (data.message == "Error") {
        $scope.message = data.error
      }
    })
  }
})
