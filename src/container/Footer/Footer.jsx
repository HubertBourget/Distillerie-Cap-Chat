import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = ({ lang = 'fr' }) => {
  // Translations
  const translations = {
    en: {
      contact: "Contact",
      address: "16 Notre-Dame East Street, Cap-Chat (Quebec) G0J 1G0",
      phone: "1-418-786-0202",
      terms: "Terms and Conditions",
      openingHours: "Opening Hours",
      winterHours: "Winter: From October 1st to June 15th",
      summerHours: "Summer: June 16th to September 30th",
      dailyHoursWinter: "Every day from 10:00 AM to 5:00 PM.",
      dailyHoursSummer: "Every day from 10:00 AM to 6:00 PM.",
      footerText: "Spirits crafted with the boreal plants of our region",
      copyright: "2023 Distillerie Cap-Chat. All rights reserved.",
    },
    fr: {
      contact: "Contact",
      address: "16, rue Notre-Dame Est, Cap-Chat (Québec) G0J 1G0",
      phone: "1-418-786-0202",
      terms: "Termes et Conditions",
      openingHours: "Heures d'ouverture",
      winterHours: "Hiver : Du 1er octobre au 15 juin",
      summerHours: "Été : 16 juin au 30 septembre",
      dailyHoursWinter: "Tous les jours de 10h00 à 17h00.",
      dailyHoursSummer: "Tous les jours de 10h00 à 18h00.",
      footerText: "Des Spiritueux fabriqués avec les plantes boréales de notre région",
      copyright: "2023 Distillerie Cap-Chat. Tous droits réservés.",
    }
  };

  const t = translations[lang];

  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <div className='app_footer-form-container'>
      </div>

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">{t.contact}</h1>
          <p className="p__opensans">{t.address}</p>
          <p className="p__opensans">{t.phone}</p>
          <h1 className="app__footer-headtext" style={{ marginTop: '35px' }}><Link to="/tos">{t.terms}</Link></h1>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.logoDistillerieBlanc} alt="footer_logo" />
          <p className="p__opensans">"{t.footerText}"</p>
          <img src={images.separator} className="separator__img" style={{ marginTop: 15 }} />
          <div className="app__footer-links_icons">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100087940557668"><FiFacebook /></a>
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">{t.openingHours}</h1>
          <p className="p__opensans">{t.winterHours}</p>
          <p className="p__opensans">{t.dailyHoursWinter}</p>
          <p className="p__opensans">{t.summerHours}</p>
          <p className="p__opensans">{t.dailyHoursSummer}</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">{t.copyright}</p>
      </div>

    </div>
  );
};

export default Footer;
