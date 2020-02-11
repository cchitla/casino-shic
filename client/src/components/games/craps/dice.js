import React from 'react';
import './craps.css';
import { Row, Col, Button } from 'react-bootstrap';

const Dice = (props) => {
    return (
        <Row>
            <Col lg={12} className={"diceContainer"}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} id="diceArea">
                        <Row>
                            <Col lg={6}><p className={"dice"} id={"d1"}>{props.d1}</p></Col>
                            <Col lg={6}><p className={"dice"} id={"d2"}>{props.d2}</p></Col>
                        </Row>
                    </Col>
                    <Col lg={1}></Col>

                </Row>
                <Row>
                    <Col lg={12}>
                        <p id={"diceTotal"}>Total Rolled: {props.diceTotal}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Button block id="rollBtn" onClick={props.handleDiceRoll}>ROLL DICE</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Dice;