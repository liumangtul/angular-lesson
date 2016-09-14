define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.directive('light',function(){
        return {
            require:'^superman',
            link:function(scope,element,attrs,supermanController){
                supermanController.addLight();
            }
        }
    });
});