define([
    'vendor/angular',
    'vendor/requirejs-domready/domReady!',
    './config/routeConfig',
    './controllers/builder',
], function (angular, doc, routes, builderCtrl) {

    angular.bootstrap(doc, ['builder']);

});