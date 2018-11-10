import React from 'react'

import Header from "./Header";
import Map from "./Map";
import Footer from "./Footer";


const App = () => {
    return (
      <React.Fragment>
        <main role="main" className="container">
          <Header /> 
          <Map />          
        </main>
        <Footer />
      </React.Fragment>
    )
  }

export default App