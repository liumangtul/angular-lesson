define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.controller("formSubmitController",["$scope","formSubmitService","$filter",function($scope,formSubmitService,$filter){
        var data=formSubmitService;
        var username=data.username;
        username=$filter('testFilter')(username,'(会员<_|','VIP)');
        //这样是为了防止切换router时,出现重复的情况;username累加 username+=的情况
        data=Object.assign({},data,{username:username});
        $scope.data=data;
    }]);
})