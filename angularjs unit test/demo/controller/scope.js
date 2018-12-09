angular.module("app", [])
	.controller("indexCtrl", ['$scope', function($scope){
		$scope.user = {
			name: 'name1',
			age: '21'
		}
	}]);