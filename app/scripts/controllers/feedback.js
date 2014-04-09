'use strict';

angular.module('angularDiningappApp')
  .controller('FeedbackCtrl', ['$scope', function($scope) {
    $scope.formInfo = {};
    $scope.saveData = function() {
    	console.log($scope.formInfo);
    	$scope.emailRequired = '';
    	if (!$scope.formInfo.Email) {
    		$scope.emailRequired = 'Email Required';
    	}
    };

  }])
  .controller('FeedbackCtrl2', [function () {


  }]);

