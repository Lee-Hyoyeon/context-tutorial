import React from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
    return (
        // <ColorContext.Consumer>
        //   {(value) => (
        //     <div
        //       style={{
        //         width: "164px",
        //         height: "184px",
        //         background: value.color,
        //       }}
        //     />
        //   )}
        // </ColorContext.Consumer>

        <ColorConsumer>
            {(value) => (
                <>
                    <div
                        style={{
                            width: "164px",
                            height: "184px",
                            background: value.state.color,
                        }}
                    />

                    <div
                        style={{
                            width: "132px",
                            height: "142px",
                            background: value.state.subcolor,
                        }}
                    />
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;
