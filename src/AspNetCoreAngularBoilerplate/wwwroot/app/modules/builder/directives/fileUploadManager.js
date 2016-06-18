define(['config',
    'jquery',
    'jqueryui',
    'vendor/angular',
    'modules/builder/module',
    'vendor/text!modules/builder/templates/fileUploadManager.html',
    'tmpl',
    'load-image',
    'load-image-meta',
    'load-image-exif',
    'canvas-to-blob',
    'jquery.iframe-transport',
    'jquery.fileupload',
    'jquery.fileupload-process',
    'jquery.fileupload-image',
    'jquery.fileupload-audio',
    'jquery.fileupload-video',
    'jquery.fileupload-validate',
    'jquery.fileupload-ui'
],
function (config, $, ui, angular, rootModule, fileUploadManagerHtml) {

    function UploadManager($rootScope, $http) {
        return {
            restrict: 'EA',
            scope: {
                sections: '=',
                designs: '=',
                empty: '@'
            },
            transclude: false,
            replace: true,
            template: fileUploadManagerHtml,
            link: function link(scope, element, attrs, formCtrl) {
                var self = this;
                self.data = {};
                self.API_URL = "/home/UploadFilesAjax";
                self.fileUploadForm = $('#fileupload');
                self.fileUploadForm.fileupload({
                    url: self.API_URL,
                    formData: { templateId: 1 }
                }).bind('fileuploadadded', function (e, data) { })
                 .bind('fileuploaddone', function (e, data) { })
                 .bind('fileuploadstop', function (e) { });

                // get existing files
                $.ajax({
                    url: '/home/GetUploadedFiles',
                    dataType: 'json',
                    context: self.fileUploadForm[0]
                }).always(function () {
                    $(this).removeClass('fileupload-processing');
                }).done(function (result) {
                    console.log(result);
                    $(this).fileupload('option', 'done')
                        .call(this, $.Event('done'), { result: result });
                });
            }
        };
    }

    rootModule.directive('fileUploadManager', [
        '$rootScope',
        '$http',
        UploadManager]);
});
