import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const globalStyle = createGlobalStyle`
    ${reset};
    @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
      }
    
      @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
        font-weight: 500;
        font-style: medium;
      }
    
      @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: semibold;
      }
    
      @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
        font-weight: 700;
        font-style: bold;
      }
    
      * {
        font-family: 'Pretendard', 'Spline Sans' !important;
        box-sizing: border-box;
      }
    
      #root {
        min-width: 640px;
        min-height : 360px;

        max-width : 812px;
        max-height : 375px;
      }
    `;

export default globalStyle;