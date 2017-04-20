console.log("Reached boilerFactory")

app.factory("boilerFactory", function($http) {

  var factory = {}

  var login;
  factory.loginCheck = function(callback) {
    if (!login) {
      while (loginAttempt == null || loginAttempt == "" | loginAttempt.length < 3) {
        if (!counter) {
          var counter = 0
        }
        counter += 1
        var loginAttempt = prompt("Please insert a name that is at least 3 characters in length.")
        console.log("On attempt " + counter + ", you inserted", loginAttempt)
      }
    }
    callback(loginAttempt)
  }
  factory.logOut = function() {
    login = null
  }



  factory.index = function(callback) {
    $http.get("/boiler").then(function(returned_data) {
      // Make sure this callback is inside the promise!!!
      callback(returned_data.data)
    })
  }
  factory.show = function(id, callback) {
    $http.get("/boiler/" + id).then(function(returned_data) {
      callback(returned_data.data)
    })
  }
  factory.create = function(newBoiler, callback) {
    $http.post("/boiler", newBoiler).then(function(returned_data) {
      //Hmm, I think these callbacks are pertaining to the scope?
      if (typeof(callback) == "function") {
        if (returned_data.data.message === "Success") {
          factory.createMessage = "User created successfully!"
        }
        callback(returned_data.data)
      }
    })
  }
  factory.update = function(fullBoilerObject, callback) {
    $http.put("/boiler/" + fullBoilerObject.id, fullBoilerObject.object).then(function(returned_data) {
      if (typeof(callback) == "function") {
        if (returned_data.data.message === "Success") {
          factory.updateMessage = "User updated successfully!"
        }
        callback(returned_data.data)
      }
    })
  }
  factory.delete = function(id, callback) {
    $http.delete("/boiler/" + id).then(function(returned_data) {
      callback(returned_data.data)
    })
  }
  return factory
})



//Code from MEANFriends below for reference:

// app.factory("friendsFactory", function($http) {
//   //Need a private variable here to keep track?
//   var factory = {}
//   factory.index = function(callback) {
//     $http.get("/friends").then(function(returned_data) {
//       // Make sure this callback is inside the promise!!!
//       callback(returned_data.data)
//     })
//   }
//   factory.show = function(id, callback) {
//     $http.get("/friends/" + id).then(function(returned_data) {
//       callback(returned_data.data)
//     })
//   }
//   factory.create = function(newFriend, callback) {
//     $http.post("/friends", newFriend).then(function(returned_data) {
//       //Hmm, I think these callbacks are pertaining to the scope?
//       if (typeof(callback) == "function") {
//         if (returned_data.data.message === "Success") {
//           factory.createMessage = "User created successfully!"
//         }
//         callback(returned_data.data)
//       }
//     })
//   }
//   factory.update = function(fullFriendObject, callback) {
//     $http.put("/friends/" + fullFriendObject.id, fullFriendObject.object).then(function(returned_data) {
//       if (typeof(callback) == "function") {
//         if (returned_data.data.message === "Success") {
//           factory.updateMessage = "User updated successfully!"
//         }
//         callback(returned_data.data)
//       }
//     })
//   }
//   factory.delete = function(id, callback) {
//     $http.delete("/friends/" + id).then(function(returned_data) {
//       callback(returned_data.data)
//     })
//   }
//   return factory
// })
