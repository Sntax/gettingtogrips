/* ===================================================== */
/* Author:                                   Andrew Hill */
/* Component:                                     Devpad */
/* Email:                         andrewjrhill@gmail.com */
/* Project URL:                                      TBA */
/* Description:                  Application Controllers */
/* ===================================================== */

// Setup application controllers to manage scope on page
(function () {
  'use strict';

  // Create a controller module
  var controllers = angular.module('devpad.controllers', []);

  // Create a controller to handle Reddit API Data
  // Call $scope for scope and $http to retrieve API data
  controllers.controller('postsListCtrl', function($scope, $http){
    $scope.posts = undefined;

    // Load Reddit API Data via jsonp by passing url and 
    $http.jsonp('http://www.reddit.com/r/accessibility+css+frontend+html+javascript+semanticweb+usability+web_design+webdev/.json?jsonp=JSON_CALLBACK').then(
      function(data){
      
      // Update scope POSTS VARIABLE to contain data returned by jsonp promise
      // The POSTS VARIABLE is what is passed to your ng-repeat
      $scope.posts = data.data.data.children;
      console.log($scope.posts);
      // Sort returned data by 'ups' (upvotes) paramater returned by API.
      $scope.posts.sort(
          function(a, b) {
            return parseFloat(b.data.ups) - parseFloat(a.data.ups);
          }
        );
        return $scope.posts;
      }
    );
  });
}());
