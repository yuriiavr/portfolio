import { Link } from "react-router-dom"
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const Webstudio = () => {
    return (
        <Container>
            <div className={css.cont}>
                <Link className={css.backbutton} to={'/'}>Back</Link>
                <div className={css.lunaTitle}>
                    <span style={{color: '#fff'}}>L</span><span style={{color: '#38b6ff'}}>U</span>
                    <br />
                    <span style={{color: '#fff'}}>N</span><span style={{color: '#ffde59'}}>A</span>
                </div>
                <a className={css.link} href="https://yuriiavr.github.io/luna" target="_blank">Visit Webstite  &#707;</a>
                <span className={css.attention}>Увага! Так як проект розміщений на безкоштовному хостингу, потрібно почекати 2-3хв для запуску бекенду.</span>
                <span className={css.sub}>LUNA (League Ukrainian News App) це проект, який я створював, щоб отримати більше досвіду в роботі з <span className={css.attention}>React</span> (реєстрація, логін, швидкий перехід з однієї сторінки на іншу) та <span className={css.attention}>Node.js</span> (додавання більшості контенту через базу даних MongoDB, реєстрація та логін).</span>
                <span className={css.sub}>Другорядною метою, було створення застосунку з перекладом всіх новин по грі League of Legends. Так як гра має дуже багато оновлень, офлайн івентів та кіберспортивних змагань, хотілось зробити інформацію доступною українській спільноті, рідною мовою.</span>
                <span className={css.sub}>Хоч проект і не досяг успіху, я вважаю що це був корисний досвід: робота з хостингом, позиції в пошуковій системі Google та багато іншого. Зараз я залишаю його на GitHub, як чатину свого портфоліо.</span>
                <img className={css.preview} src={require('../../../../../assets/images/luna_preview.png')} alt="giftstore preview" />
            </div>
        </Container>
    )
}

export default Webstudio