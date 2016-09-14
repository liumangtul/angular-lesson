define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.controller('homeController',['$scope',function($scope){
        $scope.home='HOME：superMan';
    }]);
});
