# Frontend boilerplate 💩

[![Build Status](https://travis-ci.org/iboozyvoozy/oO.svg)](https://travis-ci.org/iboozyvoozy/oO) [![Coverage Status](https://coveralls.io/repos/github/iboozyvoozy/oO/badge.svg?branch=master)](https://coveralls.io/github/iboozyvoozy/oO?branch=master)

[![Dependency Status](https://david-dm.org/iboozyvoozy/oO.svg)](https://david-dm.org/iboozyvoozy/oO) [![devDependency Status](https://david-dm.org/iboozyvoozy/oO/dev-status.svg)](https://david-dm.org/iboozyvoozy/oO#info=devDependencies)
 
## Javascripts

- `babel (preset-es2015)`
- `eslint (babel-parser)`
- `ng-annotate`

Usage example:

```
import {helper} from './utils';
```


## Styles

- `stylus`
- `stylint`

Usage example:

```
import './reset.styl;
```

## Templates

- `jade-html-loader`
- `ng-cache-loader`

Importing in JS:

```
import template from './tpl.jade';
angular.component('foo', {template});
```

Importing in DOM:

```
import './dir1/dir2/dir3/dir4/tpl.jade';
```
```
div(ng-include="'tpl/dir3/dir4/tpl.jade'")
```

## Static pages

- `jade-loader`

Add new plugin to webpack config:

```
new HtmlPlugin({
  filename: '404.html',
  template: 'pages/error.jade'
})
```

## Assets

- `url-loader`
- `file-loader`

Usage in JS:

```
import img from 'assets/logo.png';
```

Usage in styles:

```
.header-logo
  background: url('~/assets/logo.png')
```

Usage in templates:

```
img(src="assets/logo.png")
```

Usage in static pages:

```
img(src=require("assets/logo.png"))
```

## Unit tests

- `karma`
- `jasmine`

```
test/unit/index.js
test/unit/**/*.js
src/**/*.spec.js
```

## E2E tests

- `protractor`
- `jasmine`

```
test/e2e/index.js
test/e2e/**/*.js
src/**/*.e2e.js
```

## Coverage

- `istanbul`
- [`coveralls`](https://coveralls.io)

Add your own settings to `coverage:check` script in `package.json`

```
istanbul check-coverage --statements 100 --branches 75 --functions 75 --lines 75
```

## Reports

- `localhost:9000/report/unit`
- `localhost:9000/report/coverage`

## Servers

Simple express SPA server

```
npm run serve
```

Livereload browser-sync proxy-server

```
npm run serve:dev
```

Selenium server for protractor

```
npm run serve:webdriver
```

## Development workflow

Incremental build + unit tests

```
npm run build:dev
npm run test:unit:dev
```

E2E tests

```
npm run test:e2e
```

## Production workflow

```
npm run validate
npm run build 
npm run test
```

## TODO
- [ ] units coverage: import / inject / both ?
- [ ] coverage all, not only tests + imports
- [ ] e2e watch mode
- [ ] e2e in travis
- [ ] e2e in Sauce Labs
- [ ] source-maps for units

## Webpack 2
- [ ] HMR (`webpack-dev-server@2.1.0-beta.0`)
- [ ] `babel-preset-es2015-webpack` adds [tree shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html) features, but [doesn't works](https://github.com/olov/ng-annotate/issues/245) with `ng-annotate`.
- [ ] source-maps in production/unit/e2e with (`webpack@2.1.0-beta.15`)
- [ ] `SystemJS`
- [ ] `LoaderOptionsPlugin`
