import styled from "styled-components"

const Input = styled.input`
    
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
    padding: ${props => props.padding ? props.padding : 'auto'};
    margin: ${props => props.margin ? props.margin : 0};
    border-radius: ${props => props.borderRadius ? props.borderRadius : 'auto'};
    border: ${props => props.border ? props.border : 'inherit'};
    font-size: ${props => props.fontSize ? props.fontSize : 'medium'};
    color: ${props => props.color ? props.color : 'inherit'};

    
    

`

export default Input