import React from 'react';

import { AboutUs, Carl, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const Main = ({ lang }) => (
    <div>
        <Navbar lang={lang} />
        <Header lang={lang} />
        <AboutUs lang={lang} />
        <SpecialMenu lang={lang} />
        <Carl lang={lang} />
        <Intro lang={lang} />
        {/* <Laurels lang={lang} /> */}  {/* Section for later when the distillery get some awards */}
        <Gallery lang={lang} />
        <FindUs lang={lang} />
        <Footer lang={lang} />
    </div>
);

export default Main;
