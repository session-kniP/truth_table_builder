import React, {useState} from 'react';
import { Row, Col, Toast, Button } from 'react-bootstrap';
import '../../styles/alert.css';

export const Alert = ({type, text}) => {
    const [show, setShow] = useState(true);

    return (
        <Row className="mr-1">
            <Col>
                <Toast
                    className={`alert-${type.toLowerCase()}`}
                    onClose={() => setShow(false)}
                    show={show}
                    delay={3000}
                    autohide={true}
                >
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">{type}</strong>
                    </Toast.Header>
                    <Toast.Body>
                        {text}
                    </Toast.Body>
                </Toast>
            </Col>
        </Row>
    );
}
