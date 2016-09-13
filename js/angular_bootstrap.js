define([
    "require",
    "angular",
    "angualr-ui-router",
    "jquery",
    "app",
    "router"
],function(require,angular){
    require(['domReady!'],function (document) {
        angular.bootstrap(document,['app']);
    })
});