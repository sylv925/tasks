import React from "react";
import "./App.css";
import drawing from "/Users/sylv/Desktop/dcss-owls/tasks/src/Assets/drawing.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <header style={{ backgroundColor: "orange" }}>
                            <h1>
                                Sylv Chen UD CISC275 with React Hooks and
                                TypeScript
                            </h1>
                        </header>
                        <p>
                            Hello World Edit <code>src/App.tsx</code> and save.
                            This page will automatically reload.
                        </p>
                        <ul>
                            <li>Hello</li>
                            <li>World</li>
                            <li>!</li>
                        </ul>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                width: "50px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <img src={drawing} alt="Drawing" />
                        <div
                            style={{
                                width: "50px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <Counter></Counter>
            <>
                <RevealAnswer></RevealAnswer>
                <hr />
                <StartAttempt></StartAttempt>
                <hr />
                <TwoDice></TwoDice>
                <hr />
                <ChangeType></ChangeType>
                <hr />
                <CycleHoliday></CycleHoliday>
            </>
        </div>
    );
}

export default App;
