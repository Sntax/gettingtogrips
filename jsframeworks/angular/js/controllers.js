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

  // Pass $scope to controller to store variables which will later be
  // displayed on the page under the matching controller name
  controllers.controller('AppCtrl', function($scope){
    // Define default values for given scope variables
    $scope.title = 'Default post title';
    $scope.domain = 'www.example.com';
    $scope.ups = '0000';
    $scope.subreddit = '/r/subreddit';
    $scope.created_utc = '0000 minutes';
    $scope.num_comments = '0000';
  });

  // Create a controller to handle Reddit API Data
  // Call $scope for scope and $http to retrieve API data
  controllers.controller('postsListCtrl', function($scope, $http){
    $scope.list = undefined;

    // Load Reddit API Data via jsonp by passing url and 
    $http.jsonp('http://www.reddit.com/r/accessibility+css+frontend+html+javascript+semanticweb+usability+web_design+webdev/.json?jsonp=JSON_CALLBACK').then(function(data){
      // Update scope LIST VARIABLE to contain data returned by jsonp promise
      // The LIST VARIABLE is what is passed to your ng-repeat
      $scope.list = data.data.data.children;
    });
  });

}());
