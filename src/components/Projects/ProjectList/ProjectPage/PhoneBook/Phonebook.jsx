import { Link } from "react-router-dom"
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const Phonebook = () => {
    return (
        <Container>
            <div className={css.cont}>
                <Link className={css.backbutton} to={'/'}>Back</Link>
                <h2 className={css.title}><span style={{color: '#ff5277'}}>Phone</span>Book</h2>
                <a className={css.link} href="https://yuriiavr.github.io/phonebook/">Visit Webstite  &#707;</a>
                <span className={css.sub}>Phone Book its my first React App. When I started to learn React framework, I thought that its so difficult, but now IDK how to create projects without frameworks. Its really comfortable.</span>
                <span className={css.sub}>What about app, you can add, remove or edit your contacts. Website has registration system, you can sign up and create your own phone book. I used backend, which <a href="https://www.goit.global/" className={css.textLink}>GoIT</a> created for us.</span>
                <span className={css.sub}>Now Im know Node.js and creating my own backend for this app. You'll see it later.</span>
                <img className={css.preview} src={require('../../../../../assets/images/phonebook_preview.jpg')} alt="giftstore preview" />
            </div>
        </Container>
    )
}

export default Phonebook