define([
    "require",
    "angular",
    "angular-ui-router",
    "jquery",
    "app",
    "router",
    "rootControllers",
    "rootDirective"
],function(require,angular,uiRouter,$,app,router,rootCtrl,rootDirective){
    require(['domReady!'],function (document) {
        angular.bootstrap(document,['myApp']);
    })
});
