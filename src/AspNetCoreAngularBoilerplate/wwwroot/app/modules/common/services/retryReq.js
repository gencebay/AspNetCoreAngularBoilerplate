define(['modules/common/module'],
    function (module) {

        function RetryRequest($http, $injector) {
            this.$http = $http;
            this.request = {};
        }

        RetryRequest.prototype.store = function(request) {
            this.request = request;
        };

        RetryRequest.prototype.retry = function() {
           this.$http(this.request.config);
        };

        module.service('RetryRequestSrv', [ '$http', RetryRequest ]);
    });
