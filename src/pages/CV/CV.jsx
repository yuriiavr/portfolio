import { useOutletContext } from 'react-router-dom';
import Container from '../../components/Container/Container';
import css from './cv.module.css';
import React from 'react';

import pdfFileUK from '../../assets/Резюме - Юрій Аврамець.pdf';
import pdfFileEN from '../../assets/Resume - Yurii Avramets.pdf';

const CV = () => {
  const { currentLang } = useOutletContext();

  const content = {
    uk: {
      downloadPdf: 'Завантажити PDF',
      position: 'Full-Stack Розробник',
      location: 'Україна, Київ',
      github: 'GitHub',
      mob: 'Моб',
      mail: 'Пошта',
      skillsTitle: 'Навички',
      frontend: 'Frontend:',
      backend: 'Backend:',
      mobile: 'Мобільна розробка:',
      database: 'Бази даних:',
      tools: 'Інструменти:',
      softSkills: 'Soft Skills:',
      aboutMe: 'Я Full-Stack розробник з більш ніж 2-річним досвідом у створенні веб- та мобільних додатків. Спеціалізуюся на JavaScript, React, Node.js, Python та React Native. Маю досвід у розробці масштабованих архітектур, створенні API та забезпеченні безшовної інтеграції. Зосереджений на створенні високопродуктивних, зручних для користувача продуктів, які ефективно вирішують реальні завдання.',
      experienceTitle: 'Професійний досвід',
      fullStackDev: 'Full-Stack Розробник',
      ignisPeriod: 'Квітень 2023 - Листопад 2024',
      ignisCompany: 'Ignis - Київ, Україна',
      ignisDesc: 'Оптимізував операції для компанії, що займається медіа-баїнгом, зосередившись на зменшенні витрат, часу та зусиль на рутинні завдання. Моя роль включала автоматизацію різних внутрішніх процесів для підвищення ефективності. Ключові внески включали розробку автоматичної генерації лендингових сторінок на основі шаблонів, створення програми для email-кампаній, яка згодом надавала статистику переглядів, та автоматизацію моніторингу стану сервера. Ці рішення оптимізували робочі процеси та значно покращили продуктивність компанії.',
      frontendDev: 'Frontend Розробник',
      freelancePeriod: 'Жовтень 2022 - Квітень 2023',
      freelanceCompany: 'Фріланс',
      freelanceDesc: 'Під час перерви між роботами працював фрілансером, виконуючи різні проекти для вдосконалення своїх навичок та надання якісних рішень для клієнтів. Крім того, я присвячував час розробці особистих проектів, вивченню нових технологій та покращенню своїх знань у full-stack розробці.',
      contentManiaPeriod: 'Квітень 2022 - Жовтень 2022',
      contentManiaCompany: 'Content Mania - Київ, Україна',
      contentManiaDesc: 'Розробляв веб-сайти та лендингові сторінки з акцентом на "pixel-perfect" реалізацію, забезпечуючи точну відповідність наданим макетам дизайну. Приділяв пильну увагу деталям, щоб надавати візуально точні та високоадаптивні веб-рішення, які відповідали очікуванням як клієнтів, так і користувачів.',
      educationTitle: 'Освіта',
      neoversityDegree: 'Магістр',
      neoversitySpecialty: 'Магістр наук: Програмна інженерія',
      neoversityPeriod: 'Вересень 2024 - Наші дні',
      goitDegree: 'Full-stack Front-End Розробник',
      goitPeriod: 'Листопад 2021 - Вересень 2022',
      kneuDegree: 'Бакалавр',
      kneuSpecialty: 'Факультет обліку та податкового менеджменту',
      kneuPeriod: 'Вересень 2017 - Червень 2021',
      languagesTitle: 'Мови',
      ukrainianLang: 'Українська – Рідна (C2)',
      englishLang: 'Англійська – Вище середнього (B2)',
      pdfLink: pdfFileUK,
    },
    en: {
      downloadPdf: 'Download PDF',
      position: 'Full-Stack Developer',
      location: 'Ukraine, Kyiv',
      github: 'GitHub',
      mob: 'Mob',
      mail: 'Mail',
      skillsTitle: 'Skills',
      frontend: 'Frontend:',
      backend: 'Backend:',
      mobile: 'Mobile:',
      database: 'Database:',
      tools: 'Tools:',
      softSkills: 'Soft Skills:',
      aboutMe: 'I am a Full-Stack Developer with over 2 years of experience in building web and mobile applications. I specialize in JavaScript, React, Node.js, Python and React Native. Skilled in designing scalable architectures, developing APIs, and ensuring seamless integrations, I focus on delivering high-performing, user-friendly products that solve real-world challenges efficiently.',
      experienceTitle: 'Professional Experience',
      fullStackDev: 'Full-Stack Developer',
      ignisPeriod: 'April 2023 - November 2024',
      ignisCompany: 'Ignis - Kyiv, Ukraine',
      ignisDesc: 'Optimized operations for a media buying company by focusing on reducing costs, time, and effort for routine tasks. My role involved automating various internal processes to enhance efficiency. Key contributions included developing automated landing page generation based on templates, creating a program for email campaigns, which later provided view statistics, and automating server health monitoring. These solutions streamlined workflows and significantly improved the company\'s productivity.',
      frontendDev: 'Frontend Developer',
      freelancePeriod: 'October 2022 - April 2023',
      freelanceCompany: 'Freelance',
      freelanceDesc: 'During the break between jobs, I worked as a freelancer, taking on various projects to refine my skills and deliver quality solutions for clients. Additionally, I dedicated time to developing personal projects, exploring new technologies, and enhancing my expertise in full-stack development.',
      contentManiaPeriod: 'April 2022 - October 2022',
      contentManiaCompany: 'Content Mania - Kyiv, Ukraine',
      contentManiaDesc: 'Developed websites and landing pages with a focus on pixel-perfect implementation, ensuring precise alignment with provided design mockups. Paid close attention to detail to deliver visually accurate and highly responsive web solutions that met both client and user expectations.',
      educationTitle: 'Education',
      neoversityDegree: 'Master’s Degree',
      neoversitySpecialty: 'Master of Science: Software Engineering',
      neoversityPeriod: 'September 2024 - Present',
      goitDegree: 'Full-stack Front-End Developer',
      goitPeriod: 'November 2021 - September 2022',
      kneuDegree: 'Bachelor’s Degree',
      kneuSpecialty: 'Faculty of Accounting and Management Taxation',
      kneuPeriod: 'September 2017 - June 2021',
      languagesTitle: 'Languages',
      ukrainianLang: 'Ukrainian – Native (C2)',
      englishLang: 'English – Upper-intermediate (B2)',
      pdfLink: pdfFileEN,
    },
  };

  const text = content[currentLang];

  return (
    <Container>
      <div className={css.cvCont}>
        <div className={css.sidebar}>
          <img className={css.myPhoto} src={require('../../assets/images/my_photo.jpg')} alt="me" />
          <div>
            <a href={text.pdfLink} target='_blank' rel="noopener noreferrer" className={css.downloadBtn}>
            {text.downloadPdf} <img className={css.download} src={require('../../assets/images/download.png')} alt="download" />
          </a>
            <h1 className={css.name}>Yurii Avramets</h1>
            <h2 className={css.position}>{text.position}</h2>
            <span className={css.location}>📍 {text.location}</span>
            <ul className={css.contacts}>
              <li>{text.github}: <a className={css.link} href="https://github.com/yuriiavr">yuriiavr</a></li>
              <li>{text.mob}: <a className={css.link} href="tel:+380931848293">+380931848293</a></li>
              <li style={{whiteSpace: 'nowrap'}}>{text.mail}: <a className={css.link} href="mailto:yura.avramets@ukr.net">yura.avramets@ukr.net</a></li>
            </ul>
          </div>
          <div>
            <h2>{text.skillsTitle}</h2>
            <ul className={css.skills}>
              <li><b className={css.link}>{text.frontend}</b> HTML, CSS, JavaScript, TypeScript, React, Redux, Next.js</li>
              <li><b className={css.link}>{text.backend}</b> Node.js, Express.js, Python</li>
              <li><b className={css.link}>{text.mobile}</b> React Native, Expo, Android/iOS Deployment</li>
              <li><b className={css.link}>{text.database}</b> MongoDB, MySQL, Firebase</li>
              <li><b className={css.link}>{text.tools}</b> Git, Webpack</li>
              <li><b className={css.link}>{text.softSkills}</b> Problem-solving, teamwork, adaptability, communication</li>
            </ul>
          </div>
        </div>
        <div>
          <span className={css.aboutMe}>
            {text.aboutMe}
          </span>
          
          <h2 className={css.title}>{text.experienceTitle}</h2>

          <div className={css.workDesc}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
              <h3>{text.fullStackDev}</h3> <span>{text.ignisPeriod}</span>
            </div>
            <span><b>Ignis - {text.ignisCompany}</b></span>
            <span>{text.ignisDesc}</span>
          </div>

          <div className={css.workDesc}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
              <h3>{text.frontendDev}</h3><span>{text.freelancePeriod}</span>
            </div>
            <span><b>{text.freelanceCompany}</b></span>
            <span>{text.freelanceDesc}</span>
          </div>

          <div style={{borderBottom: 'none', paddingBottom: 0}} className={css.workDesc}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
              <h3>{text.frontendDev}</h3><span>{text.contentManiaPeriod}</span>
            </div>
            <span><b>Content Mania - {text.contentManiaCompany}</b></span>
            <span>{text.contentManiaDesc}</span>
          </div>

          <h2 className={css.title}>{text.educationTitle}</h2>

          <div className={css.workDesc}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
              <h3>Neoversity, Woolf</h3><span>{text.neoversityPeriod}</span>
            </div>
            <span><b>{text.neoversityDegree}</b></span>
            <span>{text.neoversitySpecialty}</span>
          </div>

          <div className={css.workDesc}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
              <h3>GoIT</h3><span>{text.goitPeriod}</span>
            </div>
            <span><b>{text.goitDegree}</b></span>
          </div>

          <div style={{borderBottom: 'none', paddingBottom: 0}} className={css.workDesc}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
              <h3>Kyiv National Economic University</h3><span>{text.kneuPeriod}</span>
            </div>
            <span><b>{text.kneuDegree}</b></span>
            <span>{text.kneuSpecialty}</span>
          </div>

          <h2 className={css.title}>{text.languagesTitle}</h2>

          <div style={{borderBottom: 'none', paddingBottom: 0}} className={css.workDesc}>
            <span style={{marginTop: 20}}><b>{text.ukrainianLang}</b></span>
            <span><b>{text.englishLang}</b></span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CV;