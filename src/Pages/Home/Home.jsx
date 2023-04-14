import s from './Home.module.scss'
import Slider from '../../Components/Slider/Slider.jsx';
import Devices from '../../Components/Devices/Devices.jsx';
import MostSelled from '../../Components/MostSelled/MostSelled.jsx';
import {useEffect} from 'react';


function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className={s.Home}>
      <Slider/>
      <Devices/>
      <MostSelled/>
    </div>
  );
}

export default Home;
