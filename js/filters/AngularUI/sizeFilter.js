define([
    'require',
    'angular',
    'app'
],function (require,angular,app) {
    return app.filter('size', function() {
        return function (items) {
            if (!items)
                return 0;

            return items.length || 0
        }
    });
})