import React from 'react';
import './craps.css';
import { Row, Col } from 'react-bootstrap';

const Table = (props) => {
    return (
        <Col lg={9}>
            <Row>
                <Col lg={2}>
                    <Row>
                        <Col lg={6} className={"crapsTable"} id={"dontPassOdds"} onClick={e => props.handleBetPlacement(e)}>
                            <p>Don't Pass Odds</p>
                            <div className={`${props.betOptions[3].chipsClass} rounded-circle`}>$5</div>
                        </Col>
                        <Col lg={6} className={"crapsTable"} id={"dontPass"} onClick={e => props.handleBetPlacement(e)}>
                            <p>Don't Pass Bar 12</p>
                            <div className={`${props.betOptions[1].chipsClass} rounded-circle`}>$5</div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={10}>
                    <Row>
                        <Col lg={1} className={"crapsTable"} id={"dontCome"} onClick={e => props.handleBetPlacement(e)}>
                            <p>Don't Come Bar 12</p>
                            <div className={`${props.betOptions[5].chipsClass} rounded-circle`}>$5</div>
                        </Col>
                        {/* come points */}
                        <Col lg={11}>
                            <Row>
                                <Col lg={2}>
                                    <Row><Col lg={12} className={"crapsTable"}><div className={`${props.puckText[0].className} rounded-circle`}><p className={"puckText"}>{props.puckText[0].text}</p></div></Col></Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                    <Row>
                                        <Col lg={12} className={"crapsTable"} id={"buyNum4"} onClick={e => props.handleBetPlacement(e)}>
                                            <p>4</p>
                                            <div className={`${props.betOptions[8].chipsClass} rounded-circle`}>$5</div>
                                        </Col>
                                    </Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                </Col>
                                <Col lg={2}>
                                    <Row><Col lg={12} className={"crapsTable"}><div className={`${props.puckText[1].className} rounded-circle`}><p className={"puckText"}>{props.puckText[1].text}</p></div></Col></Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                    <Row>
                                        <Col lg={12} className={"crapsTable"} id={"buyNum5"} onClick={e => props.handleBetPlacement(e)}>
                                            <p>5</p>
                                            <div className={`${props.betOptions[9].chipsClass} rounded-circle`}>$5</div>
                                        </Col>
                                    </Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                </Col>
                                <Col lg={2}>
                                    <Row><Col lg={12} className={"crapsTable"}><div className={`${props.puckText[2].className} rounded-circle`}><p className={"puckText"}>{props.puckText[2].text}</p></div></Col></Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                    <Row>
                                        <Col lg={12} className={"crapsTable"} id={"buyNum6"} onClick={e => props.handleBetPlacement(e)}>
                                            <p>6</p>
                                            <div className={`${props.betOptions[10].chipsClass} rounded-circle`}>$5</div>
                                        </Col>
                                    </Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                </Col>
                                <Col lg={2}>
                                    <Row><Col lg={12} className={"crapsTable"}><div className={`${props.puckText[3].className} rounded-circle`}><p className={"puckText"}>{props.puckText[3].text}</p></div></Col></Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                    <Row>
                                        <Col lg={12} className={"crapsTable"} id={"buyNum8"} onClick={e => props.handleBetPlacement(e)}>
                                            <p>8</p>
                                            <div className={`${props.betOptions[11].chipsClass} rounded-circle`}>$5</div>
                                        </Col>
                                    </Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                </Col>
                                <Col lg={2}>
                                    <Row><Col lg={12} className={"crapsTable"}><div className={`${props.puckText[4].className} rounded-circle`}><p className={"puckText"}>{props.puckText[4].text}</p></div></Col></Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                    <Row>
                                        <Col lg={12} className={"crapsTable"} id={"buyNum9"} onClick={e => props.handleBetPlacement(e)}>
                                            <p>9</p>
                                            <div className={`${props.betOptions[12].chipsClass} rounded-circle`}>$5</div>
                                        </Col>
                                    </Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                </Col>
                                <Col lg={2}>
                                    <Row><Col lg={12} className={"crapsTable"}><div className={`${props.puckText[5].className} rounded-circle`}><p className={"puckText"}>{props.puckText[5].text}</p></div></Col></Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                    <Row>
                                        <Col lg={12} className={"crapsTable"} id={"buyNum10"} onClick={e => props.handleBetPlacement(e)}>
                                            <p>10</p>
                                            <div className={`${props.betOptions[13].chipsClass} rounded-circle`}>$5</div>
                                        </Col>
                                    </Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                    <Row><Col lg={12} className={"crapsTable"}><p> </p></Col></Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className={"crapsTable"} id={"comeLine"} onClick={e => props.handleBetPlacement(e)}>
                            <p className={"betLabel1"}>Come Line</p>
                            <div className={`${props.betOptions[4].chipsClass} rounded-circle`}>$5</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col lg={2}>
                    <Row>
                        <Col lg={6} className={"crapsTable"} id={"big6"} onClick={e => props.handleBetPlacement(e)}>
                            <p>Big 6</p>
                            <div className={`${props.betOptions[7].chipsClass} rounded-circle`}>$5</div>
                        </Col>
                        <Col lg={6} className={"crapsTable"} id={"big8"} onClick={e => props.handleBetPlacement(e)}>
                            <p>Big 8</p>
                            <div className={`${props.betOptions[6].chipsClass} rounded-circle`}>$5</div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={10} className={"crapsTable"} id={"field"} onClick={e => props.handleBetPlacement(e)}>
                    <p>Field</p>
                        <p className={"fieldNums fieldNums2"}>2</p>
                        <p className={"fieldNums"}>3</p>
                        <p className={"fieldNums"}>4</p>
                        <p className={"fieldNums"}>9</p>
                        <p className={"fieldNums"}>10</p>
                        <p className={"fieldNums"}>11</p>
                        <p className={"fieldNums fieldNums2"}>12</p>
                    <div className={`${props.betOptions[14].chipsClass} rounded-circle`}>$5</div>
                </Col>
            </Row>
            <Row>
                <Col lg={12} className={"crapsTable"} id={"passLine"} onClick={e => props.handleBetPlacement(e)}>
                    <p className={"betLabel1"}>Pass Line</p>
                    <div className={`${props.betOptions[0].chipsClass} rounded-circle`}>$5</div>
                </Col>
            </Row>
            <Row>
                <Col lg={12} className={"crapsTable"} id={"passOdds"} onClick={e => props.handleBetPlacement(e)}>
                    <p className={"betLabel1"}>Pass Odds</p>
                    <div className={`${props.betOptions[2].chipsClass} rounded-circle`}>$5</div>
                </Col>
            </Row>
        </Col>
    );
}

export default Table;