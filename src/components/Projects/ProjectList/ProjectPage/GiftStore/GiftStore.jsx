import { Link } from "react-router-dom"
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const GiftStore = () => {
    return (
        <Container>
             <div className={css.cont}>
                <Link className={css.backbutton} to={'/'}>Back</Link>
                <h2 className={css.title}><span style={{color:'orange'}}>Gift</span>Store</h2>
                <a className={css.link} href="https://yuriiavr.github.io/gift-store/">Visit Webstite  &#707;</a>
                <span className={css.sub}>Gift Store it's a landing page that advertises gift company. There you can buy gifts for various occasions.</span>
                <span className={css.sub}>I found that design in internet and made my own version of that landing page. This is simple website, I just used HTML and CSS.But in 'Hero section' you can see slider, I made it with JS and library <a className={css.textLink} href="https://kenwheeler.github.io/slick/">Slick Slider</a>.</span>
                <img className={css.preview} src={require('../../../../../assets/images/giftstore_preview.jpg')} alt="giftstore preview" />
            </div>
        </Container>
    )
}

export default GiftStore