import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Nos ingrédients</h1>
        <img src={images.separator} alt="about_separator" className="separator__img" />
        <p className="p__opensans">Nos Gins sont élaborés avec des fleurs, plantes, épices et des herbes sauvages et naturelles, cueillies pour la plupart dans notre environnement immédiat en Gaspésie. Les pigments de couleur que l'on y retrouve sont tous naturels et d'origine végétale.</p>
      </div>

      <div className="app__aboutus-content_spice flex__center">
        <img src={images.DCC2} alt="about_spice" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Notre histoire</h1>
        <img src={images.separator} alt="about_separator" className="separator__img" />
        <p className="p__opensans">Notre passion pour la distillation et les spiritueux a pris vie au cours des années d'exploitation d'un vignoble, d'une cidrerie et d'une distillerie artisanale.</p>
<p className="p__opensans">DISTILLERIE CAP-CHAT est le dernier-né des projets de la famille Bourget. Nous avons choisi de relever ce nouveau défi, ici, en bordure de mer, entre l'estuaire maritime Saint-Laurent et le piémont des Chic-Chocs, à l'endroit précis qui donne une vue imprenable, unique à Cap-Chat, de la face nord du massif montagneux des Chic-Chocs.</p>
<p className="p__opensans">Inspirés par cette nature saisissante, nous comptons bien vous faire profiter des fruits de notre passion à travers une gamme élargie de spiritueux fins élaborés avec des ingrédients issus en grande partie de ce milieu.</p>
<p className="p__opensans">Puissent nos spiritueux vous offrir de délicieuses découvertes en compagnie de vos amis et de vos proches</p>
</div>
    </div>
  </div>
);

export default AboutUs;