define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.directive('directiveScopeDirective',function(){
        return {
            restrict:'E',
            replace:true,
            scope:{
                text:'=text'
            },
            template:'<div text="title" class="mark">' +
                        '<p>指令中的scope.text:</p>' +
                        '<p>{{text}}</p>' +
                        '<label><input type="text" ng-model="text"></label>' +
                    '</div>',
            controller:function($scope){
                $scope.text='__aa__';
            },
            link:function(scope,element,attrs){
                console.log(scope.text)
            }
        }
    });
});