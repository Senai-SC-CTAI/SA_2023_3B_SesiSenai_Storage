import { createProxyMiddleware } from 'http-proxy-middleware';
import { Express } from 'express';

module.exports = function (index: Express) {
    index.use(
    '/salas',
        createProxyMiddleware({
        target: 'http://localhost:8090',
        changeOrigin: true,
    })
  );
};