import React from 'react';
import styled from 'styled-components'

import { useSelector } from "react-redux"

import NavItemsComponent from './children/NavItemsComponent';

import { FlexDiv } from '../common/Div';


// == styled ==

const Nav = styled(FlexDiv) `
    min-width: 72px;
    height: 100%;
    background-color: ${(props) => props.theme.backgroundColor.white};
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    margin-right: 3%;
    @media all and (min-width:480px) and (max-width:767px) {
        display: none;
    }

    @media all and (max-width:479px) {
        display: none;
    }

`
const NavBefore = styled(Nav) `
    width: 72px;
`

const NavAfter = styled(Nav) `
    width: 15%;
`



const NavComponent = () => {


    const NavData = [
        {
            "id": "nav_1",
            "name": "홈",
            "src": "image/home.png",
            "render": "RENDER_HOME"
        },
        {   
            "id": "nav_2",
            "name": "탐색",
            "src": "image/compass.png",
            "render": "RENDER_EXPLORE"

        },
        {
            "id": "nav_3",
            "name": "Shorts",
            "src": "image/shorts.png",
            "render": "RENDER_SHORTS"

        },
        {
            "id": "nav_4",
            "name": "구독",
            "src": "image/subscribe.png",
            "render": "RENDER_SUBSCRIBE"

        },
        {
            "id": "nav_5",
            "name": "보관함",
            "src": "image/save.png",
            "render": "RENDER_SAVE"

        },
    ]


    let is_nav_open = useSelector(state => state.is_nav_open)

    return (
        <React.Fragment>
            {is_nav_open ? 
                <NavAfter flexAttr="==column">
                    {NavData.map(data => (
                        <NavItemsComponent ImgData={data} key={data.id} render={data.render}/>
                    )) }    
                </NavAfter>
                :
                <NavBefore flexAttr="==column">
            
                 {NavData.map(data => (
                    <NavItemsComponent ImgData={data} key={data.id} render={data.render}/>
                ))}    
            
                </NavBefore>
            }
            
        </React.Fragment>
        
    )
    
    
}


export default NavComponent