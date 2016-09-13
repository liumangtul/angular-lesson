require.config({
    paths:{
        'jquery':'../node_modules/jquery/dist/jquery',
        'angular':'../node_modules/angular/angular',
        'require':'../node_modules/requirejs/require',
        'angualr-ui-router':'../node_modules/angular-ui-router/release/angular-ui-router',
        'bootstrap':'../node_modules/bootstrap/dist/js/bootstrap',
        'domReady': 'http://cdn.staticfile.org/require-domReady/2.0.1/domReady.min',
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
        'angualr-ui-router':{
            deps:['angular'],
            'exports':'angualr-ui-router'
        }
    },
    deps:['angular_bootstrap'],
    urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});
