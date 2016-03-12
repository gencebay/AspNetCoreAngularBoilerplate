define(['config',
    'vendor/angular',
    'modules/builder/module'],
function (config, angular, builder) {

    function RouteConfig($routeProvider) {

        $routeProvider
            .when("/welcome", { action: "welcome" })
            .otherwise({ redirectTo: "/default" });

    };

    builder.config(['$routeProvider', RouteConfig]);
});