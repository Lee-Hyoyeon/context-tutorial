import React, { useContext } from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
        <>
            <div
                style={{
                    width: "164px",
                    height: "184px",
                    background: state.color,
                }}
            />

            <div
                style={{
                    width: "132px",
                    height: "142px",
                    background: state.subcolor,
                }}
            />
        </>
    );
};

export default ColorBox;
