define([
    'require',
    'angular',
    'app'
],function (require,angular,app) {
    return app.filter('paging', function() {
        return function (items, index, pageSize) {
            if (!items)
                return [];

            var offset = (index - 1) * pageSize;
            return items.slice(offset, offset + pageSize);
        }
    });
})