import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, HeroSection, Navbar } from './components';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App