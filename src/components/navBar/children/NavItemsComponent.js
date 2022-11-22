import React from "react"
import styled from 'styled-components'

import { useDispatch, useSelector } from "react-redux"
import { changeTab } from "../../../action/action"

import { FlexDiv } from '../../common/Div';
import { Img } from '../../common/Img';
import P from '../../common/P'

const NavDiv = styled(FlexDiv) `
    cursor: pointer;
    &:hover{  
        background-color : ${(props) => props.theme.backgroundColor.hover};
    }
`

;

const NavItemsComponent = (props) => {

    const {ImgData} = props
    const dispatch = useDispatch()


    let is_nav_open = useSelector(state => state.is_nav_open)

    return (
        
        <React.Fragment>
            {is_nav_open ? 
                <NavDiv flexAttr="start=center=row" key={ImgData.id} 
                width='95%' height="fit-content" padding="10px 0 10px 10px"  onClick={() => {dispatch(changeTab(ImgData.render))}}>
                    <Img src={ImgData.src} width="30px" height="30px" margin="0 0 4px 0"></Img>
                    <P fontSize="small" margin="0 10px">{ImgData.name}</P>
                </NavDiv>
                :
                <NavDiv flexAttr="center=center=column" key={ImgData.id} 
                        width='100%' height="74px" onClick={() => {dispatch(changeTab(ImgData.render))}}>
                        <Img src={ImgData.src} width="30px" height="30px" margin="0 0 4px 0"></Img>
                        <P fontSize="small" margin="0 10px">{ImgData.name}</P>
                </NavDiv>
            }
        </React.Fragment>
    )
    
}

export default NavItemsComponent