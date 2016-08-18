'use strict';

var browserify = require('browserify');
var extend = require('util')._extend;


module.exports = function (data, options, callback) {
    var result;
    var config = extend(
        this.theme.config.browserify || {},
        this.config.browserify || {}
    );
    var b = browserify(data.path, config);
    b.bundle(function(err, buff){
        result = buff.toString('utf8');
        return callback(null, result);
    });
};
