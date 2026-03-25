import { Link, useOutletContext } from "react-router-dom"
import React from 'react'
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const EmailSender = () => {
  const { currentLang } = useOutletContext();

  const content = {
    uk: {
      back: 'Назад',
      titlePart1: 'Email',
      titlePart2: 'Sender',
      visitWebsite: 'GitHub',
      description1: 'EmailSender — це повнофункціональний Full-stack додаток для професійного керування розсилками. Проєкт побудований на сучасному стеку (React, Node.js, Redis), що дозволяє стабільно працювати з великими обсягами даних. Система забезпечує повний контроль над процесом: від створення візуального контенту листа до його доставки кінцевому отримувачу.',
      description2: 'Унікальною особливістю є розширена адмін-панель для керування SMTP-інфраструктурою. Ви можете самостійно додавати поштові сервери, встановлювати для кожного денні ліміти відправок та моніторити їхній стан у реальному часі (статуси Free, Busy, або автоматичне визначення Ban). Це дозволяє балансувати навантаження та уникати блокувань з боку поштових провайдерів.',
      description3: 'Технічна реалізація включає використання Redis для надійного керування чергами (Message Queuing). Це дає змогу реалізувати функцію відкладеної відправки (Schedule Send) та гарантує, що жоден лист не буде втрачено при високому навантаженні. Також інтегрована система аналітики, що відстежує не тільки факт доставки, а й Open Rate за допомогою трекінг-пікселів.',
      description4: 'На жаль, з міркувань безпеки та конфіденційності SMTP-даних, я не можу надати відкритий доступ до робочої версії сервісу, проте код бекенду та фронтенду повністю доступний у репозиторії для ознайомлення з архітектурою рішення.',
    },
    en: {
      back: 'Back',
      titlePart1: 'Email',
      titlePart2: 'Sender',
      visitWebsite: 'GitHub',
      description1: 'EmailSender is a comprehensive Full-stack application for professional newsletter management. Built on a modern tech stack (React, Node.js, Redis), it is designed to handle high-volume data loads with high stability. The system provides total control over the mailing process: from visual template creation to final delivery to the recipient.',
      description2: 'A standout feature is the advanced Admin Dashboard for SMTP infrastructure management. Users can manually add mail servers, set daily sending limits for each, and monitor their real-time status (Free, Busy, or automatic Ban detection). This ensures effective load balancing and helps prevent being blacklisted by email providers.',
      description3: 'The technical implementation leverages Redis for robust message queuing. This enables features like scheduled sending (Schedule Send) and guarantees that no email is lost during peak loads. The app also features an integrated analytics system that tracks not just delivery status, but also Open Rates via tracking pixels.',
      description4: 'Unfortunately, due to security reasons and the sensitivity of SMTP credentials, a live demo is not available. However, the complete backend and frontend code is available in the repository for architectural review.',
    },
  };

  const text = content[currentLang];

  return (
    <Container>
      <div className={css.cont}>
        <Link className={css.backbutton} to={'/'}>{text.back}</Link>
        <h2 className={css.title}>
          <span style={{ color: 'orange' }}>{text.titlePart1}</span>{text.titlePart2}
        </h2>
        <a className={css.visitWebsite} href="https://github.com/yuriiavr/mailer-front" target="_blank" rel="noopener noreferrer">{text.visitWebsite}</a>
        <br />
        <span className={css.sub}>{text.description1}</span>
        <br />
        <span className={css.sub}>{text.description2}</span>
        <img className={css.preview} src={require('../../../../../assets/images/emailSender_preview.png')} alt="email sender preview" />
        <span className={css.sub}>{text.description3}</span>
        <img className={css.preview} src={require('../../../../../assets/images/emailSender_preview2.png')} alt="email sender preview 2" />
      </div>
    </Container>
  )
}

export default EmailSender