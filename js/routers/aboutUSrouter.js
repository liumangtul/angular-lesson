define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            //关于我们状态
            .state('rootState.AboutUsState',{
                url:'/AboutUs',
                views:{
                    //ui-view => ContentView
                    // 内容ui-view
                    'ContentView':{
                        templateUrl:'tpls/aboutUs/aboutUs.html'
                    },

                    //ui-view => ContentView 里的 ui-view => SideBarView
                    // 内容侧栏 ui-view
                    'ContentView.SideBarView':{
                        templateUrl:'tpls/common/SideBar.html'
                    },
                    'ContentView.ShowView':{
                        templateUrl:'tpls/aboutUs/aaa.html'
                    }

                }
            })
            //关于我们子集页面aaa状态
            .state('rootState.AboutUsState.aaaState',{
                url:'/aaa',
                views:{
                    'ShowView':{
                        templateUrl:'tpls/aboutUs/aaa.html'
                    }
                }
            })
            //关于我们子集页面bbb状态
            .state('rootState.AboutUsState.bbbState',{
                url:'/bbb',
                views:{
                    'ShowView':{
                        templateUrl:'tpls/aboutUs/bbb.html'
                    }
                }
            })
            //关于我们子集页面ccc状态
            .state('rootState.AboutUsState.cccState',{
                url:'/ccc',
                views:{
                    'ShowView':{
                        templateUrl:'tpls/aboutUs/ccc.html'
                    }
                }
            })
    }]);
});