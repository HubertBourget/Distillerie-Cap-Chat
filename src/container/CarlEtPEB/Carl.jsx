import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Carl.css';

// Assuming the lang prop is passed to this component
const Chef = ({ lang = 'fr' }) => {
  // Translations
  const translations = {
    en: {
      heading: "A Word from the Founders",
      mainHeading: "The Dream of a Distillery",
      firstQuote: "For us, creating fine spirits is defined by the pride of doing things well.",
      firstParagraph: "Combining passion, know-how, and innovation in distillation, our desire is to offer you distinctive alcohols made from natural and wild ingredients from our environment and crafted with pure water drawn from the foothills of the Chic-Chocs.",
      signatureText1: "President, General Manager & Founder of Distillerie Cap-Chat",
      secondParagraph: "I was introduced to distillation in 1999 when I had the chance to be guided by a Romanian master distiller who took me under his wing for 3 years. Since then, my fascination with spirits has always continued and even enhanced. It is an honor for me to place my expertise and experience in every product that I am given to distill for you. May our spirits bring you joy and provide wonderful moments with friends and family!",
      signatureText2: "Director of Operations of Distillerie Cap-Chat",
    },
    fr: {
      heading: "Un mot des fondateurs",
      mainHeading: "Le rêve d'une distillerie",
      firstQuote: "Pour nous, créer des spiritueux fins se décrit par la fierté de bien faire les choses.",
      firstParagraph: "Alliant passion, savoir-faire et innovation à la distillation, notre désir est de vous proposer des alcools distinctifs composés d'ingrédients naturels et sauvages issus de notre environnement et élaborés avec une eau pure puisée dans le piémont des Chic-Chocs.",
      signatureText1: "Président, directeur général & fondateur de la Distillerie Cap-Chat",
      secondParagraph: "J’ai été initié à la distillation en 1999 alors que j’ai eu la chance d’être guidé par un maître distillateur roumain qui m’a pris sous son aile durant 3 années. Depuis lors, ma fascination pour les spiritueux s’est toujours poursuivie et même bonifiée. C’est un honneur pour moi de placer mon savoir-faire et mon expérience dans chaque produit qu’il m’est donné de distiller pour vous. Puissent nos spiritueux faire votre joie et vous fournir de merveilleux moments entre amis et en famille!",
      signatureText2: "Directeur des opérations de la Distillerie Cap-Chat",
    }
  };

  // Select the correct translations based on lang prop
  const t = translations[lang];

  return (
    <>
      <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.carl} alt="chef_image" />
        </div>
        <div className="app__wrapper_info">
          <SubHeading title={t.heading} />
          <h1 className="headtext__cormorant">{t.mainHeading}</h1>

          <div className="app__chef-content">
            <div className="app__chef-content_quote">
              <img src={images.quote} alt="quote_image" />
              <p className="p__opensans">{t.firstQuote}</p>
            </div>
            <p className="p__opensans">{t.firstParagraph}</p>
          </div>

          <div className="app__chef-sign1">
            <p><br></br></p>
            <p className="p__opensans">{t.signatureText1}</p>
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
            <p className="p__opensans">{t.secondParagraph}</p>
          </div>

          <div className="app__chef-sign2">
            <p><br></br></p>
            <p className="p__opensans">{t.signatureText2}</p>
            <img src={images.signature2} alt="sign_image" className="app_cal-signature" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chef;
