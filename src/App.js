import React from "react"

import HeaderComponent from "./components/header/HeaderComponent"
import NavComponent from "./components/navBar/NavComponent"
import MainComponent from "./components/main/MainComponent"


const App = ()=>  {
    // const [number, setNumber] = React.useState(0)

    return (
        <React.Fragment>
            <HeaderComponent />
            <NavComponent />
            <MainComponent />
        </React.Fragment>
    )
}
export default App
