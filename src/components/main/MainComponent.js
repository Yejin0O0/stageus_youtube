import React from 'react'
import styled from 'styled-components'

import { FlexWrapDiv } from '../common/Div'

import HomeComponent from './children/HomeComponent'
import ExploreComponent from './children/ExploreComponent'
import ShortsComponent from './children/ShortsComponent'
import SubscribeComponent from './children/SubscribeComponent'
import SaveComponent from './children/SaveComponent'

import {useSelector} from "react-redux"



// == styled ==
const Main = styled(FlexWrapDiv) `
    padding-top: 100px;
    

`

const MainAfter = styled(Main) `
    padding-left: 10%;
    

`

const MainComponent = () => {

    let change_tab = useSelector(state => state.change_tab)
    let is_nav_open = useSelector(state => state.is_nav_open)
    console.log(change_tab)
    if ( is_nav_open == false ) {
        return (
            <Main>
                {
                    change_tab == 'RENDER_HOME' && <HomeComponent/> ||
                    change_tab == 'RENDER_EXPLORE' && <ExploreComponent/> ||
                    change_tab == 'RENDER_SHORTS' && <ShortsComponent/> ||
                    change_tab == 'RENDER_SUBSCRIBE' && <SubscribeComponent/> ||
                    change_tab == 'RENDER_SAVE' && <SaveComponent/>
                }
            </Main>
        )
        
      } else {
        return (
            <MainAfter width="90%">
                {
                    change_tab == 'RENDER_HOME' && <HomeComponent/> ||
                    change_tab == 'RENDER_EXPLORE' && <ExploreComponent/> ||
                    change_tab == 'RENDER_SHORTS' && <ShortsComponent/> ||
                    change_tab == 'RENDER_SUBSCRIBE' && <SubscribeComponent/> ||
                    change_tab == 'RENDER_SAVE' && <SaveComponent/>
                }
            </MainAfter>
        );
      }
    
}

export default MainComponent