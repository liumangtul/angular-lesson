define([
    "angular",
    "require",
    "angular-ui-router",
    "jquery",
    "uiGrid",
    'ngTable',
    "app",
    "rootRouter",
    //"rootControllers",
    "rootDirective",
    "ui-bootstrap",
    "ui-bootstrap-tpls",
    "angular-animate",
    '_',
    'rootService',
    'rootFilter',
    'oclazyload'
    //'angularRequire'
],function(){
    require(['domReady!'],function (document) {
        angular.bootstrap(document,['myApp','ngAnimate','ui.grid','ngTable'/*,'ngRequire'*/]);
    })
});
