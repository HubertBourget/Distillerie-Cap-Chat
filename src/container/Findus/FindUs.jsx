import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = ({ lang = 'fr' }) => {
  // Translations
  const translations = {
    en: {
      contact: "Contact",
      locationHeading: "Our Location",
      locationDescription: "Distillerie Cap-Chat is located directly on Route 132, facing the sea, close to the Cap-Chat Municipal Stop.",
      openingHours: "Opening Hours",
      winterHours: "Winter: From October 1st to June 15th",
      summerHours: "Summer: June 16th to September 30th",
      dailyHoursWinter: "Every day from 10:00 AM to 5:00 PM.",
      dailyHoursSummer: "Every day from 10:00 AM to 6:00 PM.",
      phone: "Phone",
      phoneNumber: "1-418-786-0202",
    },
    fr: {
      contact: "Contact",
      locationHeading: "Notre emplacement",
      locationDescription: "Distillerie Cap-Chat se situe directement sur la route 132, face à la mer, tout près de la Halte municipale de Cap-Chat.",
      openingHours: "Heures d'ouverture",
      winterHours: "Hiver : Du 1er octobre au 15 juin",
      summerHours: "Été : 16 juin au 30 septembre",
      dailyHoursWinter: "Tous les jours de 10h00 à 17h00.",
      dailyHoursSummer: "Tous les jours de 10h00 à 18h00.",
      phone: "Téléphone",
      phoneNumber: "1-418-786-0202",
    }
  };

  const { contact, locationHeading, locationDescription, openingHours, winterHours, summerHours, dailyHoursWinter, dailyHoursSummer, phone, phoneNumber } = translations[lang];

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title={contact} />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>{locationHeading}</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">{locationDescription}</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>{openingHours}</p>
          <p className="p__opensans">{winterHours}</p>
          <p className="p__opensans">{dailyHoursWinter}</p>
          <p className="p__opensans">{summerHours}</p>
          <p className="p__opensans">{dailyHoursSummer}</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>{phone}</p>
          <p className="p__opensans">{phoneNumber}</p>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus_img" />
      </div>
    </div>
  );
};

export default FindUs;
