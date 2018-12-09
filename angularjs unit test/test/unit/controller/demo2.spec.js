describe('test demo2 controller', function(){
	describe('test demo2Contrl', function(){
		beforeEach(module('appCdemo2'));
		describe('demo2Ctrl', function () {
			it('add test', inject(function ($controller) {
				var $scope = {};
				var demo2Ctrl = $controller('demo2Ctrl', {$scope: $scope});
				expect(demo2Ctrl).toBeDefined();
				expect($scope.add(2, 3)).toEqual(5);
			}));

		});
	});
});