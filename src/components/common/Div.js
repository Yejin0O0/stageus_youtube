import styled from "styled-components"


// props 줄이는 방법 고안하기 (컴포넌트 이름으로 기본값 지정)
// color, font-color도 함수로 하는 방법이 좋음 -> props 로 #~ / ~px 받지 말자

export const Div = styled.div`
    
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
    padding: ${props => props.padding ? props.padding : 0};
    margin: ${props => props.margin ? props.margin : 0};
    // background-color: ${props => props.backgroundColor ? props.backgroundColor : 'inherit'};
    z-index: ${props => props.zIndex ? props.zIndex : 'auto'};
    font-size: ${props => props.fontSize ? props.fontSize : 'auto'};
    // color: ${props => props.color ? props.color : `inherit`};
    border-radius: ${props => props.borderRadius ? props.borderRadius : 'auto'};
`

export const PointerDiv = styled(Div) `
    cursor: pointer;
   
`

const flexAttrSet = (props) => {
    const attr = props
    if (attr !== undefined) {
        const fAttr = attr.split('=')
        return `
            justify-content: ${fAttr[0]};
            align-items: ${fAttr[1]};
            flex-direction: ${fAttr[2]};
            flex-wrap: ${fAttr[3]};
            `
    }
}

//flex 함수로 바꾸고, 함수 결과 값에 따라 다르게 반환하게
// flex 함수 리턴 값을 받아오기 ( return은 css 코드 통으로 )
export const FlexDiv = styled(Div)`
    display: flex;
    ${props => flexAttrSet(props.flexAttr)}    
`
