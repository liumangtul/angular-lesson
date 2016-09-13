define([
    "require",
    "angular",
    "angular-ui-router",
    "jquery",
    "app",
    "router"//,
   // "rootControllers"
],function(require,angular,uiRouter,$,app,router/*,rootCtrl*/){
    require(['domReady!'],function (document) {
        angular.bootstrap(document,['myApp']);
    })
});
