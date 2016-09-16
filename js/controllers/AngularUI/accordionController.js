define([
    'require',
    'angular',
    'app'
],function (require,angular,app) {
        app.controller('accordionController', ['$scope', function($scope) {
            $scope.oneAtATime = true;

            $scope.groups = [{
                title: '动态header - 1',
                content: '动态body - 1'
            }, {
                title: '动态header - 2',
                content: '动态body - 2'
            }];

            $scope.items = ['项目 1', '项目 2', '项目 3'];

            $scope.addItem = function() {
                var newItemNo = $scope.items.length + 1;
                $scope.items.push('新项目 ' + newItemNo);
            };

            $scope.status = {
                isFirstOpen: true,
                isFirstDisabled: false
            };
        }])
})