import Container from '../Container/Container'
import css from './Footer.module.css'

const Footer = () => {
    return (
        <Container>
            <div className={css.footerCont}>
                <div className={css.copyCont}>
                    <span className={css.columnHeader}>© 2021–2023</span>
                    <a className={css.footerlink} href="https://yuriiavr.github.io/portfolio/">Yurii Avramets</a>
                </div>
                <div className={css.socialCont}>
                    <span className={css.columnHeader}>Contacts</span>
                    <a className={css.footerlink} href="tel:+380931848293">+380931848293</a>
                </div>
                <div className={css.iconCont}>
                    <a className={css.iconlink} href="https://yuriiavr.github.io/portfolio/"><img src={require('../../assets/images/tg.png')} width='30' alt="" /></a>
                    <a className={css.iconlink} href="https://github.com/yuriiavr"><img src={require('../../assets/images/git.png')} width='30' alt="" /></a>
                </div>
            </div>
        </Container>
    )
}

export default Footer