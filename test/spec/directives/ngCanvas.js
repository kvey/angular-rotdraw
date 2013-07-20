'use strict';

describe('Directive: ngCanvas', function () {
  beforeEach(module('RotDrawApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<ng-canvas></ng-canvas>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the ngCanvas directive');
  }));
});
