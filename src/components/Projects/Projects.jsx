import Container from '../Container/Container'
import ProjectList from './ProjectList/ProjectList'
import css from './Projects.module.css'

const Projects = () => {
    return (
        <Container>
            <div>
                <span className={css.hello}>Hello, my name is Yura</span>
                <h1 className={css.title}>I'm Front-End Developer.</h1>
                <span className={css.subtitle}>I embarked on my journey as a front-end developer towards the end of 2021, and since then, it has been an incredible experience filled with continuous learning and growth. My current tech stack includes JavaScript, React, React Native, and Node.js, and I’ve recently expanded my horizons by diving into the fascinating worlds of Electron and Python. I’m truly passionate about creating — every project I work on is a labor of love, where I invest all my energy and creativity to bring something valuable and meaningful to life. This website serves as both my portfolio and a place to share my thoughts and experiences. Welcome to my portfolio, where I showcase my work and share my passion for development.   </span>
            </div>
            <div className={css.projectsCont}>
                <h2 className={css.sectionName}>My Projects</h2>
                <ProjectList />
            </div>
        </Container>
    )
}

export default Projects