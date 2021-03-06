import 'angular-mocks';

const importAll = ctx => ctx.keys().map(ctx);

importAll(require.context('src/', true, /\.spec\.js$/));
importAll(require.context('test/unit/', true, /\.spec\.js$/));
