(function () {
    'use strict';

    angular.module('quipApp').directive('memoryInput', function () {
        return {
            restrict: 'A',
            link: function (scope) {
                scope.$watch('memory', function (value) {
                    // if we select the last memory put the focus to the next select
                    if (!!value && scope.computerFormData.memories.length === scope.motherboard.slots - 1) {
                        document.querySelector('#comp-proc').focus();
                    }

                    if (scope.computerFormData.memories.length === scope.motherboard.slots) {
                        return;
                    }

                    if (!!value) {
                        // we need to generate slotID, because when we use track by index in ng-repeat removing animation works with wrong item, look: http://stackoverflow.com/questions/18432584/ng-animate-animate-wrong-item-when-using-track-by-index-in-ng-repeat
                        scope.computerFormData.memories.push({'slotID': scope.slotID++, 'memoryID': value})
                        scope.memory = null;
                    }
                });
            }
        }
    });

    angular.module('quipApp').directive('sortable', function () {
        return {
            restrict: 'A',
            transclude: true,
            replace: true,
            template: '<th ng-click="toggleSortClasses()">' +
                '<span ng-transclude></span>' +
                '<span class="sort-indicator"></span>' +
                '</th>',
            scope: {
                order: '=',
                by: '=',
                reverse: '='
            },
            link: function (scope, element) {
                scope.toggleSortClasses = function () {
                    var angElems = angular.element( document.getElementsByClassName('sortable') );

                    if ( scope.order === scope.by ) {
                        scope.reverse = !scope.reverse
                    } else {
                        scope.by = scope.order;
                        scope.reverse = false;
                    }

                    if ( scope.reverse === true ) {
                        angElems.removeClass('sort-desc sort-asc');
                        element.addClass('sort-desc');
                    } else {
                        angElems.removeClass('sort-desc sort-asc');
                        element.addClass('sort-asc');
                    }
                };
            }
        }
    });

})();