const fallback = require('express-history-api-fallback');
const express = require('express');
const gzip = require('compression');
const {CONFIG, PATHS} = require('./config/build');

const {DIST} = PATHS;
const {APP_PORT} = CONFIG;

const app = express();

app.use(gzip());
app.use(express.static(DIST));
app.use(fallback('index.html', {root: DIST}));

app.listen(APP_PORT, (err) => {
	if (err) console.log(err);
	console.log(`Server started at port: ${APP_PORT}`);
});
