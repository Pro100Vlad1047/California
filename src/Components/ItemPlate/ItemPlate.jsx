import s from './ItemPlate.module.scss';
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react';
  
const ItemPlate=(props)=>{

    const [toggle,setToggle]=useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
      nextPage();
    },[toggle]);

    const nextPage=()=>{
      if(toggle){
        navigate(`../details/${props.data.id}`, { state:props.data });
        setToggle(prev=>!prev)
      }
    }

    return (
      <div className={s.wrapper}>
          <div onClick={()=>{setToggle(prev=>!prev)}} className={s.ItemPlate}>
            <img src={props.data.img} alt="Photo"/>
            <h2>{props.data.title}</h2>
            <p className={s.subtitle}>{props.data.subtitle}</p>
            <span>{props.data.price}</span>
          </div>
      </div>
    );
  }

export default ItemPlate;
