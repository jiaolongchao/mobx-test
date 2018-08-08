
//var webpackDevServer=require("webpack-dev-server")


const opn = require('opn');
const chalk = require('chalk');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('../webpack.config');

// 端口设置
const port = 8081;
// 是否自动打开浏览器
const autoOpenBrowser = true;
// 创建http代理
//const proxyTable = config.dev.proxyTable;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => { }
});

app.use(require('connect-history-api-fallback')());

app.use(devMiddleware);

app.use(hotMiddleware);

// serve pure static assets
const staticPath = path.posix.join("/", "");
//app.use(staticPath, express.static('./'));


const uri = 'http://localhost:' + port;
const ip = 'http://' + require('ip').address() + ':' + port;

devMiddleware.waitUntilValid(function () {
    console.log(chalk.cyan('- Local: ' + uri + '\n'));
    console.log(chalk.cyan('- On your Network: ' + ip + '\n'));
});

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    opn(uri)
});
