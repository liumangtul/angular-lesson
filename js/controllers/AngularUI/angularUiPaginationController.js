define([
    'require',
    'angular',
    'app',
    'ui-bootstrap',
    'ui-bootstrap-tpls'
],function(require,angular,app){
    return app.controller("angularUiPaginationController",["$scope",function($scope){
        $scope.page = {"pageSize":10,"pageNo":2,"totalCount":300};
        $scope.pageChanged = function(){
        }
    }]);
})