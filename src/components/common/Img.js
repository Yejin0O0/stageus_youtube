import styled from "styled-components"

export const Img = styled.img`
    
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
    padding: ${props => props.padding ? props.padding : 'auto'};
    margin: ${props => props.margin ? props.margin : 'auto'};
    border-radius: ${props => props.borderRadius ? props.borderRadius : 'auto'};
`

export const PointerImg = styled(Img)`
    cursor: pointer;
`
