describe('test directive', function(){
	var $compile;
	var $rootScope;
	beforeEach(module('appDirective'));
	
	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));
	
	it('test directive aGreatEye', function(){
		var element = $compile('<a-great-eye></a-great-eye>')($rootScope);
		$rootScope.$digest();
		expect(element.html()).toContain('title');
	});
});