import { React, useEffect } from 'react'

import ArticleComponent from '../../mainArticle/ArticleComponent'
import { FlexDiv } from '../../common/Div'

import { useDispatch, useSelector } from "react-redux"

import { mainImgData } from '../../../action/action'

import mainImgDataJson from '../../../data/VideoData.json'

const MainDivComponent = () => {

    const dispatch = useDispatch()

    const mainData = useSelector(state => state.main_img_data)

    useEffect(()=> {
        const imgData = mainImgDataJson.VideoImgInfo
        dispatch(mainImgData(imgData))
        

    },[mainData])


    return (
        // mainData가 null일 경우 안돌아가고, 다른 값이 있을 경우 돌아가게끔
        <FlexDiv flex flexWrap="wrap" width="fit-content" zIndex="0" margin="0 0 0 100px">
            { 
                mainData&&
                mainData.map(data => (
                    <ArticleComponent ImgData={data} key={data.id}/>
                ))
            }
            
        </FlexDiv>


    )
}

export default MainComponent