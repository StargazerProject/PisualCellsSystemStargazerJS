// seajs 配置
seajs.config({
	base: "./",
	alias: {
		"mainload": "js/seajs/controller/mainload.js",
        "uicontrollers": "js/angularjs/controller/uicontrollers.js",
        "uimodel": "js/angularjs/model/uimodel.js",
        "services": "js/angularjs/services/services.js",
        "filemanager": "js/seajs/uiplugins/filemanager.js",
        "StargazerUI": "js/StargazerJS/StargazerUI.js",
        "StargazerJSUIControl": "js/StargazerJS/StargazerJSUIControl.js",
        "StargazerJSUIRun": "js/StargazerJS/StargazerJSUIRun.js"

	}
});