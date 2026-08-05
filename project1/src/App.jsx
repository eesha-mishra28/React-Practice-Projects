import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Service from './components/Service.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact number="123-456-7890" />} />
        <Route path="/service" element={<Service/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}
export default App;