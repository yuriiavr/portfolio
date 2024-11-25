import { Link } from 'react-router-dom'
import css from './ProjectList.module.css'

const ProjectList = () => {

    return (
        <ul className={css.projectsCont}> 
            <li className={css.emailSender}>
                <Link to={`/projects/emailSender`}>
                    <span className={css.title}>Email Sender</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>React, Node.js</span>
                    </div>
                </Link>
            </li>
            <li className={css.luna}>
                <Link to={`/projects/luna`}>
                    <span className={css.title}>LUNA</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>React, Node.js</span>
                    </div>
                </Link>
            </li>
            <li className={css.cinema}>
                <Link to={`/projects/cinema`}>
                    <span className={css.title}>DeadLines</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>JavaScript, Electron</span>
                    </div>
                </Link>
            </li>
            <li className={css.myPlayer}>
                <Link to={`/projects/melomaniac`}>
                    <span className={css.title}>Melomaniac</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>JavaScript, Electron</span>
                    </div>
                </Link>
            </li>
            <li className={css.blog}>
                <Link to={`/projects/blog`}>
                    <span className={css.process}>In process</span>
                    <span className={css.title}>Voice <br /> Helper</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>Electron, Python</span>
                    </div>
                </Link>
            </li>
            
        </ul>
    )
}

export default ProjectList