import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Des alcools qui vous correspondent" />
      <h1 className="headtext__cormorant-gold">Nos Spiritueux</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Gin & Vodka</p>
        <div className="app__specialMenu_menu_items">
          {data.produits.map((item, index) => (
            <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>
    </div>
  </div>
);

export default SpecialMenu;