import React from 'react';
import styled from 'styled-components'

import { useDispatch, useSelector } from "react-redux"
import { changeTab } from "../../action/action"

import { Div, FlexDiv, FlexCenterColumnDiv } from '../common/Div';
import Img from '../common/Img';
import P from '../common/P'

// == styled ==

const Nav = styled(Div) `
    display: flex;
    flex-direction: column;
    min-width: 72px;
    height: 100%;
    background-color: white;
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

const NavDivBefore = styled(FlexCenterColumnDiv) `
    &:hover{  
        background-color : #e8e8e8;
    }
`
const NavDivAfter = styled(FlexDiv)`
    flex-direction: row;
    justify-content: start;
    align-items: center;
    &:hover{  
        background-color : #e8e8e8;
    }
`

const NavComponent = () => {

    const dispatch = useDispatch()

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

    if ( is_nav_open == false ) {
        return (
            <NavBefore>
                {NavData.map(data => (
                    <NavDivBefore key={data.id} 
                        pointer width='100%' height="74px" onClick={() => {dispatch(changeTab(data.render))}}>
                        <Img src={data.src} width="30px" height="30px" margin="0 0 4px 0"></Img>
                        <P fontSize="12px" margin="0 10px">{data.name}</P>
                    </NavDivBefore>
                ))}    
            </NavBefore>
        )
        
    } else {
        return (
            <NavAfter>
            
                {NavData.map(data => (
                    <NavDivAfter key={data.id} 
                        pointer width='95%' height="fit-content" padding="10px 0 10px 10px"  onClick={() => {dispatch(changeTab(data.render))}}>
                        <Img src={data.src} width="30px" height="30px" margin="0 0 4px 0"></Img>
                        <P fontSize="12px" margin="0 10px">{data.name}</P>
                    </NavDivAfter>
                ))}    
            
            </NavAfter>
        );
      }

    
    
}


export default NavComponent