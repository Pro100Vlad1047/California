import s from './DetailsView.module.scss';
import Bash from '../../images/bash.svg'

const DetailsView=(props)=>{
    console.log(props.data);
    return (
      <div className={s.wrapper}>
            <div className={s.DetailsView}>
                <h2>{props.data.title}</h2>
                <div className={s.details_main}>
                    <div className={s.details_photo}>
                        <img src={props.data.img} alt="photo" />
                        <p>{props.data.subtitle}</p>
                    </div>
                    <div className={s.details_price}>
                        <p>{props.data.price}</p>
                        <div className={s.details_buttons}>
                            <button>To the bash</button>
                            <button>Buy in credit</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }

export default DetailsView;
