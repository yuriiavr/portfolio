import { Link } from 'react-router-dom'
import css from './ProjectList.module.css'

const ProjectList = () => {

    return (
        <ul className={css.projectsCont}>
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
            <li className={css.phonebook}>
                <Link to={`/projects/phonebook`}>
                    <span className={css.title}>Phone Book</span>
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
            <li className={css.icecream}>
                <Link to={`/projects/icecream`}>
                    <span className={css.title}>IceCream</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>HTML, CSS, JavaScript, Team Work</span>
                    </div>
                </Link>
            </li>
            <li className={css.giftstore}>
                <Link to={`/projects/giftstore`}>
                    <span className={css.title}>Gift Store</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>HTML, CSS, Pixel Perfect, JS</span>
                    </div>
                </Link>
            </li>
            <li className={css.webstudio}>
                <Link to={`/projects/webstudio`}>
                    <span className={css.title}>Webstudio</span>
                    <div className={css.overlay}>
                        <span className={css.overlayText}>HTML, CSS, Pixel Perfect, JS</span>
                    </div>
                </Link>
            </li>
        </ul>
    )
}

export default ProjectList