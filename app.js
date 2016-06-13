var app = angular.module('myApp', []);

app.directive('makeEditable', function() {
	return {
		restrict: 'A',
		templateUrl: 'make-editable.html',
		transclude: true,
		link: function(scope, element, attrs) {
			scope.editable = false;
			scope.button = {
				action: "Edit"
			};
		}
	}
});

// -|- transclude content
// --on button click, toggle editability
// --on button click, change button text
// --when editable, apply red class
// --include attribute on at least two DOM elements
