import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import Container from '../Container/Container';
import css from './Header.module.css';

const Header = ({ currentLang, setCurrentLang }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLangChange = (lang) => {
    setCurrentLang(lang);
  };

  return (
    <Container>
      <div className={css.headerCont}>
        <div className={css.imgCont}>
          <img
            className={css.image}
            src={require('../../assets/images/my_photo.jpg')}
            alt="Me"
          />
          <span className={css.name}>Yurii Avramets</span>
        </div>
        <div className={css.linkCont}>
          <Link
            to={'/'}
            style={{ borderBottom: isActive('/') ? '5px solid #ff5277' : 'none' }}
            className={css.link}
          >
            <span className={css.linkNumber}>01</span>{' '}
            {currentLang === 'uk' ? 'home' : 'home'}
          </Link>
          <Link
            to={'/cv'}
            style={{ borderBottom: isActive('/cv') ? '5px solid #ff5277' : 'none' }}
            className={css.link}
          >
            <span className={css.linkNumber}>02</span>{' '}
            {currentLang === 'uk' ? 'resume' : 'resume'}
          </Link>
        </div>
        <div className={css.linkCont}>
          <button
            onClick={() => handleLangChange('uk')}
            style={{background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '16px', borderBottom: currentLang === 'uk' ? '5px solid #ff5277' : '5px solid transparent' }}
            className={css.link}
          >
            uk
          </button>
          <button
            onClick={() => handleLangChange('en')}
            style={{background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '16px', borderBottom: currentLang === 'en' ? '5px solid #ff5277' : '5px solid transparent' }}
            className={css.link}
          >
            en
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;