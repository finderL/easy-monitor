'use strict';

module.exports = function (app) {
    //取出公共对象
    const common = this.common;
    const config = this.config;
    const dbl = this.dbl;

    //客户端采用 Vue 编写的单页面应用，故而这些路由均需指向 index.ejs 文件
    app.get(['/', '/index', '/profiler'], function (req, res, next) {
        res.render('index');
    });
}