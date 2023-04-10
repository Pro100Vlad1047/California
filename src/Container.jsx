import s from './Container.module.scss';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Slider from './Components/Slider/Slider.jsx';
import Devices from './Components/Devices/Devices.jsx';
import MostSelled from './Components/MostSelled/MostSelled.jsx';
import globalStyles from './Global.module.scss';


function Container() {
  return (
    <div className={s.Container}>
      <Header/>
      <Slider/>
      <Devices/>
      <MostSelled/>
      <Footer/>
    </div>
  );
}

export default Container;
