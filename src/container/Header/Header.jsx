import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

// Translation function or object could be defined here or imported from a separate module
const translations = {
  fr: {
    subheading: "En plein coeur de Cap-Chat, à la porte d'entrée de la Haute-Gaspésie",
    heading: "Des Spiritueux d'ici",
    paragraph: "Fabriqués avec les plantes boréales de notre région",
    button: "Réservez votre visite",
  },
  en: {
    subheading: "In the heart of Cap-Chat, at the gateway to the Haute-Gaspésie",
    heading: "Local Spirits",
    paragraph: "Crafted with the boreal plants from our region",
    button: "Book Your Visit",
  },
};

// Accept lang prop
const Header = ({ lang = 'fr' }) => {
  // Select translations based on lang prop
  const { subheading, heading, paragraph, button } = translations[lang];

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={subheading} />
        <h1 className="app__header-h1">{heading}</h1>
        <p className="p__cormorant" style={{ margin: '2rem 0' }}>{paragraph}</p>
        <a href="#contact"><button type="button" className="custom__button">{button}</button></a>
      </div>

      <div className="app__wrapper_img">
        <img src={images.ImaGin5} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
