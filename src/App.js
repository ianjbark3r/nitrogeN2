import React from 'react';
import Booking from './Layout/Booking'
import Footer from './Layout/Footer'
import Hero from './Layout/Hero'
import Info from './Layout/Info'
import Services from './Layout/Services'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Hero />
        <Info />
        <Services />
        <Booking />
        <Footer />
      </div>
    </div>
  );
}

export default App;
