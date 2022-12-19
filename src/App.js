import React from 'react';

import { AboutUs, Carl, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Carl />
    <Intro />
    {/* <Laurels /> */}   {/* Section for later when the distillery get some awards */}
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
