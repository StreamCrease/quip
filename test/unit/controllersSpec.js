(function () {
    'use strict';

    describe('ComputersController', function () {

        beforeEach(module('quipApp'));

        it('should create computers model with 5 computers here', inject(function ($controller) {
            var scope = {},
                ctrl = $controller('ComputersController', {$scope: scope});

            expect(scope.computers.length).toBe(5);
        }));
    });
})();
