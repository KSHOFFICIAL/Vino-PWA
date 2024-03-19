import styled from "styled-components";
import theme from "../global/theme";

const Container = styled.div`
    width : 100vw;
    height : 150px;
    background-color : ${theme.color.gray300};
    
    & div.inputWrap {
        width : 320px;
        height : 30px;
        background-color: ${theme.color.white};
        padding : 0 5px 0 5px;
        border : none;
        border-radius: 5px;
        display : flex;
        justify-content: space-between;
        align-items: center;
        & div.inputInner {
            width : 210px;
            height : 20px;
            background-color: ${theme.color.white};
            
            display : flex;
            gap : 10px;
        }
        & input {
            width : 240px;
            height : 20px;
            border : none;
            color : ${theme.color.gray500};
            ${theme.typography.Caption4};
        }
        & input::placeholder {
            color: ${theme.color.gray300};
        }
        & input:focus {
            outline: none;
        }
        & button {
            height : 20px;
            border : none;
            border-radius: 3px;
            color : ${theme.color.white};
            background-color: ${theme.color.gray500};
            ${theme.typography.Caption3};
        }
        
    }
    & span {
        ${theme.typography.Caption4};
        color: ${theme.color.gray400};
    }
`;

export default Container;
