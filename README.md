# [Browserify] renderer for [Hexo]

## Install

``` bash
$ npm install hexo-renderer-browserify2 --save
```

## Example `_config.yml`

``` yaml
browserify:
    exclude:
    - '**/*.min.js'
```

Refer to the [Browserify API](https://github.com/substack/node-browserify#browserifyfiles--opts) for full options.

[Hexo]: http://hexo.io/
[Browserify]: http://browserify.org
