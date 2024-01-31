import React from 'react';
import { BsFacebook, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = ({ lang = 'fr' }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  // Translations
  const translations = {
    en: {
      joinUs: "Join Us on Facebook",
      galleryTitle: "Gallery",
      description: "We're thrilled to welcome you to the distillery! We look forward to sharing with you the world of distillation and the creation of our spirits as this exciting adventure unfolds!",
      discoverUs: "Discover Us",
    },
    fr: {
      joinUs: "Rejoignez-nous sur Facebook",
      galleryTitle: "Galerie",
      description: "Nous sommes très heureux de vous accueillir à la distillerie! Nous comptons partager avec vous l'univers de la distillation et de la création de nos spiritueux au fur et à mesure de l'évolution de cette passionnante aventure!",
      discoverUs: "Découvrez-nous",
    }
  };

  const { joinUs, galleryTitle, description, discoverUs } = translations[lang];

  return (
    <div className="app__gallery flex__center" id="gallery">
      <div className="app__gallery-content">
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100087940557668"><SubHeading title={joinUs} /></a>
        <h1 className="headtext__cormorant">{galleryTitle}</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>{description}</p>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100087940557668"><button type="button" className="custom__button">{discoverUs}</button></a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.EauxDeVie, images.Liqueures, images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06, images.gallery07].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsFacebook className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
