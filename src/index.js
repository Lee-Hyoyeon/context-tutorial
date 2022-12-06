import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();

// JSX 사용 하면 보기쉽고 익숙, 높은 활용도
// ReactDom.render는 무엇?  -> 컴포넌트를 페이지에 렌더링하는 역할.
// .render는 페이지에 렌더링할 내용을 jsx 형태로 작성.
// 해당 jsx를 렌더링 할 document 내부 요소를 설정한다. (id가 root은 요소안에 렌더링 하겠다.)

// <React.StrictMode> 리액트의 레거시 기능들을 사용하지 못하게 한다.
// 아주 오래된 옛날 기능사용시 경고 출력.
