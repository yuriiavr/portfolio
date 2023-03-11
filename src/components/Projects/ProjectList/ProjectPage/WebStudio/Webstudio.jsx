import { Link } from "react-router-dom"
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const Webstudio = () => {
    return (
        <Container>
            <div className={css.cont}>
                <Link className={css.backbutton} to={'/'}>Back</Link>
                <h2 className={css.title}><span className={css.titleColor}>Web</span>Studio</h2>
                <a className={css.link} href="https://yuriiavr.github.io/webstudio">Visit Webstite  &#707;</a>
                <span className={css.sub}>Webstudio it's a website that helps us learn more about this company. There you can view the company's benefits, services, staff and projects.</span>
                <span className={css.sub}>That was my first project that I did while studying at <a className={css.textLink} href="https://www.goit.global/">GoIT</a>. I used HTML, CSS, JS when created it.</span>
                <img className={css.preview} src={require('../../../../../assets/images/webstudio_preview.jpg')} alt="giftstore preview" />
            </div>
        </Container>
    )
}

export default Webstudio