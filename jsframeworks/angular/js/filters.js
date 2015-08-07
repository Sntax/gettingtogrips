/* ===================================================== */
/* Author:                                   Andrew Hill */
/* Component:                                     Devpad */
/* Email:                         andrewjrhill@gmail.com */
/* Project URL:                                      TBA */
/* Description:                           Custom Filters */
/* ===================================================== */

// Setup custom filters to represent data in a more legible way
(function () {
  'use strict';

  var filters = angular.module('devpad.filters', []);

  // The Reddit API stores the time of creation in local epoch-second format.
  // This filter will compare "current" and "created-on" epoch-seconds to
  // return how long ago the post was created.
  filters.filter('convertEpochToHumanReadable', function() {

    return function (value) {

      var createdEpochUTC = value;
      var currentEpochUTC = Math.round(new Date().getTime()/1000.0);
      var comparedEpochUTC = (currentEpochUTC * 1000) - (createdEpochUTC * 1000);

      var days = Math.floor(comparedEpochUTC / 1000 / 60 / 60 / 24);
      var hours =  Math.floor(comparedEpochUTC / 1000 / 60 / 60);
      var minutes = Math.floor(comparedEpochUTC / 1000 / 60);
      var seconds = Math.floor(comparedEpochUTC / 1000);

      if (value) {
        if (days >= 1) {
          return days + ' days ago';
        } else if (hours >= 1) {
          return hours + ' hours ago';
        } else if (minutes >= 1) {
          return minutes + ' minutes ago';
        } else {
          return seonds + ' seconds ago';
        }
      } else {
        return '';
      }
    };
  });

}());
