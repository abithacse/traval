import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Home from './component/Home';
import ImgCarousel from './component/ImgCarousel';
import Navbar from './component/Navbar';
import Destynation from './component/Destynation';
import Search from './component/Search';
import Selects from './component/Selects';
import Footer from './component/Footer';


ReactDom.render(
  <React.StrictMode>
     <Navbar />
    <Home />
    <Destynation />
    <Search />
    <Selects />
    <ImgCarousel />
    <Footer />
  </React.StrictMode>,
  document.getElementById( 'root')
)













