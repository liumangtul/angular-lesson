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
                        controller:'homeController'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    homeController: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load('js/controllers/homeController.js').then(function(){
                            alert()
                        });
                    }]
                }
            })
    }]);
});