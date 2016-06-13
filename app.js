var app = angular.module('myApp', []);

app.directive('makeEditable', function() {
	return {
		restrict: 'A',
		templateUrl: 'make-editable.html',
		link: function(scope, element, attrs) {
			scope.button = {
				action: "Edit"
			};
		}
	}
});

// on button click, toggle editability