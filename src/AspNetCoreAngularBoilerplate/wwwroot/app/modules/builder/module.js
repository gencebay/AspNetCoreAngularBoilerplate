define(['vendor/angular',
    'vendor/angular-sanitize',
    'vendor/angular-animate',
    'vendor/angular-route',
    'vendor/bindonce',
    'modules/common/services/authInterceptor',
    'modules/common/services/ajaxHeader'], function (angular, token) {

        var module = angular.module('builder', [
            'ngSanitize',
            'ngAnimate',
            'ngRoute',
            'pasvaz.bindonce',
            'sentFactory']);

        module.config(config);

        config.$inject = ['$sceDelegateProvider'];
        function config($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads.
                'self'
            ]);
        }
        return module;
    });