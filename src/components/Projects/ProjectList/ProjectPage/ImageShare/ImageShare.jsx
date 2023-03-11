import { Link } from "react-router-dom"
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const imageShare = () => {
    return (
        <Container>
             <div className={css.cont}>
                <Link className={css.backbutton} to={'/'}>Back</Link>
                <h2 className={css.title}><span style={{color:'orange'}}>Image</span>Sharing</h2>
                <span className={css.sub}>This react-native app is my homework at <a className={css.textLink} href="https://www.goit.global/">GoIT</a>. It's my first mobile app, so there aren't a lot of pages and functions.</span>
                <span className={css.sub}>Main aim of this app is to share photo. There is registration at app. You can make photos, check photos of other users and write commets to aplications.</span>
                <span className={css.sub}>You can make photo in app and post it in your profile. Another users can see your photo, like them and leave commets. Also you can indicate location where you made photo. </span>
                <img style={{margin: '30px auto'}} width={500} src={require('../../../../../assets/images/imageShare_preview.jpg')} alt="giftstore preview" />
            </div>
        </Container>
    )
}

export default imageShare