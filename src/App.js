import React from "react"

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/globalStyles';
import theme from './theme/theme';

import HeaderComponent from "./components/header/HeaderComponent"
import NavComponent from "./components/navBar/NavComponent"
import MainComponent from "./components/main/MainComponent"


const App = ()=>  {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <HeaderComponent />
            <NavComponent />
            <MainComponent />
        </ThemeProvider>
    )
}
export default App
