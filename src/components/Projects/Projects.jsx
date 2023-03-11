import Container from '../Container/Container'
import ProjectList from './ProjectList/ProjectList'
import css from './Projects.module.css'

const Projects = () => {
    return (
        <Container>
            <div>
                <span className={css.hello}>Hello, my name is Yura</span>
                <h1 className={css.title}>I'm Front-End Developer.</h1>
                <span className={css.subtitle}>Recently Im starting my way like a Front-End Developer. My tech skills stack now are JavaScript, React, React Native and Node.js. I stadied at <a className={css.textLink} href="https://www.goit.global/">GoIT</a> and made there some pet projects. Now I'm creating my own projects, you can see them below. So this website is something like my portfolio and blog. Welcome.</span>
            </div>
            <div className={css.projectsCont}>
                <h2 className={css.sectionName}>My Projects</h2>
                <ProjectList />
            </div>
        </Container>
    )
}

export default Projects