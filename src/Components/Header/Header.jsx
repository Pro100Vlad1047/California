import s from './Header.module.scss';
import {useState,useRef} from "react";
import Logo from '../../images/IMAGE.svg'
import Loop from '../../images/loop.svg'
import Bash from '../../images/bash.svg'
import Arrow from '../../images/arrow_down.svg';
import { Link } from 'react-router-dom';
import MenuBtn from '../../Components/UI/MenuBtn/MenuBtn.jsx'


function Header() {

  return (
    <div className={s.Header}>
        <div className={s.logo}>
          <Link to="/">
            <img src={Logo} alt="logo"/>
          </Link>
        </div>
        <div className={s.links}>
            <a href="#">all products</a>
            <a href="#">Solutions <img src={Arrow} alt="arrow"/></a>
            <a href="#">ABOUT</a>
            <a href="#">Support</a>
        </div>
        <div className={s.icons}>
          <a href=""><img src={Loop} alt="loop"/></a>
          <a href=""><img src={Bash} alt="bash"/></a>
        </div>      
          <MenuBtn/>       
    </div>
  );
}

export default Header;
