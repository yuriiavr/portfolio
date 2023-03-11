import { Link } from "react-router-dom"
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const IceCream = () => {
    return (
        <Container>
            <div className={css.cont}>
                <Link className={css.backbutton} to={'/'}>Back</Link>
                <h2 className={css.title}><span style={{color: '#ffb8ca'}}>Ice</span>Cream</h2>
                <a className={css.link} href="https://irinaskrytska.github.io/goit-project/">Visit Webstite  &#707;</a>
                <span className={css.sub}>Icecream it's a website that advertises ice cream cafe. We used HTML, CSS, JS and a lot of libraries when creating this website.</span>
                <span className={css.sub}>That was my first project that I did in team. We had Team Lead and Srum Master in our team. We did this project in a week. Every day we had meetings where we discussed our project's plan and what we have already done.</span>
                <span className={css.sub}>At the end of this project, I studied how to use Github for teamwork and how to send my commits for review. Our Scrum Master try to solve all organizational issues and Team Lead review all our code. That was a good team work experience.</span>
                <img className={css.preview} src={require('../../../../../assets/images/icecream_preview.jpg')} alt="giftstore preview" />
            </div>
        </Container>
    )
}

export default IceCream