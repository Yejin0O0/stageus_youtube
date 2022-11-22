import styled from "styled-components"

const Span = styled.span`
    
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
    padding: ${props => props.padding ? props.padding : 'auto'};
    margin: ${props => props.margin ? props.margin : 0};
    font-size: ${props => props.fontSize ? props.theme.fontSize[props.fontSize] : 'medium'};
    color: ${props => props.color ? props.theme.color[props.color] : 'inherit'};

`

export default Span