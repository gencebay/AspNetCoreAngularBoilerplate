define(['modules/builder/module'], function (module) {


    function MetricWrapper($window) {
        return {
            record: function (eventName) {
                if (eventName !== '' && $window._metricProvider) {
                    // todo metric push SASS
                    $window._metricProvider.push(['record', eventName]);
                }
            }
        };
    }

    module.factory('MetricWrapperSvc', ['$window', MetricWrapper]);
});