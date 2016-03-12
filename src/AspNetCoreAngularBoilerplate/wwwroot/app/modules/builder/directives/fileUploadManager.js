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
            restrict: 'E',
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

                //$('#fileupload').fileupload({
                //    dataType: 'json',
                //    done: function (e, data) {
                //        $.each(data.result.files, function (index, file) {
                //            $('<p/>').text(file.name).appendTo(document.body);
                //        });
                //    }
                //});

                //$('#fileupload').fileupload('option', {
                //    url: '//jquery-file-upload.appspot.com/',
                //    // Enable image resizing, except for Android and Opera,
                //    // which actually support image resizing, but fail to
                //    // send Blob objects via XHR requests:
                //    disableImageResize: /Android(?!.*Chrome)|Opera/
                //        .test(window.navigator.userAgent),
                //    maxFileSize: 999000,
                //    acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
                //});

                self.API_URL = "/home/upload";
                self.fileUploadForm = $('#fileupload');
                self.fileUploadForm.fileupload({
                    url: self.API_URL,
                    formData: { templateId: 1 }
                }).bind('fileuploadadded', function (e, data) { })
                 .bind('fileuploaddone', function (e, data) { })
                 .bind('fileuploadstop', function (e) { });
            }
        };
    }

    rootModule.directive('fileUploadManager', [
        '$rootScope',
        '$http',
        UploadManager]);
});
