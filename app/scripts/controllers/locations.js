'use strict';

angular.module('angularDiningappApp')
  .controller('LocationsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


$http.get('/data/location_hours.json', {cache: true})
// success 
.success(function(data) {
	// here we would want to use ng-repeat to loop over 
	// the result set adding elements to a table variable

	// then empty bs modal window first to make sure we don't get dupes

	// then we'd append modal with the items we added to the table

	// then we'd add the locationName to get an h1 element

	alert('got it');
				   
})
// error branch
.error(function(data) {

});