import React from 'react'
import styled from 'styled-components'

import Img from '../common/Img'
import { Div, FlexDiv } from '../common/Div'
import P from '../common/P'
import H4 from '../common/H4'
import Span from '../common/Span'

// == styled ==
const Article = styled.div `
    word-wrap: break-word;
    flex-grow: 1;
    margin: 0 5px;
    cursor: pointer;
    position: relative;
    width: 314px;

`


const ArticleComponent = (props) => {
    const {ImgData} = props
    // console.log(ImgData)
    const [value, setValue] = React.useState(true)

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
    React.useEffect(() => {
        document.getElementById(ImgData.id).addEventListener("click", (e) => {
            videoBooleanCheck(e.target)
        })

    }, [value])

    return (
        <Article id={ImgData.id}>
            <Img id={"article-" + ImgData.id} src={ImgData.videoSrc} width="100%"
                 alt="파일 읽기 오류. 지원하지 않는 파일 형식이거나 파일이 손상되었습니다."/>

            <FlexDiv flex width="100%" margin="10px">
                <Img src={ImgData.channelSrc} width="36px" height="36px" borderRadius="100px" 
                margin="0 12px 0 0" alt="파일 읽기 오류. 지원하지 않는 파일 형식이거나 파일이 손상되었습니다."/>
                <Div>
                    <H4 margin="0 0 12px 0">{ImgData.name}</H4>
                    <P margin="2px" fontSize="13px">{ImgData.channelName}</P>
                    <Div margin="2px" fontSize="13px">
                        <Span fontSize="13px">{ImgData.hit}</Span>
                        <Span fontSize="13px"> &nbsp;·&nbsp; </Span>
                        <Span fontSize="13px">{ImgData.uploadDate}</Span>
                    </Div>
                </Div>
            </FlexDiv>
            
        </Article>
    )
}

export default ArticleComponent