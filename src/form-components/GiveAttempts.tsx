import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleGain = () => {
        const parsed = parseInt(requestedAttempts, 10);
        if (!isNaN(parsed)) {
            setAttempts(attempts + parsed);
        }
    };

    const handleUse = () => {
        setAttempts(attempts - 1);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>

            <Form.Group controlId="requestedAttemptsInput">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(e.target.value);
                    }}
                />
            </Form.Group>

            <Button onClick={handleUse} disabled={attempts <= 0}>
                use
            </Button>

            <Button onClick={handleGain}>gain</Button>
        </div>
    );
}
