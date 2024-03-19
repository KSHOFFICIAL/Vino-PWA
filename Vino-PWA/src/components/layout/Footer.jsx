import LogoSVG from '@assets/icon/logo.svg?react';
import MessageSVG from '@assets/icon/message.svg?react';
// svg images
import Container from '@styles/layout/footer';
import theme from '../../styles/global/theme';

const Footer = () => {
    return (
        <Container>
            <div>
                <LogoSVG color = {theme.color.gray400}/>
                <div className='inputWrap'>
                    <div className='inputInner'>
                        <MessageSVG width={20} height={20}/>
                        <input placeholder='불편하거나 좋은 피드백이 있다면 보내주세요!'></input>
                    </div>
                    <button>보내기</button>
                </div>
                <div>
                    <div>
                        <span>TEAM VI.NO</span>
                        <span>고객센터 | 01041949853</span>
                        <span>메일 | pm.ooodd@gmail.com</span>
                    </div>
                    <div>
                        <span>이용약관</span>
                        <span>개인정보처리방침</span>
                        <span>문의하기</span>
                    </div>
                </div>
                <div>
                    <span>2024 Vino. All rights reserved.</span>
                </div>
            </div>
            
        </Container>
    );
}


export default Footer;
