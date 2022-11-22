import React from 'react'
import styled from 'styled-components'

import { FlexDiv } from '../common/Div'

import HomeComponent from './home/HomeComponent'
import ExploreComponent from './explore/ExploreComponent'
import ShortsComponent from './shorts/ShortsComponent'
import SubscribeComponent from './subscribe/SubscribeComponent'
import SaveComponent from './save/SaveComponent'

import {useSelector} from "react-redux"



// == styled ==
const Main = styled(FlexDiv) `
    padding-top: 100px;
`

const MainAfter = styled(Main) `
    padding-left: 10%;
`

const MainComponent = () => {

    let change_tab = useSelector(state => state.change_tab)
    let is_nav_open = useSelector(state => state.is_nav_open)
    if ( is_nav_open == false ) {
        return (
            <Main flexAttr="===wrap">
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
            <MainAfter flexAttr="===wrap" width="90%">
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