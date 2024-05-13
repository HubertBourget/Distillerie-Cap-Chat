import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import frenchFlag from '../../assets/frFlag.png';
import englishFlag from '../../assets/enFlag.png';

const translations = {
  en: {
    home: "Home",
    distillery: "The Distillery",
    products: "Our Products",
    gallery: "Gallery",
    cocktails: "Cocktails",
    contact: "Contact",
    book: "Book",
  },
  fr: {
    home: "Accueil",
    distillery: "La distillerie",
    products: "Nos produits",
    gallery: "Galerie",
    cocktails: "Cocktails",
    contact: "Contact",
    book: "Réservez",
  }
};

const Navbar = ({ lang = 'fr' }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const toggleLanguage = () => {
    navigate(lang === 'fr' ? '/en' : '/');
  };

  const t = translations[lang];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logoDistillerieBlanc} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="app__footer-headtext"><a href="#home">{t.home}</a></li>
        <li className="app__footer-headtext"><a href="#about">{t.distillery}</a></li>
        <li className="app__footer-headtext"><a href="#menu">{t.products}</a></li>
        <li className="app__footer-headtext"><a href="#gallery">{t.gallery}</a></li>
        <li className="app__footer-headtext"><Link to="/yannickouellet">{t.cocktails}</Link></li>
        <li className="app__navbar-langtoggle">
          <button onClick={toggleLanguage}>
            <img src={lang === 'fr' ? englishFlag : frenchFlag} alt={lang === 'fr' ? 'English' : 'French'} />
          </button>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a className="app__footer-headtext" href="#contact">{t.contact}</a>
        <div />
        <a href="#contact" className="app__footer-headtext">{t.book}</a>
        
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>{t.home}</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>{t.distillery}</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>{t.products}</a></li>
              <li><a href="#gallery" onClick={() => setToggleMenu(false)}>{t.gallery}</a></li>
              <li><Link to="/yannickouellet" onClick={() => setToggleMenu(false)}>{t.cocktails}</Link></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>{t.contact}</a></li>
              <li><a href="#reservation" onClick={() => setToggleMenu(false)}>{t.book}</a></li>
              <li className="app__navbar-langtoggle">
                <button onClick={() => {
                  toggleLanguage();
                  setToggleMenu(false);
                }}>
                  <img src={lang === 'fr' ? englishFlag : frenchFlag} alt={lang === 'fr' ? 'English' : 'French'} />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
