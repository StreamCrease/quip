angular.module('app').controller('ComputersController', function () {

    var vm = this;
    
    vm.computers = [
        { name: 'MBPro', processor: '2.5 GHz Intel Core i5', memory: '8 GB 1600 MHz DDR3', graphics: 'Intel HD Graphics 4000 1024 MB' },
        { name: 'PC02', processor: '1.3 GHz Atom E6x0', memory: '3 GB 800 MHz DDR3', graphics: 'Nvidia G-Force' },
        { name: 'MBPro', processor: '2.5 GHz Intel Core i5', memory: '6 GB 1600 MHz DDR3', graphics: 'Intel HD Graphics 4000 1024 MB' },
        { name: 'PC04', processor: '1.5 GHz Atom N400', memory: '1 GB 1600 MHz DDR2', graphics: 'ATI Radeon 2056 MB' },
        { name: 'PC05', processor: '2.5 GHz Intel Core i5', memory: '16 GB 1600 MHz DDR3', graphics: 'Intel HD Graphics 4000 5024 MB' }
    ];

});