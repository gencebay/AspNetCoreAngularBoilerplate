define([
    'vendor/angular',
    'config',
    'modules/builder/module',
    'vendor/text!modules/builder/templates/header.html'],
function (angular, config, module, template) {

    module.directive('builderHeader', ['$rootScope', '$timeout', '$route', '$filter', '$location', Header]);

    function Header($rootScope, $timeout, $route, $filter, $location) {

        var directive = {
            restrict: 'EA',
            replace: true,
            template: template,
            link: link
        };

        return directive;

        function link(scope, element, attr) {
            var loaded = false;

            scope.progress = 'idle';

            scope.$watch('builderState', function (value) {

                console.log("builderState changed: ", value);
            });
        }
    }
});