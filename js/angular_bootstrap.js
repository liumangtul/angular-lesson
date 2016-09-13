define([
    "require",
    "angular",
    "angular-ui-router",
    "jquery",
    "app",
    "router"
],function(require,angular){
    require(['domReady!'],function (document) {
        angular.bootstrap(document,['myApp']);
    })
});
