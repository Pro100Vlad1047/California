import s from './Details.module.scss';
import Slider from '../../Components/Slider/Slider.jsx';
import Devices from '../../Components/Devices/Devices.jsx';
import MostSelled from '../../Components/MostSelled/MostSelled.jsx';
import DetailsView from '../../Components/DetailsView/DetailsView.jsx';
import { useLocation } from "react-router-dom";
import {useEffect} from 'react';

function Details() {

  const {state}=useLocation();
  console.log(state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  return (
    <div className={s.Details}>
          <DetailsView data={state} />
          <MostSelled />
    </div>
  );
}

export default Details;
