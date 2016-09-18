define([
    'require',
    'angular',
    'app'
],function (require,angular,app) {
    return app.filter('orderClass', function() {
        return function (direction) {
            if (direction === -1)
                return "glyphicon-chevron-down";
            else
                return "glyphicon-chevron-up";
        }
    });
})