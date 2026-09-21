import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "pink",
    "purple",
    "salmon",
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, changeColor] = useState<string>(DEFAULT_COLOR);

    return (
        <div>
            {COLORS.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    onChange={() => {
                        changeColor(color);
                    }}
                    id={`color-${color}`}
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "20px",
                    marginTop: "10px",
                    display: "inline-block",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
