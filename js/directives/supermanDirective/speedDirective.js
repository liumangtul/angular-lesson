define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.directive('speed',function(){
        return {
            require:'^superman',
            link:function(scope,element,attrs,supermanController){
                supermanController.addSpeed();
            }
        }
    });
});