# AngularJs RequireJs
基于RequireJs 模块加载器的 AngularJs 1.x
基础栗子
有很多种加载方式，具体到实际的有
    SeaJs,RequireJs,ES2015-module... ...
    ES2015里新增的module，算是ECMAscript 组织，以后肯定是一统天下的方向，但是，因为这个ES6规范是在2015年才刚刚发布，主流浏览器支持的寥寥无几，需要babel转换成ES5，比较麻烦。
  
  最终选择更合适快速的解决方案，RequireJs来加载AngualrJs1.x;

  在html引入
  <script src="node_modules/requirejs/require.js" data-main="js/main.js"></script>

  file:  js/main.js
  require.config({
      paths:{
          'jquery':'../node_modules/jquery/dist/jquery',
          'angular':'../node_modules/angular/angular',
          'require':'../node_modules/requirejs/require',
          'ui_router':'../node_modules/angular-ui-router/release/angular-ui-router',
          'bootstrap':'../node_modules/bootstrap/dist/js/bootstrap'
      },
      shim:{
          'angular':{
              deps:['jquery','ui_router','bootstrap'],
              'exports':'angular'
          }
      },
      deps:['angular_bootstrap']
  });

  file: js/angular_bootstrap.js
  require(["angular","app","config"],function(angular,app,config){
      angular.bootstrap(document,["app"]);
  });

  file: js/app.js
  define(["angular"],function(angular){
      return angular.module("app",['ui.router']);
  });
