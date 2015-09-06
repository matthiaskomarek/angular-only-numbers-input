'use strict';

describe('generate numberInput directive', function() {
  var elm, $scope;

  var inputValue = 23;
  var min = 0;
  var max = 100;

  beforeEach(module('mk.onlyNumbersInput'));

  beforeEach(inject(function($rootScope, $compile) {
    elm = angular.element('<input type="text" only-numbers max="' + max + '" min="' + min + '" ng-model="inputValue">');

    $scope = $rootScope.$new();
    $scope.inputValue = inputValue;
    elm = $compile(elm)($scope);

    $scope.$digest();

  }));

  it('ng-model should be number', function() {
    expect($scope.inputValue).toBeDefined();
  });

  it('should only allow numbers', function() {
    elm.val('er3g').triggerHandler('input');
    $scope.$digest();
    expect($scope.inputValue).toBe(3);
  });

  it('should only allow numbers lower than max attr', function() {
    elm.val('120').triggerHandler('input');
    $scope.$digest();
    expect($scope.inputValue).toBe(100);
  });

});
