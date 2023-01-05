import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Notre emplacement</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Distillerie Cap-Chat se situe directement sur la route 132, face à la mer, tout près de la Halte municipale de Cap-Chat.</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Heures d'ouverture</p>
        <p className="p__opensans">Nous sommes ouvert tous les jours de 12h00 à 17h00</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Téléphone</p>
        <p className="p__opensans">1-418-786-0202</p>
      </div>
      {/* <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visitez nous</button> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;