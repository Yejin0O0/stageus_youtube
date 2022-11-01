import React from 'react'
import {useEffect, useState} from 'react'

import VideoInfoDivComponent from './children/VideoInfoDivComponent'

const ArticleComponent = (props) => {
    const {ImgData} = props

    const [value, setValue] = useState(true)

    const videoBooleanCheck = (props) => {
        // const target = props.id
        const target = props.id
        const targetNumber = target.split("-")[1]

        if (value === true) {
            setValue(false)
            document.getElementById(targetNumber).style.width = "340px"
            document.getElementById(targetNumber).style.position = "relative"
            document.getElementById(targetNumber).style.zIndex = "100"
        } else {
            setValue(true)
            document.getElementById(targetNumber).style.width = "314px"
            document.getElementById(targetNumber).style.position = "relative"
            document.getElementById(targetNumber).style.zIndex = "-100"
        }
    }
    useEffect(() => {
        document.getElementById(ImgData.id).addEventListener("click", (e) => {
            videoBooleanCheck(e.target)
        })

    }, [value])

    return (
        <article id={ImgData.id}>
            <img id={"article-" + ImgData.id} src={ImgData.videoSrc} className="article-thumbnail"
                 alt="파일 읽기 오류. 지원하지 않는 파일 형식이나 파일이 손상되었습니다."/>
            <VideoInfoDivComponent ImgData={ImgData}/>
        </article>
    )
}

export default ArticleComponent