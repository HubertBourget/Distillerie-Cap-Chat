import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <div className='app_footer-form-container'>
      <Newsletter /> 
    </div>
    

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact</h1>
        <p className="p__opensans">16, rue Notre-Dame Est, Cap-Chat (Québec) G0J 1G0</p>
        <p className="p__opensans">1-418-786-0202</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Des Spiritueux d'ici fabriqués avec les plantes boréales de notre région&quot;</p>
        <img src={images.separator} className="separator__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100087940557668"><FiFacebook /></a>
          {/* <FiTwitter />
          <FiInstagram /> */}
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Heures d'ouverture</h1>
        <p className="p__opensans">Tous les jours:</p>
        <p className="p__opensans">12:00 - 18:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Distillerie Cap-Chat. Tous droit réservés.</p>
      <p className="p__opensans"></p>
    </div>

  </div>
);

export default Footer;