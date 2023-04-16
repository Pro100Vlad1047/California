import s from './Footer.module.scss';
import Logo from '../../images/IMAGE.svg'


function Footer() {
  return (
    <div className={s.Footer}>
        <div className={s.footer_line}></div>
        <div className={s.block_links}>
          <img src={Logo} alt="photo"/>
          <p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
        </div>
        <div className={s.block_links}>
          <a href=''><h3>All products</h3></a>
          <a href="">Phones</a>
          <a href="">Watch</a>
          <a href="">Tablet</a>
          <a href="">Laptops</a>
        </div>
        <div className={s.block_links}>
          <a href=''><h3>Company</h3></a> 
          <a href="">About</a>
          <a href="">Support</a>
        </div>
        <div className={s.block_links}>
          <a href=''><h3>Support</h3></a> 
          <a href="">Style Guide</a>
          <a href="">Licensing</a>
          <a href="">Change Log</a>
          <a href="">Contact</a>
        </div>
        <div className={s.block_links}>
          <a href=''><h3>Follow Us</h3></a> 
          <a href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">LinkedIn</a>
          <a href="">Youtube</a>
        </div>
    </div>
  );
}

export default Footer;
