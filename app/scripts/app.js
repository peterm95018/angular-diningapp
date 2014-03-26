'use strict';

angular.module('angularDiningappApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'leaflet-directive'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .when('/feedback', {
        templateUrl: 'views/feedback.html',
        controller: 'FeedbackCtrl'
      })
      .when('/locations', {
        templateUrl: 'views/locations.html',
        controller: 'LocationsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
