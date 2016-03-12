define(['vendor/angular'], function(angular) {

    console.log("Angular is:", angular.version);
    
    var module = angular.module('sentFactory', []);    
    return module;
});