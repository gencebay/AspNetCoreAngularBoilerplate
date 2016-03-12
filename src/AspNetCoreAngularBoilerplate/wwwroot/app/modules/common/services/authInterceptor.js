define(['modules/common/module', 'modules/common/services/retryReq'], function (module) {

    module.factory('authInterceptor', ['$injector', '$rootScope', '$q', function($injector, $rootScope, $q) {
        return {
            responseError : function(rejection) {

                if (rejection.status === 401) {
                    $rootScope.showLoginForm = true;
                    var RetryRequestSrv = $injector.get('RetryRequestSrv');
                    RetryRequestSrv.store(rejection);
                }

                return $q.reject(rejection);
            }
        };
    }]);

    module.config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }]);

});
