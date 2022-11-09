import { React, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux"

import {openNav, setProfileImg} from "../../action/action"


import Img from '../common/Img';
import { FlexCenterDiv } from '../common/Div'
import Input from '../common/Input';
import { Button, FlexButton } from '../common/Button';

import styled from "styled-components"

// == styled ==
const Header = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 70px;
    padding: 0 ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
`
const SearchInput = styled(Input)`
    @media all and (min-width:480px) and (max-width:767px) {
        display: none;
    }

    @media all and (max-width:479px) {
        display: none;
    }
`

const SearchButton = styled(Button)`
    @media all and (min-width:480px) and (max-width:767px) {
        display: none;
        background-color: white;
        border: none;
    }

    @media all and (max-width:479px) {
        display: none;
        background-color: white;
        border: none;
    }
`

const MicButton = styled(FlexButton)`
    @media all and (min-width:480px) and (max-width:767px) {
        display: none;
    }

    @media all and (max-width:479px) {
        display: none;
    }
`


const HeaderComponent = () => {

    const dispatch = useDispatch()

    const profileData = useSelector(state => state.set_profile_img)

    useEffect(()=> {
        const imgData = "image/unnamed.jpg"
        dispatch(setProfileImg(imgData))
        

    },[profileData])

    return (
        <Header>
            {/* menuBar & youtube Logo */}
            <FlexCenterDiv height="inherit">
                <FlexCenterDiv id="header-menu-div" width="85px" onClick={() => {dispatch(openNav())}}>
                    <Img src="image/menu.png" width="20px" pointer></Img>
                </FlexCenterDiv>
                <Img src="image/youtube-logo.png" height="inherit" pointer></Img>
            </FlexCenterDiv>
            
            {/* searchBar */}
            <FlexCenterDiv width="50%">
                <SearchInput width="80%" height="40px" border="solid 1px #d6d6d6" 
                padding="0 6px" fontSize="17px" placeholder="검색"/>

                <SearchButton width="64px" height="42px" margin="0" pointer borderRadius="0 2px 2px 0" 
                backgroundColor="#f2f2f2" borderLeft="none" border="1px solid #d6d6d6">
                    <Img src="image/search.png" width="25px"></Img>

                </SearchButton>

                <MicButton pointer width="40px" height="40px" margin="0 0 0 10px"
                border="none" borderRadius="50px" backgroundColor="#f7f7f7">
                    <Img src="image/mic.png" width="40px" height="40px"></Img>
                </MicButton>

            </FlexCenterDiv>

            {/* private */}
            <FlexCenterDiv>
                <Img src="image/add-video.png" width="30px" padding="8px" pointer></Img>
                <Img src="image/bell.png" width="30px" padding="8px" pointer></Img>
                {/* <Img  width="30px" padding="8px" borderRadius="100px" pointer></Img> */}

                {profileData &&
                    <Img src={profileData}  width="30px" padding="8px" borderRadius="100px" pointer></Img>}
            </FlexCenterDiv>

        </Header>
    )
}

export default HeaderComponent