import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext, { ColorProvider } from "./contexts/color";
import SelectColor from "./components/SelectColor";

function App() {
    return (
        // <ColorContext.Provider value={{ color: "red" }}>
        //   <div>
        //     <ColorBox />
        //   </div>
        // </ColorContext.Provider>

        <ColorProvider>
            <div>
                <SelectColor />
                <ColorBox />
            </div>
        </ColorProvider>
    );
}

export default App;
