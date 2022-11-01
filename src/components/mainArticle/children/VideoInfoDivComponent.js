import React from 'react'

const VideoInfoDivComponent = (props) => {
    const {ImgData} = props
    return (
        <div className="article-explain-div">
            <img src={ImgData.channelSrc} className="article-profile-div" alt="파일 읽기 오류. 지원하지 않는 파일 형식이나 파일이 손상되었습니다."/>
            <div>
                <h4 className="article-video-title">{ImgData.name}</h4>
                <p className="article-video-channel">{ImgData.channelName}</p>
                <div className="article-video-channel">
                    <span>{ImgData.hit}</span>
                    <span> &nbsp;·&nbsp; </span>
                    <span>{ImgData.uploadDate}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoInfoDivComponent