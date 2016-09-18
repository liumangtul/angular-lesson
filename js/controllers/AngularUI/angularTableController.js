define([
    'require',
    'angular',
    'app'
],function (require,angular,app) {
    /*app.controller('angularTableController', ['$scope','gridDataService','NgTableParams', function($scope,gridDataService,NgTableParams ) {
        $scope.items=gridDataService;
        $scope.tableParams = NgTableParams({
            page: 1, // show first page
            count: 5 // count per page
        }, {
            filterDelay: 0,
            data: $scope.itmes
        });
    }])*/
    return app.controller('angularTableController', ['$scope',function ($scope) {
        var vm = $scope.vm = {};
        vm.items = [];
        vm.checkAll = function(checked) {
            angular.forEach(vm.items, function(item) {
                item.$checked = checked;
            });
        };
        vm.selection = function() {
            return _.where(vm.items, {$checked: true});
        };
        // 供页面中使用的函数
        vm.age = function(birthday) {
            var times=new Date();
            times.setTime(birthday);
            return new Date().getFullYear()-times.getFullYear();//moment().diff(birthday, 'years');
        };
        // 生成演示数据
        var MAX_NUM = 50;
        function rand(min, max) {
            return min + Math.round(Math.random() * (max-min));
        }
        for (var i = 0; i < MAX_NUM; ++i) {
            var id = rand(0, MAX_NUM);
            vm.items.push({
                id: i + 1,
                name: '姓名' + id, // 字符串类型
                followers: rand(0, 100 * 1000 * 1000), // 数字类型
                birthday:new Date()-rand(365*24*60*60*1000*10,365*24*60*60*1000*30),//moment().subtract('day', rand(365, 365 * 50)).toDate(), // 日期类型
                income: rand(1000, 100000) // 金额类型
            });
        }
    }]);
})