import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useHttpRequest } from '../api/request/httpRequest.hook';

import '../styles/truthTable.css';
import { ExpressionInput } from '../components/truthTable/ExpressionInput';
import { TruthTable } from '../components/truthTable/TruthTable';
import { GeneratingUnit } from '../components/truthTable/GeneratingUnit';

export const TruthTablePage = () => {
    const { httpRequest } = useHttpRequest();
    const [table, setTable] = useState(null);

    const onSubmit = async (e, value) => {
        try {
            e.preventDefault();

            const response = await httpRequest({
                url: '/api/logicalExpression/truthTable/parse',
                method: 'POST',
                body: { expression: value },
            });

            setTable(response);
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className="truth-table-container justify-content-center m-auto p-3">
            <h1>Truth table builder</h1>
            <div className="row">
                <ExpressionInput onSubmit={onSubmit} width={8} />
                <GeneratingUnit width={4}/>
            </div>
            {table && (
                <TruthTable
                    header={table.truthTable.header}
                    body={table.truthTable.body}
                />
            )}
        </div>
    );
};
