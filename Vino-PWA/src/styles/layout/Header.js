import styled from "styled-components";
import theme from "../global/theme";

const HeaderBar = styled.div`
    width : 100%;
    height : 60px;
    background-color : ${theme.theme.color.gray500};

    display : flex;
    flex-direction : column;
    justify-content: center;

    & div.container {
        height : 23px;
        display : flex;
        justify-content : center;
        
        & div.wrapper {
            width : 320px;
            height : 100%;
            display : flex;
            justify-content : space-between;

            & div.imgWrap {
                display : flex;
                gap : 10px;
            }
            & div.userWrap {
                & button.loginBtn {
                    height : 23px;
                    background-color : ${theme.theme.color.green400};
                    color : ${theme.theme.color.gray500};
                    ${theme.theme.typography.Caption4};
                    border : none;
                    border-radius : 10px;
                }
                & div.iconWrap {
                    display : flex;
                    gap : 5px;
                }
            }
        }
    }
`;


export default HeaderBar;