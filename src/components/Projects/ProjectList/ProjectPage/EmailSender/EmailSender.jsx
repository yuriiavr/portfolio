import { Link } from "react-router-dom"
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const EmailSender = () => {
    return (
        <Container>
             <div className={css.cont}>
                <Link className={css.backbutton} to={'/'}>Back</Link>
                <h2 className={css.title}><span style={{color:'orange'}}>Email</span>Sender</h2>
                <a className={css.visitWebsite} href="https://yuriiavr.github.io/gift-store/">Visit Webstite</a>
                <br />
                <span className={css.sub}>EmailSender це додаток, який дає можливість відправляти розсилку поштою групі контактів. Ви можете обрати з якої поштової скриньки зробити розсилку, якій групі людей, та кількість листів. Також є декілька шаблонів листів, ви можете обрати який відправити.</span>
                <br />
                <span className={css.sub}>Нажаль, з метою безпеки, не можу залишити готову версію застосунку, але залишу посилання на бекенд цього застосунку.</span>
                <img className={css.preview} src={require('../../../../../assets/images/emailSender_preview.png')} alt="giftstore preview" />
                <span className={css.sub}>Також ви можете переглянути статистику, скільки листів відправлено, скільки доставлено, а скільки було відкрито.</span>
                <img className={css.preview} src={require('../../../../../assets/images/emailSender_preview2.png')} alt="giftstore preview" />
            </div>
        </Container>
    )
}

export default EmailSender