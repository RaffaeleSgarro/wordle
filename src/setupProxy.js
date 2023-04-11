const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

    const filter = function (pathname, req) {
        return !pathname.match('^/pediagames/wordle/');
    };

    app.use(
        '/pediagames/**',
        createProxyMiddleware(filter, {
            target: 'https://www.pediatria.it',
            changeOrigin: true,
            pathFilter: ['!/pediagames/wordle/**']
        })
    );
};