'use strict';

angular.module('angularDiningappApp')
  .controller('LocationsCtrl', function ($scope, $http) {
	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //$scope.locationsHours = [];
    $http.get('data/new_loc_hours.json')
    .success(function(data) {
    	$scope.locations = data;

    	//alert('got it');
    })
    .error(function(data) {
    	alert('did not receive');
    });
$scope.orderProp = 'age';
  });


