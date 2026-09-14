import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "💘" | "🐉" | "🦃" | "🎃" | "⛄";
    const [holiday, setHoliday] = useState<Holiday>("💘");
    function alphabeticalHoliday(): void {
        setHoliday(
            holiday === "🐉" ? "⛄"
            : holiday === "⛄" ? "🎃"
            : holiday === "🎃" ? "🦃"
            : holiday === "🦃" ? "💘"
            : "🐉",
        );
    }
    function yearHoliday(): void {
        setHoliday(
            holiday === "💘" ? "🐉"
            : holiday === "🐉" ? "🦃"
            : holiday === "🦃" ? "🎃"
            : holiday === "🎃" ? "⛄"
            : "💘",
        );
    }
    return (
        <span>
            Holiday: {holiday}
            <Button onClick={alphabeticalHoliday}>Advance by Alphabet</Button>
            <Button onClick={yearHoliday}>Advance by Year</Button>
        </span>
    );
}
