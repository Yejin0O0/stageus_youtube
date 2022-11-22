import  React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux"

import {openNav, setProfileImg} from "../../action/action"

import { PointerImg, Img } from '../common/Img';
import { FlexDiv } from '../common/Div'
import Input from '../common/Input';
import { PointerButton, CenterButton} from '../common/Button';

import styled from "styled-components"

// == styled ==
const Header = styled(FlexDiv) `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.backgroundColor.white};
`
const SearchInput = styled(Input)`
    @media all and (min-width:480px) and (max-width:767px) {
        display: none;
    }

    @media all and (max-width:479px) {
        display: none;
    }
`

const SearchButton = styled(PointerButton)`
    border-left: none;
    

    @media all and (min-width:480px) and (max-width:767px) {
        display: none;
        background-color: ${props => props.theme.backgroundColor.white};
        border: none;
    }

    @media all and (max-width:479px) {
        display: none;
        background-color: ${props => props.theme.backgroundColor.white};
        border: none;
    }
`

const MicButton = styled(CenterButton)`
    cursor: pointer;
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
        <Header flexAttr="space-between=center" padding={0} height="70px" zIndex={1}>
            {/* menuBar & youtube Logo */}
            <FlexDiv flexAttr="center-center" height="inherit">
                <FlexDiv flexAttr="center-center" id="header-menu-div" width="85px" onClick={() => {dispatch(openNav())}}>
                    <PointerImg src="image/menu.png" width="20px"></PointerImg>
                </FlexDiv>
                <PointerImg src="image/youtube-logo.png" height="inherit"></PointerImg>
            </FlexDiv>
            
            {/* searchBar */}
            <FlexDiv flexAttr="center-center" width="50%">
                <SearchInput width="80%" height="40px" border="solid 1px #d6d6d6" 
                padding="0 6px" fontSize="medium" placeholder="검색"/>

                <SearchButton width="64px" height="42px" margin="0" borderRadius="0 2px 2px 0" 
                backgroundColor="grey" border="1px solid #d6d6d6">
                    <Img src="image/search.png" width="25px"></Img>

                </SearchButton>

                <MicButton width="40px" height="40px" margin="0 0 0 10px"
                border="none" borderRadius="50px" backgroundColor="lightGrey">
                    <Img src="image/mic.png" width="40px" height="40px"></Img>
                </MicButton>

            </FlexDiv>

            {/* private */}
            <FlexDiv flexAttr="center-center" >
                <PointerImg src="image/add-video.png" width="30px" padding="8px"></PointerImg>
                <PointerImg src="image/bell.png" width="30px" padding="8px"></PointerImg>

                {profileData &&
                    <PointerImg src={profileData}  width="30px" padding="8px" borderRadius="100px"></PointerImg>}
            </FlexDiv>

        </Header>
    )
}

export default HeaderComponent