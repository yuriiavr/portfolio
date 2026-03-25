import { Link, useOutletContext } from "react-router-dom"
import React from 'react'
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const Foddies = () => {
  const { currentLang } = useOutletContext();

const content = {
  uk: {
    back: 'Назад',
    titlePart1: 'Fodd',
    titlePart2: 'ies',
    tryIt: 'Відвідати сайт',
    introText1: 'Foddies — це сучасна Full-stack платформа для обміну кулінарним досвідом. Від створення власних унікальних рецептів до взаємодії з глобальною спільнотою фуд-ентузіастів — усе розроблено для максимальної зручності та швидкодії.',
    introText2: 'Надихайтеся, готуйте та діліться смаком! 🥗',
    mainTitle: 'Соціальна Платформа для Спільного Приготування Страви',
    description1: 'Проект реалізований як високопродуктивний SPA на базі найновіших технологій екосистеми React. Основний фокус зроблений на типізації даних, автоматизації запитів до API та сучасному UX/UI. Це не просто книга рецептів, а повноцінна екосистема з авторизацією, системою підписок та динамічним контентом.',
    featuresTitle: 'Ключовий функціонал:',
    feature1: '👨‍🍳 Recipe Engine: потужний конструктор для створення та публікації власних рецептів з категоріями та часом приготування.',
    feature2: '🔍 Розумний пошук: просунута система фільтрації контенту для миттєвого знаходження ідеальної страви за вашими критеріями.',
    feature3: '👥 Соціальний шар: система фоловерів, що дозволяє стежити за оновленнями улюблених кулінарів та розвивати свій профіль.',
    feature4: '🔖 Обране: можливість формувати персональну бібліотеку найкращих рецептів для швидкого доступу.',
    whyChooseTitle: 'Технологічні переваги (Tech Stack):',
    whyChoose1: '• Frontend побудовано на ',
    electronMark: 'React 19 та React Router 7',
    whyChoose2: ', що забезпечує найвищу швидкість рендерингу та сучасну навігацію.',
    whyChoose3: '• Повна типізація завдяки TypeScript та автоматична генерація API-хуків через ',
    puppeteerMark: 'Orval + TanStack Query',
    whyChoose4: ', що гарантує стабільність роботи з даними.',
    whyChoose5: '• Сучасний дизайн реалізований на Tailwind CSS v4 та Shadcn UI для ідеальної адаптивності та доступності.',
  },
  en: {
    back: 'Back',
    titlePart1: 'Fodd',
    titlePart2: 'ies',
    tryIt: 'Website',
    introText1: 'Foddies is a modern Full-stack platform for sharing culinary expertise. From creating your own unique recipes to interacting with a global community of food enthusiasts — everything is designed for maximum convenience and performance.',
    introText2: 'Get inspired, cook, and share the taste! 🥗',
    mainTitle: 'A Social Recipe Sharing Ecosystem',
    description1: 'The project is implemented as a high-performance SPA using the latest technologies in the React ecosystem. The main focus is on data typing, API request automation, and modern UX/UI. It’s more than just a cookbook; it’s a full-featured social platform with authentication and a follower system.',
    featuresTitle: 'Key Features:',
    feature1: '👨‍🍳 Recipe Engine: a powerful builder for creating and publishing personal recipes with categories and precise timing.',
    feature2: '🔍 Smart Search: an advanced filtering system for instantly finding the perfect meal based on your criteria.',
    feature3: '👥 Social Layer: a follower system that lets you track updates from favorite chefs and grow your own profile.',
    feature4: '🔖 Favorites: curate a personal library of top-tier recipes for quick access anytime.',
    whyChooseTitle: 'Tech Stack & Architecture:',
    whyChoose1: '• Built with ',
    electronMark: 'React 19 & React Router 7',
    whyChoose2: ' for top-tier rendering speed and modern navigation patterns.',
    whyChoose3: '• Fully type-safe data fetching using ',
    puppeteerMark: 'Orval + TanStack Query',
    whyChoose4: ' with automated API client generation.',
    whyChoose5: '• Modern UI implemented with Tailwind CSS v4 and Shadcn UI components for ultimate responsiveness.',
  },
};

  const text = content[currentLang];

  return (
    <Container>
      <div className={css.cont}>
        <Link className={css.backbutton} to={'/'}>{text.back}</Link>
        <h2 className={css.title}>
          <span style={{ color: '#9d00ff' }}>{text.titlePart1}</span>{text.titlePart2}
        </h2>
        <a className={css.visitWebsite} target="_blank" href="https://foddies-frontend.onrender.com" rel="noopener noreferrer">{text.tryIt}</a>
        <br />
        <span className={css.sub}>
          {text.introText1}
          <br /><br />
          {text.introText2}
        </span>
        <br />
        <h2 style={{ color: '#fff', fontSize: '32px' }}>{text.mainTitle}</h2>
        <br />
        <span className={css.sub}>{text.description1}</span>
        <br />
        <h2 style={{ color: '#fff', fontSize: '32px' }}>{text.featuresTitle}</h2>
        <span className={css.sub}>{text.feature1}</span>
        <span className={css.sub}>{text.feature2}</span>
        <span className={css.sub}>{text.feature3}</span>
        <span className={css.sub}>{text.feature4}</span>
        <br />
        <h2 style={{ color: '#fff', fontSize: '32px' }}>{text.whyChooseTitle}</h2>
        <span className={css.sub}>
          {text.whyChoose1}
          <span className={css.mark}>{text.electronMark}</span>
          {text.whyChoose2}
        </span>
        <span className={css.sub}>
          {text.whyChoose3}
          <span className={css.mark}>{text.puppeteerMark}</span>
          {text.whyChoose4}
        </span>
        <span className={css.sub}>{text.whyChoose5}</span>
      </div>
    </Container>
  )
}

export default Foddies