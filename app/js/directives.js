/* global angular */
(function () {
    'use strict';

    angular.module('quipApp').directive('memorySelect', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            templateUrl: 'partials/directives/memory-select.html.tmpl',
            link: function (scope, element, attr) {
                var option = element[0].querySelector('option');
                var select = element[0].querySelector('.form-control');

                option.text = 'Slot ' + attr.slot;
                element[0].removeAttribute('data-cust-bind-model');
                select.setAttribute('ng-model', attr.custBindModel);
                $compile(select)(scope);

                scope.$watch('computerFormData.slot' + scope.currentSlot + 'memoryID', function (newValue, oldValue) {
                    if (oldValue === undefined && !!newValue) {
                        scope.currentSlot++;
                        addMemorySelect(scope.currentSlot);
                    }
                });

                function addMemorySelect (cur) {
                    if (!checkMotherSlots(cur)) {
                        return;
                    }
                    var el = $compile('<memory-select data-cust-bind-model="computerFormData.slot' + cur + 'memoryID" data-slot="' + cur + '"></memory-select>')(scope);
                    element.parent().append(el);
                }

                function checkMotherSlots (cur) {
                    if (cur > +scope.motherboard.slots) {
                        return false;
                    }

                    return true;
                }
            }
        }
    }]);
})();