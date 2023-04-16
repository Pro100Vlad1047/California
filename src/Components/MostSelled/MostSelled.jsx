import s from './MostSelled.module.scss';
import ItemPlate from '../ItemPlate/ItemPlate.jsx'
import Macbook from '../../images/macbook_itemList.svg'
import Watches from '../../images/watches_itemList.svg'
import MacbookAir from '../../images/macbookAirM1_itemList.svg'
import Ipad from '../../images/iPad_itemList.svg'
import {data} from '../Databases/data.jsx'
import { Link } from "react-router-dom";

const MostSelled=()=>{

    return (
      <div className={s.wrapper}>
          <div className={s.MostSelled}>
            <h2>Save on our most selled items.</h2>
            <p className={s.subtitle}>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            <div className={s.best_items}>
              {data.map((e)=>{ 
                  return(
                    <ItemPlate key={e.id} data={e}/>
                  )})}
            </div>
          </div>
      </div>
    );
  }

export default MostSelled;
