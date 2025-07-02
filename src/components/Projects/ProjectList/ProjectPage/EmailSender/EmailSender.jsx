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
      visitWebsite: 'Відвідати сайт',
      description1: 'EmailSender – це додаток, який дає можливість відправляти розсилку поштою групі контактів. Ви можете обрати з якої поштової скриньки зробити розсилку, якій групі людей, та кількість листів. Також є декілька шаблонів листів, ви можете обрати який відправити.',
      description2: 'На жаль, з метою безпеки, не можу залишити готову версію застосунку, але залишу посилання на бекенд цього застосунку.',
      description3: 'Також ви можете переглянути статистику: скільки листів відправлено, скільки доставлено, а скільки було відкрито.',
    },
    en: {
      back: 'Back',
      titlePart1: 'Email',
      titlePart2: 'Sender',
      visitWebsite: 'Visit Website',
      description1: 'EmailSender is an application that allows you to send email newsletters to a group of contacts. You can choose which email account to send from, which group of people, and the number of emails. There are also several email templates you can choose to send.',
      description2: 'Unfortunately, for security reasons, I cannot provide a ready-to-use version of the application, but I will leave a link to its backend.',
      description3: 'You can also view statistics: how many emails were sent, how many were delivered, and how many were opened.',
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
        <a className={css.visitWebsite} href="https://yuriiavr.github.io/gift-store/" target="_blank" rel="noopener noreferrer">{text.visitWebsite}</a>
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