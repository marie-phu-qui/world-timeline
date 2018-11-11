import React from 'react'

import Header from "./Header";
import Timeline from './Timeline';
import Map from "./Map";
import Events from "./Events";
import Footer from "./Footer";


const App = () => {
    return (
      <React.Fragment>
        <main role="main" className="container">
          <Header /> 
          <Timeline />
          <Map />
          <Events />          
        </main>
        <Footer />
      </React.Fragment>
    )
  }

export default App