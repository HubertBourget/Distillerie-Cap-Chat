import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Carl.css';

const Chef = () => (
  <>
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.carl} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Un mot des fondateurs" />
      <h1 className="headtext__cormorant">Le rêve d'une distillerie</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Pour nous, créer des spiritueux fins se décrit par la fierté de bien faire les choses.</p>
        </div>
        <p className="p__opensans">Alliant passion, savoir-faire et innovation à la distillation, notre désir est de vous proposer des alcools distinctifs composés d'ingrédients naturels et sauvages issus de notre environnement et élaborés avec une eau pure puisée dans le piémont des Chic-Chocs.</p>
      </div>

      <div className="app__chef-sign1">
        <p><br></br></p>
        <p className="p__opensans">Président, directeur général & fondateur de la Distillerie Cap-Chat</p>
        <img src={images.signature} alt="sign_image" className="app_cal-signature" />
      </div>
    </div>
  </div>
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.PEB} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
        </div>
        <p className="p__opensans">J’ai été initié à la distillation en 1999 alors que j’ai eu la chance d’être guidé par un maître distillateur roumain qui m’a pris sous son aile durant 3 années. Depuis lors, ma fascination pour les spiritueux s’est toujours poursuivie et même bonifiée. C’est un honneur pour moi de placer mon savoir-faire et mon expérience dans chaque produit qu’il m’est donné de distiller pour vous. Puissent nos spiritueux faire votre joie et vous fournir de merveilleux moments entre amis et en famille! Pierre-Étienne Bourget</p>
      </div>

      <div className="app__chef-sign2">
        <p><br></br></p>
        <p className="p__opensans">Directeur des opérations de la Distillerie Cap-Chat</p>
        <img src={images.signature2} alt="sign_image" className="app_cal-signature" />
      </div>
    </div>
  </div>
  </>
);

export default Chef;