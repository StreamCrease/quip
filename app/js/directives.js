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

                option.outerHTML = '<option value="">Slot ' + attr.slot + '</option>';
                element[0].removeAttribute('ng-bind-model');
                select.setAttribute('ng-model', attr.ngBindModel);
                $compile(element.contents())(scope);

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
                    var el = $compile("<memory-select ng-bind-model='computerFormData.slot" + cur + "memoryID' data-slot='" + cur + "'></memory-select>")(scope);
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