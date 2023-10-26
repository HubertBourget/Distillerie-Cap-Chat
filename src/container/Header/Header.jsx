import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="En plein coeur de Cap-Chat, à la porte d'entrée de la Haute-Gaspésie" />
      <h1 className="app__header-h1">Des Spiritueux d'ici </h1>
      <p className="p__cormorant" style={{ margin: '2rem 0' }}>Fabriqués avec les plantes boréales de notre région </p>
      <a href="#contact"><button type="button" className="custom__button">Réservez votre visite</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.ImaGin5} alt="header_img" />
    </div>
  </div>
);

export default Header;