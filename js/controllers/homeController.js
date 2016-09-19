/*define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.controller('homeController',['$scope',function($scope){
        $scope.title='抱娃撸码\'FE-80s-王艺翔';
    }]);
});*/

angular.module("myApp",[
    //'ngRequire',
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad'
]).controller('homeController',['$scope',function($scope){
    $scope.title='抱娃撸码\'FE-80s-王艺翔-加载方式要改变一下,不用requireJs,该用ocLazyLoad,oc.lazyload' +
        '  ---http://dreamapple.leanapp.cn/gitbook/oclazyload-doc/api/inject.html';
}]);