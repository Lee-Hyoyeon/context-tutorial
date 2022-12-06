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
                            //마우스 오른쪽 클릭시 발생하는 이벤트 이벤트 핸들러 속성
                            e.preventDefault(); //마우스 오른쪽 버튼 클릭시 메뉴뜨는거 무시
                            actions.setSubcolor(color);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SelectColor;
