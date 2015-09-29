'use strict';
angular.module('hussesFilters', [])
	.filter('reverse', function () {
		return function (input) {
			var i, out;
			if (angular.isString(input)) {
				out = '';
				for (i = 0; i < input.length; i = i + 1) {
					out = input.charAt(i) + out;
				}
				return out;
			} else {
				return input;
			}
		};
	});