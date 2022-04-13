import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ArticleCard, BookCard, Footer, HeroSection, Navbar } from './components';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/article" element={<ArticleCard />} />
          <Route path="/book" element={<BookCard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App