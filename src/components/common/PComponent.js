import React from 'react';

const PComponent = (props) => {
    const {ImgData} = props
    return (
        //props로 className 받아오기
        <p className={ImgData.pClass}>{ImgData.name}</p>

    )
}

export default PComponent
