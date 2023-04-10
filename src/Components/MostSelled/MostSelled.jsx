import s from './MostSelled.module.scss';
import ItemPlate from '../ItemPlate/ItemPlate.jsx'
import Macbook from '../../images/macbook_itemList.svg'
import Watches from '../../images/watches_itemList.svg'
import MacbookAir from '../../images/macbookAirM1_itemList.svg'
import Ipad from '../../images/iPad_itemList.svg'

const MostSelled=()=>{

    const data=[
      {
        id:1,
        img:Macbook,
        title:'MacBook Pro 13',
        subtitle:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
        price:'$ 1,200.00 USD'
      },
      {
        id:2,
        img:Watches,
        title:'Smart Galaxy Watch 3',
        subtitle:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price:'$ 199.00 USD'
      },
      {
        id:3,
        img:MacbookAir,
        title:'MacBook Air M1',
        subtitle:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
        price:'$ 1,009.00 USD'
      },
      {
        id:4,
        img:Ipad,
        title:'iPad ',
        subtitle:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
        price:'$ 610.00 USD'
      },
      {
        id:5,
        img:Ipad,
        title:'iPad ',
        subtitle:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
        price:'$ 810.00 USD'
      },
      {
        id:6,
        img:MacbookAir,
        title:'MacBook Air M1',
        subtitle:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
        price:'$ 2,999.00 USD'
      },
      {
        id:7,
        img:Watches,
        title:'Smart Galaxy Watch 3',
        subtitle:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price:'$ 199.00 USD'
      },
      {
        id:8,
        img:Watches,
        title:'Smart Galaxy Watch 3',
        subtitle:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price:'$ 239.00 USD'
      },
    ]

    return (
      <div className={s.wrapper}>
          <div className={s.MostSelled}>
            <h2>Save on our most selled items.</h2>
            <p className={s.subtitle}>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            <div className={s.best_items}>
              {data.map((e)=>{ return(<ItemPlate key={e.id} data={e}/>)})}
            </div>
          </div>
      </div>
    );
  }

export default MostSelled;
