import { Link, useOutletContext } from "react-router-dom"
import React from 'react'
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const Luna = () => {
  const { currentLang } = useOutletContext();

  const content = {
    uk: {
      back: 'Назад',
      visitWebsite: 'Відвідати сайт',
      description1: 'LUNA (League Ukrainian News App) – це проект, розроблений мною для вдосконалення навичок роботи з React та Node.js. Основною метою було створення програми, яка підтримує реєстрацію користувачів, вхід та плавну навігацію між сторінками ',
      reactMark: '(React)',
      description2: ' при цьому більша частина контенту управляється через базу даних MongoDB та бекенд-функціонал, такий як автентифікація користувачів ',
      nodeJsMark: '(Node.js)',
      description3: '.',
      description4: 'Крім того, я прагнув створити платформу для перекладу всіх останніх новин про гру League of Legends українською мовою. Оскільки гра часто представляє оновлення, офлайн-події та кіберспортивні турніри, я хотів зробити цей обсяг інформації більш доступним для української спільноти рідною мовою.',
      description5: 'Хоча проект не досяг значного успіху, я вважаю його цінним досвідом навчання. Він навчив мене хостингу, оптимізації для позицій у пошукових системах Google та багатьох інших нюансів веб-розробки. Наразі проект доступний на GitHub як частина мого портфоліо.',
      featuresTitle: 'Особливості сайту:',
      feature1: '🌗 Світлі та темні теми: Ви можете перемикатися між світлим та темним режимами, і ваші налаштування зберігаються навіть після оновлення сторінки.',
      feature2: '📖 Управління контентом: Усі статті зберігаються в базі даних MongoDB. Хоча на сайті відсутня функція подачі статей для користувачів, код бекенду включає цю функціональність, демонструючи мою роботу з базами даних.',
      feature3: '📕 Історії чемпіонів: Ви також можете прочитати перекладені історії надихаючих чемпіонів у спеціальному розділі.',
      feature4: '🥇 Панель користувача для пошуку команди: League of Legends – це MOBA-гра, де гравці часто шукають товаришів по команді. Використовуючи свої особисті облікові записи, користувачі можуть реєструватися та розміщувати запити на пошук команди. Ці запити можуть бути видалені користувачами в будь-який час або автоматично очищені модераторами після певного періоду неактивності.',
    },
    en: {
      back: 'Back',
      visitWebsite: 'Visit Website',
      description1: 'LUNA (League Ukrainian News App) is a project I developed to enhance my skills with React and Node.js. The primary goal was to create an application that supports user registration, login, and smooth navigation between pages ',
      reactMark: '(React)',
      description2: ' while managing most of the content through a MongoDB database and backend functionalities like user authentication ',
      nodeJsMark: '(Node.js)',
      description3: '.',
      description4: 'Additionally, I aimed to provide a platform for translating all the latest news about the game League of Legends into Ukrainian. As the game frequently introduces updates, offline events, and esports tournaments, I wanted to make this wealth of information more accessible to the Ukrainian community in their native language.',
      description5: 'While the project didn’t achieve significant success, I consider it a valuable learning experience. It taught me about hosting, optimizing for Google search engine positions, and many other nuances of web development. Currently, the project is available on GitHub as part of my portfolio.',
      featuresTitle: 'Website Features:',
      feature1: '🌗 Light and Dark Themes: You can switch between light and dark modes, and your preferences are saved even after refreshing the page.',
      feature2: '📖 Content Management: All articles are stored in a MongoDB database. Although the website lacks an article submission feature for users, the backend code includes this functionality, showcasing my work with databases.',
      feature3: '📕 Champion\'s Stories: You can also read translated stories of inspiring champions in a dedicated section.',
      feature4: '🥇 User Dashboard for Team Recruitment: League of Legends is a MOBA game where players often look for teammates. Using their personal accounts, users can register and post requests for team recruitment. These requests can be removed by users at any time or automatically cleaned by moderators after being inactive for a while.',
    },
  };

  const text = content[currentLang];

  return (
    <Container>
      <div className={css.cont}>
        <Link className={css.backbutton} to={'/'}>{text.back}</Link>
        <div className={css.lunaTitle}>
          <span style={{color: '#fff'}}>L</span><span style={{color: '#38b6ff'}}>U</span>
          <br />
          <span style={{color: '#fff'}}>N</span><span style={{color: '#ffde59'}}>A</span>
        </div>
        <a className={css.visitWebsite} href="https://yuriiavr.github.io/luna" target="_blank" rel="noopener noreferrer">{text.visitWebsite}</a>
        <br />
        <span className={css.sub}>
          {text.description1}
          <span className={css.mark}>{text.reactMark}</span>
          {text.description2}
          <span className={css.mark}>{text.nodeJsMark}</span>
          {text.description3}
        </span>
        <br />
        <span className={css.sub}>{text.description4}</span>
        <br />
        <span className={css.sub}>{text.description5}</span>
        <img className={css.preview} src={require('../../../../../assets/images/luna_preview.png')} alt="luna preview" />
        <h2 style={{color: '#fff', fontSize: '32px'}}>{text.featuresTitle}</h2>
        <span className={css.sub}><b>{text.feature1.split(':')[0]}:</b> {text.feature1.split(':')[1]}</span>
        <span className={css.sub}><b>{text.feature2.split(':')[0]}:</b> {text.feature2.split(':')[1]}</span>
        <span className={css.sub}><b>{text.feature3.split(':')[0]}:</b> {text.feature3.split(':')[1]}</span>
        <span className={css.sub}><b>{text.feature4.split(':')[0]}:</b> {text.feature4.split(':')[1]}</span>
        <br />
        <img className={css.preview} src={require('../../../../../assets/images/findmates.png')} alt="find mates" />
      </div>
    </Container>
  )
}

export default Luna