import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

// Translations object
const translations = {
  fr: {
    ingredientsTitle: "Nos ingrédients",
    ingredientsText: "Nos Gins sont élaborés avec des fleurs, plantes, épices et des herbes sauvages et naturelles, cueillies pour la plupart dans notre environnement immédiat en Gaspésie. Les pigments de couleur que l'on y retrouve sont tous naturels et d'origine végétale.",
    storyTitle: "Notre histoire",
    storyText: [
      "Notre passion pour la distillation et les spiritueux a pris vie au cours des années d'exploitation d'un vignoble, d'une cidrerie et d'une distillerie artisanale.",
      "DISTILLERIE CAP-CHAT est le dernier-né des projets de la famille Bourget. Nous avons choisi de relever ce nouveau défi, ici, en bordure de mer, entre l'estuaire maritime Saint-Laurent et le piémont des Chic-Chocs, à l'endroit précis qui donne une vue imprenable, unique à Cap-Chat, de la face nord du massif montagneux des Chic-Chocs.",
      "Inspirés par cette nature saisissante, nous comptons bien vous faire profiter des fruits de notre passion à travers une gamme élargie de spiritueux fins élaborés avec des ingrédients issus en grande partie de ce milieu.",
      "Puissent nos spiritueux vous offrir de délicieuses découvertes en compagnie de vos amis et de vos proches!"
    ],
  },
  en: {
    ingredientsTitle: "Our Ingredients",
    ingredientsText: "Our Gins are crafted with flowers, plants, spices, and wild, natural herbs, mostly harvested from our immediate surroundings in Gaspésie. The color pigments found in them are all natural and plant-based.",
    storyTitle: "Our Story",
    storyText: [
      "Our passion for distillation and spirits came to life over years of operating a vineyard, a cidery, and an artisanal distillery.",
      "DISTILLERIE CAP-CHAT is the latest project from the Bourget family. We chose to take on this new challenge here, by the sea, between the Saint Lawrence maritime estuary and the foothills of the Chic-Chocs, at the precise location that offers a breathtaking, unique view of Cap-Chat, of the north face of the Chic-Chocs mountain range.",
      "Inspired by this striking nature, we aim to share the fruits of our passion through an expanded range of fine spirits crafted with ingredients largely sourced from this environment.",
      "May our spirits offer you delightful discoveries in the company of your friends and loved ones!"
    ],
  }
};


const AboutUs = ({ lang = 'fr' }) => {
  // Default to French if lang not provided or translations for the provided lang do not exist
  const t = translations[lang] || translations.fr;

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">{t.ingredientsTitle}</h1>
          <img src={images.separator} alt="about_separator" className="separator__img" />
          <p className="p__opensans">{t.ingredientsText}</p>
        </div>

        <div className="app__aboutus-content_spice flex__center">
          <img src={images.DCC2} alt="about_spice" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">{t.storyTitle}</h1>
          <img src={images.separator} alt="about_separator" className="separator__img" />
          <p className="p__opensans">{t.storyText}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
