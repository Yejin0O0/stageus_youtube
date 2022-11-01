import React from 'react'
import ImgComponent from '../../common/ImgComponent'


const HeaderPrivateDivComponent = (props) => {
    const {ImgData} = props

    return (
        <div className="flex-center">
            <ImgComponent ImgData={ImgData[4]}/>
            <ImgComponent ImgData={ImgData[5]}/>
            <ImgComponent ImgData={ImgData[6]}/>
        </div>
    )
}

export default HeaderPrivateDivComponent