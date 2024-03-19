import HeaderBar from '@styles/layout/header';
// styles

import MenuSVG from '@assets/icon/menu.svg?react';
import LogoSVG from '@assets/icon/logo.svg?react';
import SearChSVG from '@assets/icon/search.svg?react';
import AlarmSVG from '@assets/icon/alarm.svg?react';
// svg images

const Header = () => {
    const login = true;

    return (
        <HeaderBar>
            <div className='container'>
                <div className='wrapper'>
                    <div className='imgWrap'>
                        <MenuSVG/>
                        <LogoSVG color="white"/>
                    </div>
                    <div className='userWrap'>
                        {
                            login === false ? 
                            <button className='loginBtn'>로그인/회원가입</button> 
                            :
                            <div className='iconWrap'>
                                <SearChSVG style={{width : '23px', height : '23px'}}/>
                                <AlarmSVG style={{width : '23px', height : '23px'}}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </HeaderBar>
    );
}

export default Header;