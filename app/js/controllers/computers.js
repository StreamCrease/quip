/* global angular */
(function () {
    'use strict';

    angular.module('quipApp').controller('ComputersController', ['$scope', function ($scope) {
        var models = require('./js/models/');
        $scope.motherboards=[];
        $scope.processors=[];
        $scope.memory=[];
        $scope.storage=[];

        $scope.MEMORY_TYPES = {
            1: 'DDR',
            2: 'DDR2',
            3: 'DDR3'
        };

        $scope.STORAGE_TYPES = {
            1: 'HDD',
            2: 'SSD'
        };
        $scope.computers = [
            { name: 'MBPro', processor: '2.5 GHz Intel Core i5', memory: '8 GB 1600 MHz DDR3', motherboards: 'Intel HD Graphics 4000 1024 MB' },
            { name: 'PC02', processor: '1.3 GHz Atom E6x0', memory: '3 GB 800 MHz DDR3', motherboards: 'Nvidia G-Force' },
            { name: 'MBPro', processor: '2.5 GHz Intel Core i5', memory: '6 GB 1600 MHz DDR3', motherboards: 'Intel HD Graphics 4000 1024 MB' },
            { name: 'PC04', processor: '1.5 GHz Atom N400', memory: '1 GB 1600 MHz DDR2', motherboards: 'ATI Radeon 2056 MB' },
            { name: 'PC05', processor: '2.5 GHz Intel Core i5', memory: '16 GB 1600 MHz DDR3', motherboards: 'Intel HD Graphics 4000 5024 MB' }
        ];

        $scope.computers=[{}];

        models(function (err, db) {
            var Computers =db.models.computer;
            var Motherboards=db.models.motherboards;
            var Processors=db.models.processors;
            var Memory =db.models.memory;
            var Storage =db.models.storage;

      /*     Computers.sync(function (err) {
             if (err) {
             console.log(err);
             } else {
             Computers.create({name:'PC02', processor:1, memory:1, storage:1, motherboards:1}, function (err, comp) {
             if (err) {
             console.log(err); throw err;
             } else  {
             console.log(comp);
             }
             });
             }
             });*/
            Motherboards.find({}, function (err, data) {
                if (err) {
                    throw err;
                } else {
                    $scope.$apply(function () {
                        $scope.motherboards=data;
                        console.log($scope.motherboards);

                    });
                }
            });
            Processors.find({}, function (err, data) {
                if (err) {
                    throw err;
                } else {
                    $scope.$apply(function () {
                        $scope.processors=data;

                    });
                }
            });
            Memory.find({}, function (err, data) {
                if (err) {
                    throw err;
                } else {
                    $scope.$apply(function () {
                        $scope.memory=data;

                    });
                }
            });

            Storage.find({}, function (err, data) {
                if (err) {
                    throw err;
                } else {
                    $scope.$apply(function () {
                        $scope.storage=data;

                    });
                }
            });
            Computers.find({}, function (err, data) {

                if (err) {
                    console.log(err); throw err;
                } else {

                    var result;
                    for(var i=0; i<data.length; i++){
                     $scope.$apply(bindData(data[i]));

                    }
                /*    $scope.$apply(function () {
                        $scope.computers=data;
                    });*/

                      data[0].getProcessor(function (err, Data) {
                        if (err) {
                            console.log(err); throw err;
                        } else {
                            console.log(Data);
                        }
                    });
                }
            })

        });


        function bindData(data){
            var temp;

            $scope.computers.push(
                {
                    name : data.name,
                    processor: data.processor.frequency +
                    'GHz ' +data.processor.manufacturer +' ' +  data.processor.cores
                    + 'x ' + data.processor.name,

                    memory:data.memory.mSize + 'GB ' + data.memory.rate + 'MHz ' + data.memory.type,
                   motherboards : data.motherboards.manufacturer + ' '+
                       $scope.MEMORY_TYPES[data.motherboards.memoryType] + ' ' +
                       data.motherboards.memorySlots + ' slots',
                    storage:data.storage.size+ 'GB ' + $scope.STORAGE_TYPES[data.storage.type]

                }
            )
        }

    }]);
})();