define([
    "angular",
    "require",
    "angular-ui-router",
    "jquery",
    "app",
    "router",
    "rootControllers",
    "rootDirective",
    "ui-bootstrap",
    "ui-bootstrap-tpls"
],function(uiRouter,$,app,router,rootCtrl,rootDirective){
    require(['domReady!'],function (document) {
        angular.bootstrap(document,['myApp']);
    })
});
