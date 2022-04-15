import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ArticleCard, BookCard, Footer, HeroSection, Navbar, MyFilesCard } from './components';
import { useAuth } from './context/AuthContext';


const App = () => {


  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/public" element={<ArticleCard />} />
          <Route path="/private" element={<BookCard />} />
          <Route path="/myfiles" element={<MyFilesCard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App