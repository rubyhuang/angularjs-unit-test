describe('test home controller', function(){
	describe('test indexContrl', function(){
		var $scope;
		beforeEach(module('app'));
		beforeEach(inject(function($rootScope, $controller){
			$scope = $rootScope.$new();
			$controller('indexCtrl', {$scope: $scope});
		}));
		
		it('test user obj name is empty', function(){
			expect($scope.user.name).not.toBeNull();
		});
		
		it('test user obj aage is illeag', function(){
			expect($scope.user.age).toMatch(/^[1-9][0-9]{0,2}/);
		});
	});
});