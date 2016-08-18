'use strict';
var renderer = require('./lib/renderer');

hexo.extend.renderer.register('js', 'js', renderer);
