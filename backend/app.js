const express = require('express');
const config = require('config');
const { request } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { networkInterfaces } = require('os');
const { FRONT_ORIGINS, FRONT_PORT } = require('./constants');
const app = express();
const jsonParser = bodyParser.json();

console.log(
    config
        .get(FRONT_ORIGINS)
        .map((el) => `http://${el}:${config.get(FRONT_PORT)}`)
        .concat(`http://localhost:${config.get(FRONT_PORT)}`)
);

app.use(
    cors({
        origin: config
            .get(FRONT_ORIGINS)
            .map((el) => `http://${el}:${config.get(FRONT_PORT)}`)
            .concat(`http://localhost:${config.get(FRONT_PORT)}`),
        allowedHeaders: ['access-control-allow-origin', 'access-control-allow-credentials', 'content-type'],
        methods: 'GET,POST',
        credentials: true,
    })
);

app.use(express.json({ extended: true }));

app.use('/api/logicalExpression/truthTable', require('./api/truthTable.routes'));

const PORT = config.get('port') || 8000;

app.listen(8000, () => {
    const ifs = networkInterfaces();
    const v4 = Object.values(ifs)
        .map((arr) => arr.filter((el) => el.family === 'IPv4'))
        .flat(1);

    const origins = v4.map((el) => `http://${el.address}`);
    console.log(`Server started on port ${PORT}`);
    console.log(`Allowed remotes (for API): ${origins.map((el) => `\n\t${el}:${PORT}`)}`);
});
