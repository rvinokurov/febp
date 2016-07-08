[![Build Status](https://travis-ci.org/iboozyvoozy/oO.svg)](https://travis-ci.org/iboozyvoozy/oO) [![Dependency Status](https://david-dm.org/iboozyvoozy/oO.svg)](https://david-dm.org/iboozyvoozy/oO) [![devDependency Status](https://david-dm.org/iboozyvoozy/oO/dev-status.svg)](https://david-dm.org/iboozyvoozy/oO#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/github/iboozyvoozy/oO/badge.svg?branch=master)](https://coveralls.io/github/iboozyvoozy/oO?branch=master)


# Frontend boilerplate 💩
 
## Javascripts

- `babel (preset-es2015)`
- `eslint (babel-parser)`
- `ng-annotate`

## Templates

- `jade (pug)`
- `ng-cache`

Usage example:

```
import tpl from './tpl.jade;

$el.innerHTML = tpl();
```

## Styles

- `stylus`
- `stylint`

Usage example:

```
import './button.styl;
```

## Unit tests

- `karma`
- `mocha`
- `chai`

```
test/unit/index.js
test/unit/**/*.js
src/**/*.{unit,spec}.js
```

## E2E tests

- `protractor`

```
test/e2e/index.js
test/e2e/**/*.js
src/**/*.e2e.js
```

## Coverage

Add your own settings to `coverage:check` script

```
istanbul check-coverage --statements 100 --branches 75 --functions 75 --lines 75
```

## Development workflow

Incremental build + unit tests

```
npm run build:dev
npm run test:unit:dev
```

SPA server + browser-sync server

```
npm run serve
npm run serve:dev
```

E2E tests

``` 
npm run webdriver
npm run test:e2e
```

## Production workflow

```
npm run validate
npm run build 
npm run test
npm run serve
```

## Webpack 2
- [ ] HMR (`webpack-dev-server@2.1.0-beta.0`)
- [ ] `babel-preset-es2015-webpack` adds [tree shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html) features, but [doesn't works](https://github.com/olov/ng-annotate/issues/245) with `ng-annotate`.
- [ ] source-maps in production/unit/e2e with (`webpack@2.1.0-beta.15`)
- [ ] `SystemJS`
- [ ] `LoaderOptionsPlugin`

## TODO
- [ ] e2e watch mode
- [ ] e2e in travis
- [ ] e2e in Sauce Labs
