var app = angular.module('myApp', []);

app.directive('makeEditable', function() {
	return {
		restrict: 'A',
		templateUrl: 'make-editable.html',
		transclude: true,
		link: function(scope, element, attrs) {
			let editableElement = angular.element(document.getElementById('editable'));
			console.log(editableElement.attr('contenteditable'));

			scope.editable = false;
			scope.button = {
				action: "Edit"
			};

			let turnOnEditing = function() {
				scope.editable = true;
				scope.button.action = 'Save';
				editableElement.attr('contenteditable', true)
			};
			let turnOffEditing = function() {
				scope.editable = false;
				scope.button.action = 'Edit';
				editableElement.attr('contenteditable', false)
			};
			scope.toggleEditability = function() {
				scope.editable === false ? turnOnEditing() : turnOffEditing();
			};
		}
	}
});

// -|- transclude content
// -|-on button click, toggle editability
// -|-on button click, change button text
// -|-when editable, apply red class
// --include attribute on at least two DOM elements
