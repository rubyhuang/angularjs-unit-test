describe('MyApp', function(){
	beforeEach(module('myApplicationModule'));
	
	it('should provide a version', inject(function(mode, version){
		expect(version).toEqual('v1.0.1');
		expect(mode).toEqual('app');
	}));
	
	it('shold override a version and test the new version is injected', function(){
		module(function($provide){
			$provide.value('version', 'overridden');
		});
		inject(function(version){
			expect(version).toEqual('overridden');
		});
	});
});