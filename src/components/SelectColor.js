import React from "react";
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColor = () => {
    return (
        <div>
            <h2>choose color</h2>
            {/* <div style={{ display: "flex" }}>
                {colors.map((color) => (
                    <div
                        key={color}
                        style={{
                            background: color,
                            width: "94px",
                            height: "94px",
                            cursor: "pointer",
                        }}
                    ></div>
                ))}
            </div> */}

            <ColorConsumer>
                {({ actions }) => (
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
                )}
            </ColorConsumer>
        </div>
    );
};

export default SelectColor;
