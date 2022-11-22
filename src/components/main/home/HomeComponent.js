import  React,{ useEffect } from 'react'
import styled from 'styled-components'

import ArticleComponent from './children/ArticleComponent'
import { FlexDiv } from '../../common/Div'

import { useDispatch, useSelector } from "react-redux"

import { setVideoData } from '../../../action/action'

import mainImgDataJson from '../../../data/VideoData.json'

const HomeDiv = styled(FlexDiv)`
    
    @media all and (min-width:480px) and (max-width:767px) {
        margin: 0
    }

    @media all and (max-width:479px) {
        margin: 0
    }

`

const HomeComponent = () => {

    const dispatch = useDispatch()

    const videoData = useSelector(state => state.set_video_data)

    useEffect(()=> {
        const imgData = mainImgDataJson.VideoImgInfo
        dispatch(setVideoData(imgData))
        

    },[videoData])


    return (
        // mainData가 null일 경우 안돌아가고, 다른 값이 있을 경우 돌아가게끔
        <HomeDiv flexAttr="===wrap" width="fit-content" zIndex="0" margin="0 0 0 100px" >
            { 
                videoData&&
                videoData.map(data => (
                    <ArticleComponent ImgData={data} key={data.id}/>
                ))
            }
            
        </HomeDiv>


    )
}

export default HomeComponent