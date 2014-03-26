'use strict';

angular.module('angularDiningappApp')
  .controller('LocationsCtrl', function ($scope, $http) {
	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //$scope.locationsHours = [];
    $http.get('data/phones.json')
    .success(function(data) {
    	$scope.phones = data;

    	//alert('got it');
    })
    .error(function(data) {
    	alert('did not receive');
    });
$scope.orderProp = 'age';
  });


