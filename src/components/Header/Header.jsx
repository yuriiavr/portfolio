import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import css from './Header.module.css'

const Header = () => {
    return (
        <Container>
            <div className={css.headerCont}>
                <div className={css.imgCont}>
                    <img className={css.image} src={require('../../assets/images/my_photo.jpg')} alt="Me" />
                    <span className={css.name}>Yurii Avramets</span>
                </div>
                <div className={css.linkCont}>
                    <Link to={'/'} className={css.link}><span className={css.linkNumber}>01</span> home</Link>
                </div>
            </div>
        </Container>
    )
}

export default Header