[![Build Status](https://travis-ci.org/iboozyvoozy/oO.svg)](https://travis-ci.org/iboozyvoozy/oO) [![Dependency Status](https://david-dm.org/iboozyvoozy/oO.svg)](https://david-dm.org/iboozyvoozy/oO) [![devDependency Status](https://david-dm.org/iboozyvoozy/oO/dev-status.svg)](https://david-dm.org/iboozyvoozy/oO#info=devDependencies)

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

## Development workflow

SPA server + live-reload

```
npm run serve
npm run serve:dev
```

Incremental build + autowatch unit tests

```
npm run build:dev
npm run test:unit:dev
```

E2E tests

``` 
npm run wd
npm run test:e2e
```

## Production workflow

```
npm run validate 
npm run build 
npm run test:unit
npm run serve
```

## TODO

- [ ] `babel-preset-es2015-webpack` adds [tree shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html) features, but [doesn't works](https://github.com/olov/ng-annotate/issues/245) with `ng-annotate`.
- [ ] HMR (`webpack-dev-server@2.1.0-beta.0`)
- [ ] source-maps in production/unit/e2e with (`webpack@2.1.0-beta.15`)
- [ ] e2e in travis
- [ ] `SystemJS`
- [ ] `LoaderOptionsPlugin`
