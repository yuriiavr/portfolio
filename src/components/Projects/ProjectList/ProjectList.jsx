import { Link } from 'react-router-dom';
import css from './ProjectList.module.css';

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
      <li className={css.passwordManager}>
        <Link to={`/projects/passwordManager`}>
          <span className={css.title}>Pass.Manager</span>
          <div className={css.overlay}>
            <span className={css.overlayText}>React Native</span>
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

      <li className={css.myPlayer}>
        <Link to={`/projects/melomaniac`}>
          <span className={css.title}>Melomaniac</span>
          <div className={css.overlay}>
            <span className={css.overlayText}>JavaScript, Electron</span>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default ProjectList;
