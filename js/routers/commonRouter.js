define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        //当用户浏览到    =>  /Child,
        // 该应用将状态改为 =>  ChildState,
        // 同时向主 =>  ui-view 元素中插入   =>  template    =>  中的内容

        /*
         state:rootState,IndexState...
         view:rootView,ContentView...


         * uiView层级关系    ：   隐形继承了上一层级state里对应的view的关系，只写相对当前state的view关系
         * state层级关系     ：   针对绝对state的层级关系
         * 举例：
         *       rootState
         *       rootState.IndexState
         *
         *       rootState:views:{
         *                           rootView,
         *                           rootView.headerView,
         *                           rootView.ContentView,
         *                           ... ...
         *                       }
         *       rootState.IndexState:views:{
         *                           ContentView,
         *                       ContentView.xxxView,
         *                   ... ...
         *                       }
         *
         *                       IndexState继承rootState，
         *                       so IndexState里的views继承rootState里的views，
         *                       IndexState里的ContentView继承自rootState里的ContentView。
         *
         * */
        $stateProvider
            //公共的状态
            .state('rootState',{
                url:'',
                views:{
                    //跟ui-view
                    'rootView':{
                        templateUrl: "tpls/common/rootEle.html"
                    },
                    //头部ui-view
                    'rootView.headerView':{
                        templateUrl:'tpls/common/index_header.html'
                    },
                    //首页ui-view
                    'rootView.ContentView':{
                        templateUrl: "tpls/index/home.html",
                        //controller:'homeController'
                    }
                }
            })
    }]);
});