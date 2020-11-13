import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import '../styles/tabs.css';

//CHRIST FORGIVE ME
export const AboutPage = () => {
    return (
        <div>
            <div className="d-flex justify-content-center m-3">
                <h3>
                    I coppied whole shit from{' '}
                    <a href="https://en.wikipedia.org/wiki/Truth_table" target="_blank">
                        &nbsp;Wikipedia
                    </a>
                </h3>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="truth-table">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="truth-table">What is truth table</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="unary">Unary operations</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="binary">Binary operations</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="text-justify tabs-text">
                            <Tab.Pane eventKey="truth-table">
                                A truth table is a mathematical table used in logic—specifically in connection
                                with Boolean algebra, boolean functions, and propositional calculus—which sets
                                out the functional values of logical expressions on each of their functional
                                arguments, that is, for each combination of values taken by their logical
                                variables. In particular, truth tables can be used to show whether a
                                propositional expression is true for all legitimate input values, that is,
                                logically valid.
                            </Tab.Pane>
                            <Tab.Pane eventKey="unary">
                                <h2>
                                    <span class="mw-headline" id="Unary_operations">
                                        Unary operations
                                    </span>
                                </h2>
                                <p>There are 4 unary operations:</p>
                                <ul>
                                    <li>Always true</li>
                                    <li>
                                        Never true, unary{' '}
                                        <i>
                                            <a href="/wiki/Falsum" class="mw-redirect" title="Falsum">
                                                falsum
                                            </a>
                                        </i>
                                    </li>
                                    <li>
                                        Unary <i>Identity</i>
                                    </li>
                                    <li>
                                        Unary <i>negation</i>
                                    </li>
                                </ul>
                                <h3>
                                    <span class="mw-headline" id="Logical_true">
                                        Logical true
                                    </span>
                                </h3>
                                <p>The output value is always true, regardless of the input value of p</p>
                                <table class="wikitable">
                                    <caption>
                                        <b>Logical True</b>
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <i>p</i>
                                            </th>
                                            <th>
                                                <span class="texhtml">
                                                    <i>T</i>
                                                </span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>T</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3>
                                    <span class="mw-headline" id="Logical_false">
                                        Logical false
                                    </span>
                                </h3>
                                <p>
                                    The output value is never true: that is, always false, regardless of the
                                    input value of p
                                </p>
                                <table class="wikitable">
                                    <caption>
                                        <b>Logical False</b>
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <i>p</i>
                                            </th>
                                            <th>
                                                <span class="texhtml">
                                                    <i>F</i>
                                                </span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>F</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3>
                                    <span class="mw-headline" id="Logical_identity">
                                        Logical identity
                                    </span>
                                </h3>
                                <p>
                                    <a href="/wiki/Identity_function" title="Identity function">
                                        Logical identity
                                    </a>{' '}
                                    is an{' '}
                                    <a
                                        href="/wiki/Logical_operation"
                                        class="mw-redirect"
                                        title="Logical operation"
                                    >
                                        operation
                                    </a>{' '}
                                    on one{' '}
                                    <a href="/wiki/Logical_value" class="mw-redirect" title="Logical value">
                                        logical value
                                    </a>{' '}
                                    p, for which the output value remains p.
                                </p>
                                <p>The truth table for the logical identity operator is as follows:</p>
                                <table class="wikitable">
                                    <caption>
                                        <b>Logical Identity</b>
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <i>p</i>
                                            </th>
                                            <th>
                                                <span class="texhtml">
                                                    <i>p</i>
                                                </span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>F</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3>
                                    <span class="mw-headline" id="Logical_negation">
                                        Logical negation
                                    </span>
                                    <span class="mw-editsection"></span>
                                </h3>
                                <p>
                                    <a
                                        href="/wiki/Logical_negation"
                                        class="mw-redirect"
                                        title="Logical negation"
                                    >
                                        Logical negation
                                    </a>{' '}
                                    is an{' '}
                                    <a
                                        href="/wiki/Logical_operation"
                                        class="mw-redirect"
                                        title="Logical operation"
                                    >
                                        operation
                                    </a>{' '}
                                    on one{' '}
                                    <a href="/wiki/Logical_value" class="mw-redirect" title="Logical value">
                                        logical value
                                    </a>
                                    , typically the value of a{' '}
                                    <a href="/wiki/Proposition" title="Proposition">
                                        proposition
                                    </a>
                                    , that produces a value of <i>true</i> if its operand is false and a value
                                    of <i>false</i> if its operand is true.
                                </p>
                                <p>
                                    The truth table for <b>NOT p</b> (also written as <b>¬p</b>, <b>Np</b>,{' '}
                                    <b>Fpq</b>, or <b>~p</b>) is as follows:
                                </p>
                                <table class="wikitable">
                                    <caption>
                                        <b>Logical Negation</b>
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <i>p</i>
                                            </th>
                                            <th>
                                                <span class="texhtml">
                                                    <i>¬p</i>
                                                </span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>T</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="binary">
                                <h2>
                                    <span class="mw-headline" id="Binary_operations">
                                        Binary operations
                                    </span>
                                </h2>

                                <h3>
                                    <span id="Logical_conjunction_.28AND.29"></span>
                                    <span class="mw-headline" id="Logical_conjunction_(AND)">
                                        Logical conjunction (AND)
                                    </span>
                                    
                                </h3>
                                <p>
                                    <a href="/wiki/Logical_conjunction" title="Logical conjunction">
                                        Logical conjunction
                                    </a>
                                    is an{' '}
                                    <a
                                        href="/wiki/Logical_operation"
                                        class="mw-redirect"
                                        title="Logical operation"
                                    >
                                        operation
                                    </a>
                                    on two{' '}
                                    <a href="/wiki/Logical_value" class="mw-redirect" title="Logical value">
                                        logical values
                                    </a>
                                    , typically the values of two{' '}
                                    <a href="/wiki/Proposition" title="Proposition">
                                        propositions
                                    </a>
                                    , that produces a value of <i>true</i>
                                    if both of its operands are true.
                                </p>
                                <p>
                                    The truth table for <b>p AND q</b>
                                    (also written as <b>p ∧ q</b>, <b>Kpq</b>, <b>p &amp;q</b>, or <b>p</b>
                                    <span class="mwe-math-element">
                                        <span class="mwe-math-mathml-inline mwe-math-mathml-a11y">
                                            <math
                                                xmlns="http://www.w3.org/1998/Math/MathML"
                                                alttext="{\displaystyle \cdot }"
                                            >
                                                <semantics>
                                                    <mrow class="MJX-TeXAtom-ORD">
                                                        <mstyle displaystyle="true" scriptlevel="0">
                                                            <mo>&#x22C5;</mo>
                                                        </mstyle>
                                                    </mrow>
                                                    <annotation encoding="application/x-tex">
                                                        \displaystyle \cdot{' '}
                                                    </annotation>
                                                </semantics>
                                            </math>
                                        </span>
                                        <img
                                            src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ba2c023bad1bd39ed49080f729cbf26bc448c9ba"
                                            class="mwe-math-fallback-image-inline"
                                            aria-hidden="true"
                                            alt="\cdot "
                                        />
                                    </span>
                                    <b>q</b>) is as follows:
                                </p>
                                <table class="wikitable">
                                    <caption>
                                        <b>Logical conjunction</b>
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <i>p</i>
                                            </th>
                                            <th>
                                                <i>q</i>
                                            </th>
                                            <th>
                                                <i>p</i>∧ <i>q</i>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>T</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>F</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>T</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>F</td>
                                            <td>F</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>
                                    In ordinary language terms, if both <i>p</i>
                                    and <i>q</i>
                                    are true, then the conjunction <i>p</i>∧ <i>q</i>
                                    is true. For all other assignments of logical values to <i>p</i>
                                    and to <i>q</i>
                                    the conjunction <i>p</i>
                                    &#160;∧&#160;<i>q</i>
                                    is false.
                                </p>
                                <p>
                                    It can also be said that if <i>p</i>, then <i>p</i>∧ <i>q</i>
                                    is <i>q</i>, otherwise <i>p</i>∧ <i>q</i>
                                    is <i>p</i>.
                                </p>
                                <h3>
                                    <span id="Logical_disjunction_.28OR.29"></span>
                                    <span class="mw-headline" id="Logical_disjunction_(OR)">
                                        Logical disjunction (OR)
                                    </span>
                                    
                                </h3>
                                <p>
                                    <a href="/wiki/Logical_disjunction" title="Logical disjunction">
                                        Logical disjunction
                                    </a>
                                    is an{' '}
                                    <a
                                        href="/wiki/Logical_operation"
                                        class="mw-redirect"
                                        title="Logical operation"
                                    >
                                        operation
                                    </a>
                                    on two{' '}
                                    <a href="/wiki/Logical_value" class="mw-redirect" title="Logical value">
                                        logical values
                                    </a>
                                    , typically the values of two{' '}
                                    <a href="/wiki/Proposition" title="Proposition">
                                        propositions
                                    </a>
                                    , that produces a value of <i>true</i>
                                    if at least one of its operands is true.
                                </p>
                                <p>
                                    The truth table for <b>p OR q</b>
                                    (also written as <b>p ∨ q</b>, <b>Apq</b>, <b>p || q</b>, or <b>p + q</b>)
                                    is as follows:
                                </p>
                                <table class="wikitable">
                                    <caption>
                                        <b>Logical disjunction</b>
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <i>p</i>
                                            </th>
                                            <th>
                                                <i>q</i>
                                            </th>
                                            <th>
                                                <i>p</i>∨ <i>q</i>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>T</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>F</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>T</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>F</td>
                                            <td>F</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>
                                    Stated in English, if <i>p</i>, then <i>p</i>∨ <i>q</i>
                                    is <i>p</i>, otherwise <i>p</i>∨ <i>q</i>
                                    is <i>q</i>.
                                </p>
                                <h3>
                                    <span class="mw-headline" id="Logical_implication">
                                        Logical implication
                                    </span>
                                    
                                </h3>
                                <p>
                                    Logical implication and the{' '}
                                    <a href="/wiki/Material_conditional" title="Material conditional">
                                        material conditional
                                    </a>
                                    are both associated with an{' '}
                                    <a
                                        href="/wiki/Logical_operation"
                                        class="mw-redirect"
                                        title="Logical operation"
                                    >
                                        operation
                                    </a>
                                    on two{' '}
                                    <a href="/wiki/Logical_value" class="mw-redirect" title="Logical value">
                                        logical values
                                    </a>
                                    , typically the values of two{' '}
                                    <a href="/wiki/Proposition" title="Proposition">
                                        propositions
                                    </a>
                                    , which produces a value of <i>false</i>
                                    if the first operand is true and the second operand is false, and a value
                                    of <i>true</i>
                                    otherwise.
                                </p>
                                <p>
                                    The truth table associated with the logical implication <b>p implies q</b>
                                    (symbolized as <b>p &#160;⇒&#160;q</b>, or more rarely <b>Cpq</b>) is as
                                    follows:
                                </p>
                                <table class="wikitable">
                                    <caption>
                                        <b>Logical implication</b>
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <i>p</i>
                                            </th>
                                            <th>
                                                <i>q</i>
                                            </th>
                                            <th>
                                                <i>p</i>⇒ <i>q</i>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>T</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>F</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>T</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>F</td>
                                            <td>T</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>
                                    The truth table associated with the material conditional{' '}
                                    <b>if p then q</b>
                                    (symbolized as <b>p &#160;→&#160;q</b>) is as follows:
                                </p>
                                <table class="wikitable">
                                    <caption>
                                        <b>Material conditional </b>
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <i>p</i>
                                            </th>
                                            <th>
                                                <i>q</i>
                                            </th>
                                            <th>
                                                <i>p</i>→ <i>q</i>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>T</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>F</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>T</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>F</td>
                                            <td>T</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>
                                    It may also be useful to note that <b>p &#160;⇒&#160;q</b>
                                    and <b>p &#160;→&#160;q</b>
                                    are equivalent to <b>¬p &#160;∨&#160;q</b>.
                                </p>
                                <h3>
                                    <span class="mw-headline" id="Logical_equality">
                                        Logical equality
                                    </span>
                                    
                                </h3>
                                <p>
                                    <a href="/wiki/Logical_equality" title="Logical equality">
                                        Logical equality
                                    </a>
                                    (also known as{' '}
                                    <a href="/wiki/Biconditional" class="mw-redirect" title="Biconditional">
                                        biconditional
                                    </a>
                                    or{' '}
                                    <a href="/wiki/Exclusive_nor" class="mw-redirect" title="Exclusive nor">
                                        exclusive nor
                                    </a>
                                    ) is an{' '}
                                    <a
                                        href="/wiki/Logical_operation"
                                        class="mw-redirect"
                                        title="Logical operation"
                                    >
                                        operation
                                    </a>
                                    on two{' '}
                                    <a href="/wiki/Logical_value" class="mw-redirect" title="Logical value">
                                        logical values
                                    </a>
                                    , typically the values of two{' '}
                                    <a href="/wiki/Proposition" title="Proposition">
                                        propositions
                                    </a>
                                    , that produces a value of <i>true</i>
                                    if both operands are false or both operands are true.
                                </p>
                                <p>
                                    The truth table for <b>p XNOR q</b>
                                    (also written as <b>p ↔ q</b>, <b>Epq</b>, <b>p = q</b>, or <b>p ≡ q</b>)
                                    is as follows:
                                </p>
                                <table class="wikitable">
                                    <caption>
                                        <b>Logical equality</b>
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <i>p</i>
                                            </th>
                                            <th>
                                                <i>q</i>
                                            </th>
                                            <th>
                                                <i>p</i>↔ <i>q</i>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>T</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>F</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>T</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>F</td>
                                            <td>T</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>
                                    So p EQ q is true if p and q have the same{' '}
                                    <a href="/wiki/Truth_value" title="Truth value">
                                        truth value
                                    </a>
                                    (both true or both false), and false if they have different truth values.
                                </p>
                                <h3>
                                    <span class="mw-headline" id="Exclusive_disjunction">
                                        Exclusive disjunction
                                    </span>
                                    
                                </h3>
                                <p>
                                    <a
                                        href="/wiki/Exclusive_disjunction"
                                        class="mw-redirect"
                                        title="Exclusive disjunction"
                                    >
                                        Exclusive disjunction
                                    </a>
                                    is an{' '}
                                    <a
                                        href="/wiki/Logical_operation"
                                        class="mw-redirect"
                                        title="Logical operation"
                                    >
                                        operation
                                    </a>
                                    on two{' '}
                                    <a href="/wiki/Logical_value" class="mw-redirect" title="Logical value">
                                        logical values
                                    </a>
                                    , typically the values of two{' '}
                                    <a href="/wiki/Proposition" title="Proposition">
                                        propositions
                                    </a>
                                    , that produces a value of <i>true</i>
                                    if one but not both of its operands is true.
                                </p>
                                <p>
                                    The truth table for <b>p XOR q</b>
                                    (also written as <b>Jpq</b>, or <b>p ⊕ q</b>) is as follows:
                                </p>
                                <table class="wikitable">
                                    <caption>
                                        <b>Exclusive disjunction</b>
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <i>p</i>
                                            </th>
                                            <th>
                                                <i>q</i>
                                            </th>
                                            <th>
                                                <b>p</b>⊕ <b>q</b>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>T</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>T</td>
                                            <td>F</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>T</td>
                                            <td>T</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>F</td>
                                            <td>F</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>
                                    For two propositions, <b>XOR</b>
                                    can also be written as (p ∧ ¬q) ∨ (¬p ∧ q).
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};
