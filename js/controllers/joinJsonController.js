define([
    'require',
    'angular',
    'app'
],function(require,angular,app){
    return app.controller('joinJsonController',['$scope',function($scope){
        var arr1=[{
            id:1,
            name:{str:'a'}
        },{
            id:2,
            name:{str:'b'}
        },{
            id:3,
            name:{str:'c'}
        },{
            id:4,
            name:{str:'d'}
        },{
            id:5,
            name:{str:'e'}
        },{
            id:6,
            name:{str:'f'}
        },{
            id:7,
            name:{str:'g'}
        }];
        var arr2=[{
            r_id:3,
            title:{text:'Tc'}
        },{
            r_id:5,
            title:{text:'Te'}
        }];
        var arr3=[{
            s_id:4,
            other:'ddd'
        },{
            s_id:5,
            other:'eee'
        }];
        var arr=[];
        var j=0,x=0,isCompare=false;
        for(var i=0;i<arr1.length;i++){
            var json1={},json2={};
            isCompare=false;
            if(arr2[j]){
                if(arr1[i].id==arr2[j].r_id){
                    isCompare=true;
                    json1=Object.assign({},arr1[i],arr2[j]);
                    j++;
                };
            };
            if(arr3[x]){
                if(arr1[i].id==arr3[x].s_id){
                    isCompare=true;
                    json2=Object.assign({},arr1[i],arr3[x]);
                    x++;
                };
            };
            if(!isCompare){
                //arr.push(arr1[i])
            }else{
                console.log(json1,json2)
                arr.push(Object.assign(json1,json2));
            };
        };
        $scope.arr=arr;
    }]);
});