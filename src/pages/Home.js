import React, { Component } from 'react';
import ContactForm from '../component/contact/ContactForm';
import { Mission, Head, EventText, About, Sponsors, LanCarouselContainer } from '../components';

import "./Home.css";

function Home() {
  return (
    <div>
      <Head />
      <Mission />
      <EventText />
      <LanCarouselContainer />
      <About />
      <Sponsors />
      <ContactForm />
    </div>
  );
}

export default Home;