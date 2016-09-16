define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.controller("directiveShareController",["$scope",function($scope){
        $scope.title='指令间的操作'
    }]);
})