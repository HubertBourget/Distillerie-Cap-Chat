import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const specialMenuTranslations = {
  en: {
    menuTitle: "Spirits That Match You",
    menuSubTitle: "Our Spirits",
    ginVodka: "Gin & Vodka",
    taxesIncluded: "*Taxes included",
  },
  fr: {
    menuTitle: "Des alcools qui vous correspondent",
    menuSubTitle: "Nos Spiritueux",
    ginVodka: "Gin & Vodka",
    taxesIncluded: "*Taxes incluses",
  }
};

const SpecialMenu = ({ lang = 'fr' }) => {
  const { menuTitle, menuSubTitle, ginVodka, taxesIncluded } = specialMenuTranslations[lang];

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title={menuTitle} />
        <h1 className="headtext__cormorant-gold">{menuSubTitle}</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">{ginVodka}</p>
          <div className="app__specialMenu_menu_items">
            {data.produits.map((item, index) => (
              <MenuItem
                key={item.title.fr + index} // Use 'fr' key to ensure uniqueness
                title={item.title[lang]}
                price={item.price + '*'}
                tags={item.tags[lang]}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>
      </div>

      <div className="app__specialMenu-prices-include-taxes">
        {taxesIncluded}
      </div>
    </div>
  );
};

export default SpecialMenu;
