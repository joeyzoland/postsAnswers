var app = angular.module("app", ["ngRoute"])

//This file handls all angular routes (client side)
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/list.html",
      controller: "listController"
    })
    .otherwise({
      redirectTo: "/"
    })
})



//MEANFriends code below for reference

// app.config(function ($routeProvider) {
//   $routeProvider
//     .when("/", {
//       templateUrl: "partials/new.html",
//       controller: "newController"
//     })
//     .when("/edit/:id", {
//       templateUrl: "partials/edit.html",
//       controller: "editController"
//     })
//     .when("/list", {
//       templateUrl: "partials/list.html",
//       controller: "listController"
//     })
//     .when("/show/:id", {
//       templateUrl: "partials/show.html",
//       controller: "showController"
//     })
//     .otherwise({
//       redirectTo: "/"
//     })
// })
