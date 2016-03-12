define([
    'config',
    'vendor/angular',
    'modules/builder/module'],
function (config, angular, emailbuilder) {

    function RouteConfig($routeProvider) {

        $routeProvider
            .when("/welcome", { action: "firstrun" })
            .otherwise({ redirectTo: "/default" });

    };

    emailbuilder.config(['$routeProvider', RouteConfig]);
});