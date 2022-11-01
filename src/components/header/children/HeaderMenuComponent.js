import React from 'react';

import { useDispatch, useSelector } from "react-redux"

import {openNav} from "../../../action/action"


import ImgComponent from '../../common/ImgComponent'
// import { navState } from "../../../action/action"



const HeaderMenuComponent = (props) => {

    const {ImgData} = props
    const dispatch = useDispatch()
    let open_nav = useSelector(state => state.open_nav)

    console.log(open_nav)
  

    return (
        <div className="flex-center">
            {/* <div id="header-menu-div" className="flex-center" onClick={() => {dispatch(navState('true'))}}> */}


            <div id="header-menu-div" className='flex-center' onClick={() => {dispatch(openNav())}}>
                <ImgComponent ImgData={ImgData[0]}/>
            </div>
            <ImgComponent ImgData={ImgData[1]}/>
        </div>
    )
}

export default HeaderMenuComponent