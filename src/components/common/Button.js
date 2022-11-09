import styled from "styled-components"

export const Button = styled.button`
    
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
    padding: ${props => props.padding ? props.padding : 'auto'};
    margin: ${props => props.margin ? props.margin : 0};
    border-radius: ${props => props.borderRadius ? props.borderRadius : 'auto'};
    border: ${props => props.border ? props.border : 'inherit'};
    border-left: ${props => props.borderLeft ? props.borderLeft : 'inherit'};
    font-size: ${props => props.fontSize ? props.fontSize : 'medium'};
    color: ${props => props.color ? props.color : 'inherit'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'inherit'};

    cursor: ${props => props.pointer && `pointer`};
    
`
export const FlexButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
`

