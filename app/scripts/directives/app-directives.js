app.directive('optIn', function() {
	return {
		templateUrl: './templates/signup-form.html',
		restrict: 'AE',
		transclude: true,
		replace: true
	}
});
