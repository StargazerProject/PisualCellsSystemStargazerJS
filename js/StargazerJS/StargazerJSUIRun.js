/**
 * Created by felixerio on 14/11/2.
 */
/**
 * StargazerJSUIRun用于控制页面加载顺序控制及动画流程顺序
 * **/
define(function(require, exports, module) {
    exports.run = function() {
        var sc = new StargazerUIDisplayControl();
        sc.normalAllDisPlay('name');
    }
});