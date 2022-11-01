import React from 'react'
import ImgComponent from '../../common/ImgComponent'



const HeaderSearchDivComponent = (props) => {
    const {ImgData} = props
    return (
        <div className="flex-center header-search-div">
            <input className="header-search-bar" placeholder="검색"/>
            <button className="header-search-btn">
                <ImgComponent ImgData={ImgData[2]}/>

            </button>
            <button className="header-mic-btn flex-center">
                <ImgComponent ImgData={ImgData[3]}/>
            </button>
        </div>
    )
}

export default HeaderSearchDivComponent