/**
 * Created by felixerio on 14/10/30.
 */

define(function(require, exports, module) {

    exports.run = function() {
        var filemanager = angular.module('filemanager', [
            'ngRoute',
            'fileControllers',
            'fileServices'
        ]);
       var sui = new StargazerUI();
        filemanager.config(['$routeProvider','$locationProvider',
            function($routeProvider,$locationProvider) {
                $routeProvider.
                    when('/indexs', {
                        templateUrl:sui.getselect('file')
                    }).
                    when('/logo', {
                        templateUrl: sui.getselect('logo')
                    }).
                    otherwise({
                        redirectTo: '/logo'
                    });
//                $locationProvider.html5Mode(true);
            }]);
        angular.bootstrap($('[id=body]'), ['filemanager']);
    }
});