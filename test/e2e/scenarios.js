/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
(function () {
    'use strict';

    describe('Quip app', function () {

        it('should redirect index.html to index.html#/computers', function () {
            browser.get('app/index.html');
            browser.getLocationAbsUrl().then(function (url) {
                expect(url).toMatch('/computers');
            });
        });

        describe('Computers list view', function () {
            beforeEach(function () {
                browser.get('app/index.html#/computers');
            });

            var query = element(by.model('$parent.query'));
            it('should filter the computer list as a user types into search box', function () {
                var comuterList = element.all(by.repeater('computer in computers'));

                expect(comuterList.count()).toBe(5);

                query.sendKeys('intel');
                expect(comuterList.count()).toBe(3);

                query.clear();
                query.sendKeys('radeon');
                expect(comuterList.count()).toBe(1);

            });

            // it('should open the add form', function () {
            //     element(by.css('[ng-click="openComputerModal()"]')).click();
            //     var name = element(by.model('computerFormData.name'));
            //     name.sendKeys('test');
            //     var mother = element(by.model('computerFormData.mother'));
            // });
        });

        describe('Hardware list view', function () {
            beforeEach(function () {
                browser.get('app/index.html#/hardware');
            })

            var query = element(by.model('$parent.query'));
            it('should filter the memory list as a user types into search box', function () {
                var memoryList;

                memoryList = element.all(by.repeater('mem in memory'));

                expect(memoryList.count()).toBe(5);

                query.sendKeys('800');
                expect(memoryList.count()).toBe(1);

                query.clear();
                query.sendKeys('1600');
                expect(memoryList.count()).toBe(4);
            });

        });
    });
})();