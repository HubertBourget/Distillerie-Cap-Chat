import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Carl.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.carl} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Un mot du fondateur" />
      <h1 className="headtext__cormorant">Le rêve d'une distillerie</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Pour nous, créer des spiritueux fins se décrit par la fierté de bien faire les choses.</p>
        </div>
        <p className="p__opensans">Alliant passion, savoir faire et innovation à la distillation, notre désir est de vous proposer des alcools distinctifs composés d'ingrédients naturels et sauvages issus de notre environnement et élaborés avec à une eau pure puisée dans le piémont des Chic-Chocs.</p>
      </div>

      <div className="app__chef-sign">
        <p>Carl Bourget</p>
        <p className="p__opensans">Président, directeur général & fondateur de la Distillerie Cap-Chat</p>
        <img src={images.signature} alt="sign_image" className="app_cal-signature" />
      </div>
    </div>
  </div>
);

export default Chef;