import {useRef,useEffect,useState} from 'react';
import s from './Slider.module.scss';
import Iphones from '../../images/Iphones.svg'
import Arrow from '../../images/sliderArrow.svg'



const Slider=()=>{

  const [moveSlider,setMoveSlider]=useState(0);

  const getWidth={
    left:'-'+moveSlider+'%',
  }

  const moveList=(e)=>{
    clearTimeout(interval);
      if(e.target.alt=='right_arrow'){
        if(moveSlider<200){
          setMoveSlider(prev=>prev+100);
        }else{
          setMoveSlider(prev=>prev=0);
        }
      }else{
        if(moveSlider>0){
          setMoveSlider(prev=>prev-100);
        }else{
          setMoveSlider(prev=>prev=200);
        }
      }
  }

  const getPag=(e)=>{
    if(e.target.id=='pag_1' && moveSlider!=0){
      setMoveSlider(prev=>prev=0);
      clearTimeout(interval);
    }else if(e.target.id=='pag_2' && moveSlider!=100){
      setMoveSlider(prev=>prev=100);
      clearTimeout(interval);
    }else if(e.target.id=='pag_3' && moveSlider!=200){
      setMoveSlider(prev=>prev=200);
      clearTimeout(interval);
    }
  }

const interval= setTimeout(()=>{
  if(moveSlider<200){
      setMoveSlider(prev=>prev+100);
    }else{
      setMoveSlider(prev=>prev=0);
    }
    clearTimeout(interval);
},5000);


  return (
    <div className={s.Slider}>
      <div className={s.wrapper}>
          <img onClick={moveList} className={s.inside_left_arrow+' '+ s.inside_arrow} src={Arrow} alt="left_arrow"/>
          <img onClick={moveList} className={s.inside_right_arrow+' '+ s.inside_arrow} src={Arrow} alt="right_arrow"/>
          <div className={s.pagination}>
            <div onClick={getPag} id='pag_1' className={moveSlider==0?s.pag+' '+s.pag_active:s.pag }></div>
            <div onClick={getPag} id='pag_2' className={moveSlider==100?s.pag+' '+s.pag_active:s.pag }></div>
            <div onClick={getPag} id='pag_3' className={moveSlider==200?s.pag+' '+s.pag_active:s.pag }></div>
          </div>
        <div style={getWidth} className={s.inside}>
          <div className={s.iphones_block} >
            <div className={s.iphones_block_info}>
              <h2>The new phones are here take a look.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
               <input type="button" value='Explore'/>
            </div>
            <img src={Iphones} alt="photo"/>
          </div>
          <div className={s.iphones_block} >
            <div className={s.iphones_block_info}>
              <h2>The new phones are here take a look.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
               <input type="button" value='Explore'/>
            </div>
            <img src={Iphones} alt="photo"/>
          </div>
          <div className={s.iphones_block} >
            <div className={s.iphones_block_info}>
              <h2>The new phones are here take a look.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
               <input type="button" value='Explore'/>
            </div>
            <img src={Iphones} alt="photo"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
