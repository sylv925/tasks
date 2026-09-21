import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    return (
        <div>
            <Form.Group>
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={(
                        event: React.ChangeEvent<HTMLTextAreaElement>,
                    ) => {
                        setUserAnswer(event.target.value);
                    }}
                />
                {userAnswer === expectedAnswer && (
                    <Form.Text className="text-success">✔️</Form.Text>
                )}
                {userAnswer !== expectedAnswer && (
                    <Form.Text className="text-incorrect">❌</Form.Text>
                )}
            </Form.Group>
        </div>
    );
}
