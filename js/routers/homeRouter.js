define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            //首页状态
            .state("rootState.IndexState", {
                url:'/Home',
                views:{
                    //首页ui-view
                    'ContentView':{
                        templateUrl: "tpls/index/home.html",
                        //controller:'homeController'
                    }
                }
            })
    }]);
});