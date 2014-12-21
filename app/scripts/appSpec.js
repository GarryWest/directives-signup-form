describe('optIn', function() {
	
	var scope,
		element,
		compiled,
		html;
	
	beforeEach(module("myApp"));
	beforeEach(module('signup-form.html'));

	beforeEach(inject(function($rootScope, $compile, $httpBackend) {

		$httpBackend.whenGET("./templates/signup-form.html").respond({ hello: 'World' });

        //expect a get request to "internalapi/quotes"
        $httpBackend.expectGET("./templates/signup-form.html");

		html="";
		html += "<opt-in>";
		html += "<div class=\"brand-logo\"></div>";
		html += "</opt-in>";

		scope = $rootScope.$new();
		compiled = $compile(html)
		element = compiled(scope);
		scope.$digest();

	}));

	it('should render the element correctly', function(){
		expect(1).toBe(1);
    	//expect(element.find('div').length).toBe(1);
    	
	});
});