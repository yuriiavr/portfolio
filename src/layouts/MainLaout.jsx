import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const MainLayout = () => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('lang') || 'uk';
  });

  useEffect(() => {
    localStorage.setItem('lang', currentLang);
  }, [currentLang]);

  return (
    <div className="App">
      <Header currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <Outlet context={{ currentLang }} />
      <Footer />
    </div>
  );
};

export default MainLayout;
