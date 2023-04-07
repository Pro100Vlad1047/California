import s from './Header.module.scss';
import Logo from '../../images/IMAGE.svg'
import Loop from '../../images/loop.svg'
import Bash from '../../images/bash.svg'
import Arrow from '../../images/arrow_down.svg'


function Header() {
  return (
    <div className={s.Header}>
        <div className={s.logo}>
          <img src={Logo} alt="logo"/>
        </div>
        <div className={s.links}>
            <a href="#">all products</a>
            <a href="#">Solutions <img src={Arrow} alt="arrow"/></a>
            <a href="#">ABOUT</a>
            <a href="#">Support</a>
        </div>
        <div className={s.icons}>
          <img src={Loop} alt="loop"/>
          <img src={Bash} alt="bash"/>
        </div>
    </div>
  );
}

export default Header;
