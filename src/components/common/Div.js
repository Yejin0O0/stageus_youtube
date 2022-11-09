import styled from "styled-components"

export const Div = styled.div`
    
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
    padding: ${props => props.padding ? props.padding : 0};
    margin: ${props => props.margin ? props.margin : 0};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'inherit'};
    z-index: ${props => props.zIndex ? props.zIndex : 'auto'};
    font-size: ${props => props.fontSize ? props.fontSize : 'auto'}
    color: ${props => props.color ? props.color : `inherit`};
    border-radius: ${props => props.borderRadius ? props.borderRadius : 'auto'};
    cursor: ${props => props.pointer && 'pointer'}


`


//flex 함수로 바꾸고, 함수 결과 값에 따라 다르게 반환하게
export const FlexDiv = styled(Div)`
    display: flex;
`

export const FlexWrapDiv = styled(FlexDiv)`
    flex-wrap: wrap;
`

export const FlexCenterDiv = styled(FlexDiv)`
    
    justify-content: center;
    align-items: center;
`

export const FlexCenterColumnDiv = styled(FlexCenterDiv)`
    flex-direction: column;
`