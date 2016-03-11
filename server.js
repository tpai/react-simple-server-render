import express from 'express';
import http from 'http';
import React from 'react';
import ReactDOM from 'react-dom/server';

import Index from "./src";

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(ReactDOM.renderToString(<Index name="Tony Pai" />));
});

server.listen(port);
