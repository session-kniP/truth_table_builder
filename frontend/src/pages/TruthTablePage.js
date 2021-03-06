import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useHttpRequest } from '../api/request/httpRequest.hook';

import '../styles/truthTable.css';
import { ExpressionInput } from '../components/truthTable/ExpressionInput';
import { TruthTable } from '../components/truthTable/TruthTable';
import { GeneratingUnit } from '../components/truthTable/GeneratingUnit';
import ApplicationContext from '../context/ApplicationContext';
import { ToastType } from '../components/toasts/ToastType';

export const TruthTablePage = () => {
    const { httpRequest } = useHttpRequest();
    const [table, setTable] = useState(null);
    const {showToast} = useContext(ApplicationContext);

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
            console.log('And the message was', e.getRootMessage());
            showToast({ type: ToastType.ERROR, text: e.getRootMessage() });
            console.log(e.message);
        }
    };

    return (
        <div className="truth-table-container justify-content-center m-auto p-3">
            <h1>Truth table builder</h1>
            <div className="row">
                <ExpressionInput onSubmit={onSubmit} lg={8} />
                <GeneratingUnit width={12} md={6} lg={4} />
            </div>
            {table && <TruthTable header={table.truthTable.header} body={table.truthTable.body} />}
        </div>
    );
};
