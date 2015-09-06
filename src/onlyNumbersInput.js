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
