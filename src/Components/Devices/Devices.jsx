import s from './Devices.module.scss';
import Watches from '../../images/watches.svg';
import Macbook from '../../images/macbook.svg';
import Device_iphone from '../../images/iphone_devices.svg';
import Laptop from '../../images/laptop.svg';


const Devices=()=>{


    return (
      <div className={s.wrapper}>
          <div className={s.devices}>
            <h2>Shop our latest offers and categories</h2>
            <p className={s.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui,<br/> aliquam, t
                empor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={s.widgets}>
              
              <div className={s.left_widgets}>
                <div className={s.mac_widgets+' '+s.widgets_mini}>
                  <img src={Macbook} alt="photo"/>
                  <div className={s.mac_widgets_text}>
                    <h3>Laptops</h3>
                    <p>True Laptop<br/>Solution</p>
                  </div>
                </div>
                <div className={s.watch_widgets+' '+s.widgets_mini}>
                  <img src={Watches} alt="photo"/>
                  <div className={s.watch_widgets_text}>
                    <h3>Watch</h3>
                    <p>Not just<br/> stylish</p>
                  </div>
                </div>
              </div>

              <div className={s.center_widgets+' '+s.widgets_mini}>
                <img src={Device_iphone} alt="photo"/>
                  <div>
                    <h3>Phones</h3>
                    <p>Your day to day life</p>
                  </div>
              </div>

              <div className={s.right_widgets+' '+s.widgets_mini}>
                  <div>
                    <h3>Tablet</h3>
                    <p>Empower your work</p>
                  </div>
                  <img src={Laptop} alt="photo"/> 
              </div>

            </div>
          </div>
      </div>
    );
  }

export default Devices;
