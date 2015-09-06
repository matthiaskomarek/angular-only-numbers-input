/*!
 * angular-only-numbers-input
 * https://github.com/matthiaskomarek/angular-only-numbers-input#readme
 * Version: 1.0.0 - 2015-09-06T22:09:39.748Z
 * License: MIT
 */


(function () { 
'use strict';
angular.module('mk.onlyNumbersInput', [])
	.directive('onlyNumbers', function () {
		return {
	    	restrict: 'A',
	    	replace: false,
	    	require: 'ngModel',
	    	link: function(scope, iElement, iAttrs, ngModelCtrl) {
	    		ngModelCtrl.$parsers.push(function (inputValue) {

	    			if(inputValue === undefined) {
	    				return '';
	    			}
	    			var numberInput = inputValue.toString().replace(/[^0-9]/g, '');
	    			var min = parseInt(iAttrs.min);
	    			var max = parseInt(iAttrs.max);

	    			if(numberInput === '') {
	    				numberInput = min;
	    			}
	    			numberInput = parseInt(numberInput);

	    			if(numberInput > max) {
	    				numberInput = max;
	    			}

	    			ngModelCtrl.$setViewValue(numberInput);
	    			ngModelCtrl.$commitViewValue();
	    			ngModelCtrl.$render();

	    			return numberInput;
	    		});
	    	}
	    };
	});

}());