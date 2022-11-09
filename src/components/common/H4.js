import styled from "styled-components"

const H4 = styled.h4`
    
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
    padding: ${props => props.padding ? props.padding : 'auto'};
    margin: ${props => props.margin ? props.margin : 0};
    font-size: ${props => props.fontSize ? props.fontSize : 'medium'};
    color: ${props => props.color ? props.color : 'inherit'};

`

export default H4