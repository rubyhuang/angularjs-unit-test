angular.module("appDirective", [])
	.directive('aGreatEye', function(){
		return {
			restrict: 'E',
			replace: true,
			template: '<h1>this is title</h1>'
		}
	});