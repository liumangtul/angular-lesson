require.config({
    paths:{
        'jquery':'../node_modules/jquery/dist/jquery',
        'angular':'../node_modules/angular/angular',
        'require':'../node_modules/requirejs/require',
        'angular-ui-router':'../node_modules/angular-ui-router/release/angular-ui-router',
        'bootstrap':'../node_modules/bootstrap/dist/js/bootstrap',
        'ui-bootstrap-tpls':'lib/ui-bootstrap-tpls',
        'ui-bootstrap':'../node_modules/angular-ui-bootstrap/dist/ui-bootstrap',
        'domReady': 'http://cdn.staticfile.org/require-domReady/2.0.1/domReady.min',
        'angular-animate':'../node_modules/angular-animate/angular-animate',

        //module
        'app':'app',

        //filter
        'rootFilter':'filters/rootFilter',
        'testFilter':'filters/testFilter',

        //service
        'rootService':'services/rootService',
        'formSubmitService':'services/angularUI/formSubmitService',

        //controller
        'rootControllers':'controllers/rootController',
        'homeController':'controllers/homeController',
        'joinJsonController':'controllers/joinJsonController',
        'angularUiPaginationController':'controllers/AngularUI/angularUiPaginationController',
        'directiveShareController':'controllers/AngularUI/directiveShareController',
        'accordionController':'controllers/AngularUI/accordionController',
        'directiveScopeController':'controllers/AngularUI/directiveScopeController',
        'formSubmitController':'controllers/AngularUI/formSubmitController',

        //directive
        'rootDirective':'directives/rootDirective',
        'supermanDirective':'directives/supermanDirective/supermanDirective',
        'strengthDirective':'directives/supermanDirective/strengthDirective',
        'speedDirective':'directives/supermanDirective/speedDirective',
        'lightDirective':'directives/supermanDirective/lightDirective',
        'directiveScopeDirective':'directives/directiveScopeDirective',

        //router
        'rootRouter':'routers/rootRouter',
        'commonRouter':'routers/commonRouter',
        'homeRouter':'routers/homeRouter',
        'aboutUIrouter':'routers/aboutUIrouter',
        'aboutUSrouter':'routers/aboutUSrouter'
    },
    shim:{
        'bootstrap':{
            deps:['jquery'],
            'exports':'bootstrap'
        },
        'angular':{
            deps:['jquery'],
            'exports':'angular'
        },
        'angular-ui-router':{
            deps:['angular'],
            'exports':'angualr-ui-router'
        },
        'ui-bootstrap':{
            deps:['angular']
        },
        'ui-bootstrap-tpls':{
            deps:['ui-bootstrap']
        },
        'angular-animate':{
            deps:['angular']
        }
    },
    deps:['angular_bootstrap'],
    urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});
