define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.controller('homeController',['$scope',function($scope){
        $scope.title='抱着孩子打代码的程序猿';
    }]);
});
