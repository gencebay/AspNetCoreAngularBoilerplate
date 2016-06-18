define([
    'modules/builder/module',
    'modules/builder/services/metricWrapper',
    'modules/builder/services/metricEvents',
    'config'],
    function (emailbuilder, wrapper, events, config) {

        function UiMetric(MetricEventsSvc, MetricWrapperSvc) {
            return function (scope, elem, attr) {
                if (!config.settings.isUiMetricsEnabled) return;

                elem.on('click', function () {
                    var event = MetricEventsSvc.getEvent(attr.uiMetric)[attr.flag] || attr.uiMetric;
                    MetricWrapperSvc.record(event);
                });
            };
        }

        emailbuilder.directive('uiMetric', ['MetricEventsSvc', 'MetricWrapperSvc', UiMetric]);

        if (TESTING) {
            return UiMetric;
        }
    });