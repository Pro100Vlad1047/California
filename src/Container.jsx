import s from './Container.module.scss';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Slider from './Components/Slider/Slider.jsx';
import Devices from './Components/Devices/Devices.jsx';
import MostSelled from './Components/MostSelled/MostSelled.jsx';
import globalStyles from './Global.module.scss';
import Home from './Pages/Home/Home.jsx';
import Router from './Components/Router/Router.jsx';
import {useEffect} from 'react';


function Container() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Router]);


  return (
    <div className={s.Container}>
      <Header/>
        <Router/>
      <Footer/>
    </div>
  );
}

export default Container;
