import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={isEditMode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setIsEditMode(e.target.checked);
                }}
            />

            {isEditMode ?
                <Form>
                    <Form.Group controlId="userNameInput">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Is Student?"
                        checked={isStudent}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setIsStudent(e.target.checked);
                        }}
                    />
                </Form>
            :   <div>
                    {userName} {isStudent ? "is a student" : "is not a student"}
                </div>
            }
        </div>
    );
}
