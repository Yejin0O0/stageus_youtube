import React from 'react'
import styled from 'styled-components'

import { Img } from '../../../common/Img'
import { Div, PointerDiv, FlexDiv } from '../../../common/Div'
import P from '../../../common/P'
import H1 from '../../../common/H1'
import Span from '../../../common/Span'

import useToggle from '../../../../hooks/UseToggle'

// == styled ==
const Article = styled(PointerDiv) `
    word-wrap: break-word;
    flex-grow: 1;
    position: relative;

`


const ArticleComponent = (props) => {
    const {ImgData} = props
    const [value, setValue] = useToggle()

    React.useEffect(() => {
        document.getElementById(ImgData.id).addEventListener("click", () => {
            setValue()
        })

    }, [value])

    return (
        <Article id={ImgData.id} margin="0 5px" width={value ? "314px" : "340px"} zIndex={value ? "-100" : "100"}>
            <Img id={"article-" + ImgData.id} src={ImgData.videoSrc} width="100%"
                 alt="파일 읽기 오류. 지원하지 않는 파일 형식이거나 파일이 손상되었습니다."/>

            <FlexDiv width="100%" margin="10px">
                <Img src={ImgData.channelSrc} width="36px" height="36px" borderRadius="100px" 
                margin="0 12px 0 0" alt="파일 읽기 오류. 지원하지 않는 파일 형식이거나 파일이 손상되었습니다."/>
                <Div>
                    <H1 margin="0 0 5px 0">{ImgData.name}</H1>
                    <P margin="2px" fontSize="small">{ImgData.channelName}</P>
                    <Div margin="2px" fontSize="small">
                        <Span fontSize="small">{ImgData.hit}</Span>
                        <Span fontSize="small"> &nbsp;·&nbsp; </Span>
                        <Span fontSize="small">{ImgData.uploadDate}</Span>
                    </Div>
                </Div>
            </FlexDiv>
            
        </Article>
    )
}

export default ArticleComponent