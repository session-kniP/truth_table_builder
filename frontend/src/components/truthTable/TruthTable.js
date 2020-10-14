import React from 'react';
import { Table } from 'react-bootstrap';

export const TruthTable = ({ header, body }) => {
    return (
        <div className="py-3">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {header.map((el, idx) => (
                            <th className="p-1 align-middle text-center" key={idx}>
                                {el}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {body &&
                        body.map((row, rowIdx) => {
                            return (
                                <tr key={rowIdx}>
                                    {row.map((el, elIdx) => (
                                        <td className="p-1 text-center" key={elIdx}>
                                            {+el}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </div>
    );
};
