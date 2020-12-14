const { Router } = require('express');
const HttpStatus = require('http-status-codes');
const { LogicalExpression } = require('@session-knip/truth_table_builder');

const router = Router();

//  /api/truthTable
router.post('/parse', (request, response) => {
    try {
        const { expression } = request.body;

        const logicalExpression = new LogicalExpression(expression, true);

        response.status(HttpStatus.OK).json({ truthTable: logicalExpression.getTruthTable() });
    } catch (e) {
        console.log(console.log('ROOT MESSAGE', { message: e.getRootMessage() }, 'ROOT MESSAGE ENDS'));
        response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ message: e.getRootMessage() });
    }
});

module.exports = router;
