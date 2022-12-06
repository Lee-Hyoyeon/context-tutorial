import React, { useContext } from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
        <>
            <div
                style={{
                    width: "264px",
                    height: "284px",
                    background: state.color,
                }}
            />

            <div
                style={{
                    width: "152px",
                    height: "152px",
                    background: state.subcolor,
                }}
            />
        </>
    );
};

export default ColorBox;
