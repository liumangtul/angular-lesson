define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.controller("directiveScopeController",["$scope",function($scope){
        $scope.title='__控制器里的指令title__';
    }]);
})