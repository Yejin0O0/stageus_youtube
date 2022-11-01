import React from 'react'

import ArticleComponent from '../../mainArticle/ArticleComponent'

const MainDivComponent = () => {

    const ImgData = {
        "VideoImgInfo": [
            {
                "id": 1,
                "name": "태연(TAEYEON)의 킬링보이스!",
                "channelName": "딩고 뮤직 / dingo music",
                "videoSrc": "image/tayeon.jpg",
                "channelSrc": "image/orange.jpg",
                "hit": "1550만회",
                "uploadDate": "1개월 전"
            },
            {
                "id": 2,
                "name": "쉽게 질리는 음식 월드컵",
                "channelName": "침착맨",
                "videoSrc": "image/worldcup.jpg",
                "channelSrc": "image/chim.jpg",
                "hit": "436만회",
                "uploadDate": "1년 전"
            },
            {
                "id": 3,
                "name": "유재석이광수4",
                "channelName": "런닝맨",
                "videoSrc": "image/man.jpg",
                "channelSrc": "image/running.jpg",
                "hit": "1078만회",
                "uploadDate": "2년 전"
            },
            {
                "id": 4,
                "name": "[무한도전] ((무한상사)) 할말하않...💢 ",
                "channelName": "MBCentertainment",
                "videoSrc": "image/park.jpg",
                "channelSrc": "image/mbc.jpg",
                "hit": "943만회",
                "uploadDate": "9년 전"
            },
            {
                "id": 5,
                "name": "태연(TAEYEON)의 킬링보이스!",
                "channelName": "딩고 뮤직 / dingo music",
                "videoSrc": "image/tayeon.jpg",
                "channelSrc": "image/orange.jpg",
                "hit": "1550만회",
                "uploadDate": "1개월 전"
            },
            {
                "id": 6,
                "name": "쉽게 질리는 음식 월드컵",
                "channelName": "침착맨",
                "videoSrc": "image/worldcup.jpg",
                "channelSrc": "image/chim.jpg",
                "hit": "436만회",
                "uploadDate": "1년 전"
            },
            {
                "id": 7,
                "name": "유재석이광수4",
                "channelName": "런닝맨",
                "videoSrc": "image/man.jpg",
                "channelSrc": "image/running.jpg",
                "hit": "1078만회",
                "uploadDate": "2년 전"
            },
            {
                "id": 8,
                "name": "[무한도전] ((무한상사)) 할말하않...💢 ",
                "channelName": "MBCentertainment",
                "videoSrc": "image/park.jpg",
                "channelSrc": "image/mbc.jpg",
                "hit": "943만회",
                "uploadDate": "9년 전"
            },
            {
                "id": 9,
                "name": "태연(TAEYEON)의 킬링보이스!",
                "channelName": "딩고 뮤직 / dingo music",
                "videoSrc": "image/tayeon.jpg",
                "channelSrc": "image/orange.jpg",
                "hit": "1550만회",
                "uploadDate": "1개월 전"
            },
            {
                "id": 10,
                "name": "쉽게 질리는 음식 월드컵",
                "channelName": "침착맨",
                "videoSrc": "image/worldcup.jpg",
                "channelSrc": "image/chim.jpg",
                "hit": "436만회",
                "uploadDate": "1년 전"
            },
            {
                "id": 11,
                "name": "유재석이광수4",
                "channelName": "런닝맨",
                "videoSrc": "image/man.jpg",
                "channelSrc": "image/running.jpg",
                "hit": "1078만회",
                "uploadDate": "2년 전"
            },
            {
                "id": 12,
                "name": "[무한도전] ((무한상사)) 할말하않...💢 ",
                "channelName": "MBCentertainment",
                "videoSrc": "image/park.jpg",
                "channelSrc": "image/mbc.jpg",
                "hit": "943만회",
                "uploadDate": "9년 전"
            },
            {
                "id": 13,
                "name": "태연(TAEYEON)의 킬링보이스!",
                "channelName": "딩고 뮤직 / dingo music",
                "videoSrc": "image/tayeon.jpg",
                "channelSrc": "image/orange.jpg",
                "hit": "1550만회",
                "uploadDate": "1개월 전"
            },
            {
                "id": 14,
                "name": "쉽게 질리는 음식 월드컵",
                "channelName": "침착맨",
                "videoSrc": "image/worldcup.jpg",
                "channelSrc": "image/chim.jpg",
                "hit": "436만회",
                "uploadDate": "1년 전"
            },
            {
                "id": 15,
                "name": "유재석이광수4",
                "channelName": "런닝맨",
                "videoSrc": "image/man.jpg",
                "channelSrc": "image/running.jpg",
                "hit": "1078만회",
                "uploadDate": "2년 전"
            },
            {
                "id": 16,
                "name": "[무한도전] ((무한상사)) 할말하않...💢 ",
                "channelName": "MBCentertainment",
                "videoSrc": "image/park.jpg",
                "channelSrc": "image/mbc.jpg",
                "hit": "943만회",
                "uploadDate": "9년 전"
            },

        ],
    }

    return (

        <div id="main-div" className="main-div">
            {
                (ImgData.VideoImgInfo).map(data => (
                    <ArticleComponent ImgData={data} key={data.id}/>
                ))
            }
        </div>


    )
}

export default MainDivComponent