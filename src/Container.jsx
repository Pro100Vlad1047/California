import s from './Container.module.scss';
import Header from './Components/Header/Header.jsx';
import Slider from './Components/Slider/Slider.jsx';
import Devices from './Components/Devices/Devices.jsx';
import globalStyles from './Global.module.scss';


function Container() {
  return (
    <div className={s.Container}>
      <Header/>
      <Slider/>
      <Devices/>
    </div>
  );
}

export default Container;
