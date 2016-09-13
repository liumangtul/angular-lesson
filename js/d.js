var app=angular.module('app',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    //当用户浏览到    =>  /Child,
    // 该应用将状态改为 =>  ChildState,
    // 同时向主 =>  ui-view 元素中插入   =>  template    =>  中的内容
    $stateProvider
        .state('rootState',{
            url:'',
            views:{
                //ui-view => HeaderView
                // 头部
                'rootView.HeaderView':{
                    templateUrl:'tpls/index_header.html'
                },
                //ui-view => ContentView
                // 内容
                'rootView.ContentView':{
                    templateUrl:'tpls/home.html'
                }
            }
        })
        /*.state('rootState.HomeState',{
         url:'/home',
         views:{
         //ui-view => ContentView
         // 内容
         'rootView.ContentView':{
         templateUrl:'tpls/home.html'
         }
         }
         })*/
        .state('rootState.AboutUsState',{
            url:'/AboutUs',
            views:{

                //ui-view => ContentView
                // 内容
                'rootView.ContentView':{
                    templateUrl:'tpls/aboutUs.html'
                },

                //ui-view => ContentView 里的 ui-view => SideBarView
                // 内容侧栏
                'rootView.ContentView.SideBarView':{
                    templateUrl:'tpls/SideBar.html'
                },
                'rootView.ContentView.ShowView':{
                    templateUrl:'tpls/aaa.html'
                }

            }
        })
        .state('rootState.AboutUsState.aaaState',{
            url:'/aaa',
            views:{
                'ShowView':{
                    templateUrl:'tpls/aaa.html'
                }
            }
        })
        .state('rootState.AboutUsState.bbbState',{
            url:'/bbb',
            views:{
                'ShowView':{
                    templateUrl:'tpls/bbb.html'
                }
            }
        })
        .state('rootState.AboutUsState.cccState',{
            url:'/ccc',
            views:{
                'ShowView':{
                    templateUrl:'tpls/ccc.html'
                }
            }
        })

}]);