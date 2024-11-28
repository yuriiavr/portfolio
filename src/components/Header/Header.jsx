import { Link, useLocation } from 'react-router-dom'
import Container from '../Container/Container'
import css from './Header.module.css'

const Header = () => {
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <Container>
            <div className={css.headerCont}>
                <div className={css.imgCont}>
                    <img className={css.image} src={require('../../assets/images/my_photo.jpg')} alt="Me" />
                    <span className={css.name}>Yurii Avramets</span>
                </div>
                <div className={css.linkCont}>
                    <Link to={'/'} style={{  borderBottom: isActive("/") ? "5px solid #ff5277" : "none" }} className={css.link}><span className={css.linkNumber}>01</span> home</Link>
                    <Link to={'/cv'} style={{  borderBottom: isActive("/cv") ? "5px solid #ff5277" : "none" }} className={css.link}><span className={css.linkNumber}>02</span> resume</Link>
                </div>
            </div>
        </Container>
    )
}

export default Header