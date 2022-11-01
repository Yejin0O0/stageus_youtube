// App 컴포넌트를 root div에 렌더링 시키는 파일
import React from "react" // react import 적용
import ReactDOM from "react-dom/client" // reactDOM import 작업
import { Provider } from "react-redux"  // redux의 provider

import App from "./App" // 내가 만든 App.js import 작업
import store from "./store/store"

import './App.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    // 사용할 컴포넌트에 provider 지정
    <Provider store={store}><App /></Provider>
    // <RecoilRoot><App/></RecoilRoot>
)

