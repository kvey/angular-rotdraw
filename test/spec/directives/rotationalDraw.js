'use strict';

describe('Directive: rotationalDraw', function () {
  beforeEach(module('RotDrawApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<rotational-draw></rotational-draw>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the rotationalDraw directive');
  }));
});
