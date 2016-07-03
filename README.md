[![Build Status](https://travis-ci.org/iboozyvoozy/oO.svg)](https://travis-ci.org/iboozyvoozy/oO) [![Dependency Status](https://david-dm.org/iboozyvoozy/oO.svg)](https://david-dm.org/iboozyvoozy/oO) [![devDependency Status](https://david-dm.org/iboozyvoozy/oO/dev-status.svg)](https://david-dm.org/iboozyvoozy/oO#info=devDependencies)

## Javascripts

- `babel (es2015-webpack)`
- `eslint (babel-parser)`
- `ng-annotate`
- `SystemJS`

## Templates `jade`

Usage example:

```
import tpl from './tpl.jade;

$el.innerHTML = tpl();
```

## Styles `stylus`

Usage example:

```
import './button.styl;
```

## Unit tests `karma`

- `babel (es2015-webpack)`

```
test/unit/index.js
test/unit/**/*.js
src/**/*.{unit,spec}.js
```

## E2E tests `protractor`

- `babel-register (es2015)`

```
test/e2e/index.js
test/e2e/**/*.js
src/**/*.e2e.js
```

## Development workflow

Serve, build and unit tests

```
npm run serve
npm run serve:dev
npm run build:dev
npm run test:unit:dev
```

E2E tests

```
npm run build 
npm run serve 
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
