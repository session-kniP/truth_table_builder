const express = require('express');
const config = require('config');
const { request } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const jsonParser = bodyParser.json();

app.use(
    cors({
        origin: ['http://localhost:3000', 'http://192.168.1.51:3000'],
        allowedHeaders: [
            'access-control-allow-origin',
            'access-control-allow-credentials',
            'content-type',
        ],
        methods: 'GET,POST',
        credentials: true,
    })
);

app.use(express.json({ extended: true }));

app.use(
    '/api/logicalExpression/truthTable',
    require('./api/truthTable.routes')
);

const PORT = config.get('port') || 8000;

app.listen(8000, () => {
    console.log(`Server started on port ${PORT}`);
});
