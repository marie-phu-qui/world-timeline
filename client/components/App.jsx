import React from 'react'

import Header from "./Header";
import Footer from "./Footer";


const App = () => {
    return (
      <React.Fragment>
        <main role="main" className="container">
          <Header />           
        </main>
        <Footer />
      </React.Fragment>
    )
  }

export default App