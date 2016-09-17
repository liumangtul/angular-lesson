define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.factory('formSubmitService',function(){
        var data={
            username:'王艺翔'
        }
        return data;
    });
})