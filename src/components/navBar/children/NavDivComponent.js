import React from "react"

import { useDispatch } from "react-redux"
import { renderMain } from "../../../action/action"

import ImgComponent from '../../common/ImgComponent';
import PComponent from '../../common/PComponent';

const NavDivComponent = (props) => {

    const {ImgData} = props
    const dispatch = useDispatch()

    return (
        <div className="nav-div flex-center" id={ImgData.id} onClick={() => {
            dispatch(renderMain(ImgData.render))
        }}>
            <ImgComponent ImgData={ImgData}/>
            <PComponent ImgData={ImgData}/>
        </div>
    )
    
}

export default NavDivComponent