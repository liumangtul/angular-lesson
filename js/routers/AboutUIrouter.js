//AngularUI router
define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.config(['$stateProvider','$urlRouterProvider','$controllerProvider','$filterProvider',function ($stateProvider,$urlRouterProvider,$controllerProvider,$filterProvider) {
        $stateProvider
            .state('rootState.AngularUIstate',{
                url:'/angularUI',
                views:{
                    'ContentView':{
                        templateUrl:'tpls/AngularUI/AngularUImain.html',
                    },
                    'ContentView.angularUiSideNav':{
                        templateUrl:'tpls/AngularUI/AngularUiSideNavBar.html'
                    },
                    'ContentView.angularUiContent':{
                        templateUrl:'tpls/AngularUI/AngularUI-pagination.html'
                    }
                }
            })
            .state('rootState.AngularUIstate.paginationState',{
                url:'/pagination',
                views:{
                    'angularUiContent':{
                        templateUrl:'tpls/AngularUI/AngularUI-pagination.html',
                        //controller:'angularUiPaginationController'
                    }
                }
            })
            .state('rootState.AngularUIstate.directiveShareState',{
                url:'/directiveShare',
                views:{
                    'angularUiContent':{
                        templateUrl:'tpls/AngularUI/directiveControllerShare.html',
                        //controller:'directiveShareController'
                    }
                }
            })
            .state('rootState.AngularUIstate.otherState',{
                url:'/other',
                views:{
                    'angularUiContent':{
                        templateUrl:'tpls/AngularUI/AngularUIother.html'
                    }
                }
            })
            .state('rootState.AngularUIstate.accordionState',{
                url:'/accordion',
                views:{
                    'angularUiContent':{
                        templateUrl:'tpls/AngularUI/accordion.html',
                        //controller:'accordionController'
                    }
                }
            })
            .state('rootState.AngularUIstate.directiveScopeState',{
                url:'/directiveScope',
                views:{
                    'angularUiContent':{
                        templateUrl:'tpls/AngularUI/directiveScope.html',
                        //controller:'directiveScopeController'
                    }
                }
            })
            .state('rootState.AngularUIstate.formSubmitState',{
                url:'/formSubmit',
                views:{
                    'angularUiContent':{
                        templateUrl:'tpls/AngularUI/formSubmit.html',
                        controller:'formSubmitController'
                    }
                }
            })
            .state('rootState.AngularUIstate.UIgridState',{
                url:'/UIgrid',
                views:{
                    'angularUiContent':{
                        templateUrl:'tpls/AngularUI/AngularUIgrid.html',
                        controller:'angularUIgridController'
                    }
                },
                resolve: {
                    angularUIgridController: function ($q) {
                        var deferred = $q.defer();
                        require(['angularUIgridController'], function (controller) {
                           // console.log(controller)
                            $controllerProvider.register('angularUIgridController', controller);
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }
                }
            })
            .state('rootState.AngularUIstate.tableState',{
                url:'/table',
                views:{
                    'angularUiContent':{
                        templateUrl:'tpls/AngularUI/AngularTable.html',
                        controller:'angularTableController',
                    }
                },
                resolve: {
                    /*
                     这个key值会被注入到controller中，对应的是后边这个function返回的值，或者promise最终resolve的值。函数的参数是所需的服务，angular会根据参数名自动注入
                     对应controller写法（注意keyName）：
                     controllers.controller('module2Controller', ['$scope', '$http', 'keyName',
                     function($scope, $http, keyName) {
                     }]);
                     */
                    angularTableController: function ($q) {
                        var deferred = $q.defer();
                        require(['angularTableController'], function (controller) {
                            $controllerProvider.register('angularTableController', controller);      //由于是动态加载的controller，所以要先注册，再使用
                            deferred.resolve();
                        });
                        console.log(deferred.promise)
                        return deferred.promise;
                    }
                }
            })
    }]);
})