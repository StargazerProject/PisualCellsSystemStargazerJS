/**
 * Created by felixerio on 14/10/30.
 */

define(function(require, exports, module) {
    exports.run = function() {
        var fileControllers = angular.module('fileControllers', []);
        fileControllers.controller('FileListCtrl', ['$scope', 'File',
            function($scope, File) {
                $scope.phones = File.query();
            }]);
    }
});