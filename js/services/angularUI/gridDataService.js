define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.factory('gridDataService',function(){
        var data=[
            {
                id:1,
                title:'王艺翔',
                text:'噼里啪啦。。。 。。。'
            },{
                id:2,
                title:'王艺翔2',
                text:'噼里啪啦2。。。 。。。'
            },{
                id:3,
                title:'王艺翔3',
                text:'噼里啪啦3。。。 。。。'
            }
        ]
        return data;
    });
})