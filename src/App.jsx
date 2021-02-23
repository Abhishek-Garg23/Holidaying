import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import SearchRestaurant from './SearchRestaurant';
import Footer from './Footer';

const App = () => {
  return(
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <SearchRestaurant />
      <Footer />
    </>
  );
}

export default App;