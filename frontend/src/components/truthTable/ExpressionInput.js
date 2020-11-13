import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const ExpressionInput = ({ onSubmit, sm, md, lg, xl, width }) => {
    const inputRef = React.createRef();

    return (
        
            <div className={`col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} col-${width}`}>
                <Form className="p-3">
                    <Form.Group>
                        <Form.Label>Enter logical expression</Form.Label>
                        <Form.Control
                            ref={inputRef}
                            className="text-dark font-weight-bold"
                        />
                        <Form.Text className="text-muted">
                            Case-insensitive
                        </Form.Text>
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        onClick={(e) => onSubmit(e, inputRef.current.value)}
                    >
                        Build
                    </Button>
                </Form>
            </div>
    );
};
