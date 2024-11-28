import { Link } from "react-router-dom"
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const Luna = () => {
    return (
        <Container>
            <div className={css.cont}>
                <Link className={css.backbutton} to={'/'}>Back</Link>
                <div className={css.lunaTitle}>
                    <span style={{color: '#fff'}}>L</span><span style={{color: '#38b6ff'}}>U</span>
                    <br />
                    <span style={{color: '#fff'}}>N</span><span style={{color: '#ffde59'}}>A</span>
                </div>
                <a className={css.visitWebsite} href="https://yuriiavr.github.io/luna" target="_blank">Visit Webstite</a>
                <span className={css.sub}><span className={css.mark}>Important Note:</span> Since the project is hosted on a free platform, the backend may take 2–3 minutes to start. Thank you for your patience!</span>
                <br />
                <span className={css.sub}>LUNA (League Ukrainian News App) is a project I developed to enhance my skills with React and Node.js. The primary goal was to create an application that supports user registration, login, and smooth navigation between pages <span className={css.mark}>(React)</span> while managing most of the content through a MongoDB database and backend functionalities like user authentication <span className={css.mark}>(Node.js)</span>.</span>
                <br />
                <span className={css.sub}>Additionally, I aimed to provide a platform for translating all the latest news about the game League of Legends into Ukrainian. As the game frequently introduces updates, offline events, and esports tournaments, I wanted to make this wealth of information more accessible to the Ukrainian community in their native language.</span>
                <br />
                <span className={css.sub}>While the project didn’t achieve significant success, I consider it a valuable learning experience. It taught me about hosting, optimizing for Google search engine positions, and many other nuances of web development. Currently, the project is available on GitHub as part of my portfolio.</span>
                <img className={css.preview} src={require('../../../../../assets/images/luna_preview.png')} alt="luna preview" />
                <h2 style={{color: '#fff', fontSize: '32px'}}>Website Features:</h2>
                <span className={css.sub}>🌗 <b>Light and Dark Themes:</b> You can switch between light and dark modes, and your preferences are saved even after refreshing the page.</span>
                <span className={css.sub}>📖 <b>Content Management:</b> All articles are stored in a MongoDB database. Although the website lacks an article submission feature for users, the backend code includes this functionality, showcasing my work with databases.</span>
                <span className={css.sub}>📕 <b>Champion's Stories:</b> You can also read translated stories of inspiring champions in a dedicated section.</span>
                <span className={css.sub}>🥇 <b>User Dashboard for Team Recruitment:</b> League of Legends is a MOBA game where players often look for teammates. Using their personal accounts, users can register and post requests for team recruitment. These requests can be removed by users at any time or automatically cleaned by moderators after being inactive for a while.</span>
                <br />
                <img className={css.preview} src={require('../../../../../assets/images/findmates.png')} alt="find mates" />
            </div>
        </Container>
    )
}

export default Luna