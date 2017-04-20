app.controller("mainController", function($scope, boilerFactory, $location) {
    $scope.boilers=[]

    var loginCheck = function() {
      boilerFactory.loginCheck(function(data) {
        //This function will only return once a username is inserted
        //In which case, we can store the name and load the page as normal
        $scope.login = data
      })
    }
    loginCheck()

    $scope.logOut = function() {
      console.log("hit logOut button")
      boilerFactory.logOut()
      //Other controllers should redirect to this page with $location.url()
      //After the logOut function is complete

      //After someone logs out, they can log back in with a new name
      $location.url("/")
      loginCheck()
    }
})
