import HeaderBar from '../../styles/layout/Header';
import MenuSvg from '../../assets/icon/menu.svg';
import LogoSvg from '../../assets/icon/logo.svg';
import SearChSVG from '../../assets/icon/search.svg';
import AlarmSVG from '../../assets/icon/alarm.svg';

const Header = () => {
    const login = true;
    return (
        <HeaderBar>
            <div className='container'>
                <div className='wrapper'>
                    <div className='imgWrap'>
                        <img src={MenuSvg}></img>
                        <img src={LogoSvg}></img>
                    </div>
                    <div className='userWrap'>
                        {
                            login === false ? 
                            <button className='loginBtn'>로그인/회원가입</button> 
                            :
                            <div className='iconWrap'>
                                <img src={SearChSVG} style={{width : '23px', height : '23px'}}></img>
                                <img src={AlarmSVG} style={{width : '23px', height : '23px'}}></img>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </HeaderBar>
    );
}

export default Header;