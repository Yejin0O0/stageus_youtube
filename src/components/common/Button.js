import styled from "styled-components"

export const Button = styled.button`
    
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
    padding: ${props => props.padding ? props.padding : 'auto'};
    margin: ${props => props.margin ? props.margin : 0};
    border-radius: ${props => props.borderRadius ? props.borderRadius : 'auto'};
    border: ${props => props.border ? props.border : 'inherit'};    
    font-size: ${props => props.fontSize ? props.theme.fontSize[props.fontSize] : 'medium'};
    color: ${props => props.color ? props.theme.color[props.color] : 'inherit'};
    background-color: ${props => props.backgroundColor ? 
        props.theme.backgroundColor[props.backgroundColor] : 'inherit'};
`

export const PointerButton = styled(Button)`
    cursor: pointer;
`

export const CenterButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
`



