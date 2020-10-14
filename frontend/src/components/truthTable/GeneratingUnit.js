import React, { useState, useContext } from 'react';
import { Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import ApplicationContext from '../../context/ApplicationContext';
import { ToastType } from '../toasts/ToastType';

export const GeneratingUnit = ({ width }) => {
    const { showToast } = useContext(ApplicationContext);
    const [unitShowing, setUnitShowing] = useState(false);

    const dropdownRef = React.createRef();
    const resultRef = React.createRef();

    const firstVarRef = React.createRef();
    const secondVarRef = React.createRef();

    const pierceArrow = (firstVal, secondVal) => {
        return `-(${firstVal} + ${secondVal})`;
    };

    const shefferStroke = (firstVal, secondVal) => {
        return `-(${firstVal} * ${secondVal})`;
    };

    const generateExpressionHandler = (e) => {
        e.preventDefault();
        const current = parseInt(dropdownRef.current.value);

        const firstVar = firstVarRef.current.value;
        const secondVar = secondVarRef.current.value;
        if (firstVar === '' || secondVar === '') {
            showToast({
                type: ToastType.ERROR,
                text: 'All fields should be filled',
            });
            return;
        }

        switch (current) {
            case 1:
                resultRef.current.innerText = pierceArrow(firstVar, secondVar);
                break;
            case 2:
                resultRef.current.innerText = shefferStroke(
                    firstVar,
                    secondVar
                );
                break;
        }

        //setUnitShowing(unitShowing);
    };

    const changeShowingState = (e) => {
        e.persist();
        setUnitShowing(!unitShowing);
    };

    const copyHandler = () => {
        const el = document.createElement('textarea');
        const text = resultRef.current.innerText;

        if (text === '') {
            return;
        }

        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        showToast({
            type: ToastType.SUCCESS,
            text: 'Expression successfully copied to clipboard',
        });
    };

    return (
        <div className={`generating-unit align-text-middle col-${width}`}>
            <Button
                className="w-100 text-wrap"
                variant="secondary"
                onClick={(e) => changeShowingState(e)}
                as="input"
                type="button"
                value={unitShowing ? 'Hide' : 'Additional expressions'}
            ></Button>
            {unitShowing && (
                <div className="generating-unit-main mx-auto ">
                    <Form className="pt-2 mx-auto">
                        <Form.Control as="select" ref={dropdownRef}>
                            <option value={1} defaultValue>
                                Pierce Arrow
                            </option>
                            <option value={2}>Sheffer stroke</option>
                        </Form.Control>
                        <Form.Group className="d-inline-block p-1 m-0 col-6">
                            <Form.Control
                                placeholder="First var"
                                ref={firstVarRef}
                            />
                        </Form.Group>

                        <Form.Group className="d-inline-block p-1 m-0 col-6">
                            <Form.Control
                                placeholder="Second var"
                                ref={secondVarRef}
                            />
                        </Form.Group>
                        <div className="d-flex m-2 justify-content-center">
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={(e) => generateExpressionHandler(e)}
                            >
                                Submit
                            </Button>
                        </div>
                        <div className="row">
                            <Form.Control
                                className="d-inline col-8 mx-1"
                                as="label"
                                ref={resultRef}
                            />
                            <Button
                                size="xl"
                                className="d-inline h-50 col-3 mx-1"
                                variant="success"
                                onClick={() => copyHandler()}
                            >
                                Copy
                            </Button>
                        </div>
                    </Form>
                </div>
            )}
        </div>
    );
};
