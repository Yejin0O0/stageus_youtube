
import { createGlobalStyle } from 'styled-components';
 

// 프로젝트 시작 전 공통으로 적용해야할 코드
const GlobalStyles = createGlobalStyle`
  body {
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
    default: '#999999';
  }
`;
 
export default GlobalStyles;