define([
    'config',
    'vendor/angular',
    'jquery',
    'modules/builder/module',
    'underscore', 
    'bootstrap',
    'modules/builder/directives/fileUploadManager'],
function (config, angular, $, rootModule, _, bootstrap, fileUploadManager) {

    function BuilderCtrl($scope, $rootScope, $location) {

        if (config.isFirstRun) {
            $location.path('/welcome');
        }

        $scope.title = "Global Environment";
        $scope.languages = "en-US";
    };

    rootModule.controller('BuilderCtrl', ['$scope', '$rootScope', '$location', BuilderCtrl]);
});