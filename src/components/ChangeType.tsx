import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    return (
        <span>
            <Button
                onClick={() => {
                    if (type === "multiple_choice_question") {
                        setType("short_answer_question");
                    } else {
                        setType("multiple_choice_question");
                    }
                }}
            >
                Change Type
            </Button>
            {type === "short_answer_question" ?
                <div>Short Answer</div>
            :   <div>Multiple Choice</div>}
        </span>
    );
}
