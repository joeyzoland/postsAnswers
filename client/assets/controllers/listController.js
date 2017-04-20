console.log("Reached listController")

app.controller("listController", function($scope, boilerFactory, $routeParams) {
  $scope.boilers=[]

  var index = function() {
    boilerFactory.index(function(data) {
      if (data.message == "Success") {
        $scope.boilers = data.objects
      }
      else if (data.message == "Error") {
        $scope.message = data.error
      }
    })
  }
  index()

})



//All controller code for MEANFriends is below

// app.controller("listController", function($scope, friendsFactory, $routeParams) {
//   $scope.friends=[]
//   if (friendsFactory.createMessage){
//     $scope.message = friendsFactory.createMessage
//     friendsFactory.createMessage = undefined
//   }
//   if (friendsFactory.updateMessage){
//     $scope.message = friendsFactory.updateMessage
//     friendsFactory.updateMessage = undefined
//   }
//
//   var index = function() {
//     friendsFactory.index(function(data) {
//       if (data.message == "Success") {
//         $scope.friends = data.objects
//       }
//       else if (data.message == "Error") {
//         $scope.message = data.error
//       }
//     })
//   }
//   index()
//
//   $scope.delete = function(id) {
//     friendsFactory.delete(id, function(data) {
//       if (data.message == "Success") {
//         $scope.message = "User deleted successfully!"
//         $scope.friends = data.objects
//       }
//       else if (data.message == "Error") {
//         $scope.message = data.error
//       }
//     })
//   }
// })



// app.controller("newController", function($scope, friendsFactory, $location) {
//   $scope.friends=[]
//
//   $scope.index  = function() {
//     friendsFactory.index(function(data) {
//       $scope.friends = data
//     })
//   }
//   $scope.index()
//   $scope.show = function() {
//     friendsFactory.show(function(data) {
//       $scope.friends = data
//     })
//   }
//   $scope.create = function() {
//     var firstName = $scope.firstModel
//     var lastName = $scope.lastModel
//     var birthday = $scope.birthdayModel
//     var newFriend = {firstName: firstName, lastName: lastName, birthday: birthday}
//
//     friendsFactory.create(newFriend, function(data) {
//       if (data.message == "Success") {
//         $location.url("/list")
//       }
//       else if (data.message == "Error") {
//         $scope.message = data.error
//       }
//     })
//   }
// })



// app.controller("showController", function($scope, friendsFactory, $routeParams) {
//   $scope.friends = {}
//
//   $scope.show = function() {
//     friendsFactory.show($routeParams.id, function(data) {
//       if (data.message == "Error") {
//         $scope.message = data.error
//       }
//       else if (data.message == "Success") {
//         $scope.friends = data.objects[0]
//       }
//     })
//   }
//   $scope.show()
// })



// app.controller("editController", function($scope, friendsFactory, $routeParams, $location) {
//   $scope.friends = {}
//
//   $scope.show = function() {
//     friendsFactory.show($routeParams.id, function(data) {
//       if (data.message === "Success") {
//         //I use data.objects[0] because my data.objects is a list,
//         //even though it only returned one object, still have to dig it out
//         data.objects[0].birthday = new Date(data.objects[0].birthday)
//         $scope.friends = data.objects[0]
//       }
//       else if (data.message === "Error") {
//         $scope.message = data.error
//       }
//     })
//   }
//   $scope.show()
//
//   $scope.update = function() {
//     var firstName = $scope.firstModel
//     var lastName = $scope.lastModel
//     var birthday = $scope.birthdayModel
//     var id = $routeParams.id
//     var fullFriendObject = {
//       id: id,
//       object:{firstName: firstName, lastName: lastName, birthday: birthday}
//     }
//
//     friendsFactory.update(fullFriendObject, function(data) {
//       if (data.message === "Success") {
//         $location.url("/list")
//       }
//       else if (data.message === "Error") {
//         $scope.message = data.error
//       }
//     })
//   }
// })
//
