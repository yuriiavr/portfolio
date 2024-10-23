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
            <li className={css.phonebook}>
                <Link to={`/projects/phonebook`}>
                    <span className={css.title}>Phone Book</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>React, Node.js</span>
                    </div>
                </Link>
            </li>
            <li className={css.paws}>
                <Link to={`/projects/paws`}>
                    <span className={css.process}>In process</span>
                    <span className={css.title}>Paws</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>React Native</span>
                    </div>
                </Link>
            </li>
            <li className={css.imageShare}>
                <Link to={`/projects/imageShare`}>
                    <span className={css.process}>In process</span>
                    <span className={css.title}>Sharing</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>React Native</span>
                    </div>
                </Link>
            </li>
            <li className={css.blog}>
                <Link to={`/projects/blog`}>
                    <span className={css.process}>In process</span>
                    <span className={css.title}>My Blog</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>React, Node.js</span>
                    </div>
                </Link>
            </li>
            <li className={css.cinema}>
                <Link to={`/projects/cinema`}>
                    <span className={css.title}>Cinema</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>JavaScript, Team Work</span>
                    </div>
                </Link>
            </li>
            <li className={css.myPlayer}>
                <Link to={`/projects/myPlayer`}>
                    <span className={css.title}>MyPlayer</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>HTML, CSS, JavaScript</span>
                    </div>
                </Link>
            </li>
        </ul>
    )
}

export default ProjectList