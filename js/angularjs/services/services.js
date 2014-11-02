/**
 * Created by felixerio on 14/10/30.
 */

define(function(require, exports, module) {
    exports.run = function() {
        var fileServices = angular.module('fileServices', ['ngResource']);
        fileServices.factory('File', ['$resource',
            function($resource){
                return $resource('PisualCellsSystemStargazerJS/js/uijson/:data.json', {}, {
                    query: {method:'GET', params:{data:'data'}}
                });
            }]);
    }
});