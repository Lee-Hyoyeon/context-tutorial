import { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "pink", subcolor: "yellow" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}> {children} </ColorContext.Provider>
  );
};

//const ColorConsumer = colorContext.Consumer 와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;
//두가지 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
