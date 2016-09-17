define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    app.filter('testFilter',function(){
        return function(value,arg1,arg2){
            return value+'_'+arg1+'_>'+arg2+'==||';
        }
    })
})