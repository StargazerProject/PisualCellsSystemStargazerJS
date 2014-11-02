define(function(require, exports, module) {
    exports.run = function() {
        //加载页面前期效果
        var uicontrollers = require('uicontrollers');
        uicontrollers.run();
        var services = require('services');
        services.run();
        var uimodel = require('uimodel');
        uimodel.run();
        var sc = new StargazerUIDisplayControl();
        sc.normalAllDisPlay('name');
    }
});