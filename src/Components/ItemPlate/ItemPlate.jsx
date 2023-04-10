import s from './ItemPlate.module.scss';


  
const ItemPlate=(props)=>{

    return (
      <div className={s.wrapper}>
          <div className={s.ItemPlate}>
            <img src={props.data.img} alt="Photo"/>
            <h2>{props.data.title}</h2>
            <p className={s.subtitle}>{props.data.subtitle}</p>
            <span>{props.data.price}</span>
          </div>
      </div>
    );
  }

export default ItemPlate;
