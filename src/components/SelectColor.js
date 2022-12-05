import React, { useContext } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColor = () => {
    const { actions } = useContext(ColorContext);
    return (
        <div>
            <h2>choose color</h2>

            <div style={{ display: "flex" }}>
                {colors.map((color) => (
                    <div
                        key={color}
                        style={{
                            background: color,
                            width: "77px",
                            height: "88px",
                            cursor: "pointer",
                        }}
                        onClick={() => actions.setColor(color)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            actions.setSubcolor(color);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SelectColor;
