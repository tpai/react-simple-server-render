import express from 'express';
import http from 'http';
import React from 'react';
import ReactDOM from 'react-dom/server';
import {
    RouterContext,
    Route,
    browserHistory,
    match,
    createRoutes
} from 'react-router';

import foo from './src/components/foo/routes';
import bar from './src/components/bar/routes';
const routes = { foo, bar };

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use('/*/*', (req, res, next) => {
    const param = req.params[0];
    match({
        routes: routes[param],
        location: req.originalUrl,
        history: browserHistory
    }, (error, redirectLocation, renderProps) => {
        if (error) {
            next(error);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            res.send(
                "<div id='root'>" +
                ReactDOM.renderToString(<RouterContext {...renderProps} />) +
                "</div>" +
                "<script src='/js/" + param + ".bundle.js'></script>"
            );
        } else {
            next();
        }
    });
});

server.listen(port);

console.log(`Port listening on ${port}`);
