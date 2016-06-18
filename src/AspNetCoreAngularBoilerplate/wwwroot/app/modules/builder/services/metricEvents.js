define(['modules/builder/module'], function (module) {

    var events = {
        preview: { prev: 'Continued Editing Canvas Content', next: 'Finished Editing Canvas Content' },
        default: { prev: 'Returned to Canvas Template Gallery', next: '' }
    };

    function MetricEvents() {
    }

    MetricEvents.prototype.getEvent = function (uiState) {
        return events[uiState] || events.default;
    };


    module.service('MetricEventsSvc', [MetricEvents]);
});