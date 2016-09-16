define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.directive('superman',function(){
        return {
            //独立的scope
            scope:{},
            restrict:'ECMA',
            replace:true,
            controller:function($scope){
                $scope.abilities=[];
                this.addStrength=function(){
                    $scope.abilities.push('strength');
                };
                this.addSpeed=function(){
                    $scope.abilities.push('speed');
                };
                this.addLight=function(){
                    $scope.abilities.push('light');
                };
            },
            link:function(scope,element,attrs){
                element.addClass("btn btn-primary");
                element.bind('mouseenter',function(){
                    $('.alert-my').text(scope.abilities);
                })
            }
        }
    });
});