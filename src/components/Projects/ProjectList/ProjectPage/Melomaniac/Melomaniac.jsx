import { Link } from "react-router-dom"
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const Melomaniac = () => {
    return (
        <Container>
            <div className={css.cont}>
                <Link className={css.backbutton} to={'/'}>Back</Link>
                <h2 className={css.title}><span style={{color: '#9d00ff'}}>Melo</span>maniac</h2>
                <a className={css.visitWebsite} target="_blank" href="https://github.com/yuriiavr/desctop-player">Try it</a>
                <br />
                <span className={css.sub}>Whether you’re managing playlists or downloading tracks, Melomaniac has been crafted to elevate your music experience. Feel free to explore the hotkeys, customize your player, and provide feedback to help make Melomaniac even better.
<br />
<br />
Dive into the rhythm and let the music flow! 🎵</span>
                <br />
                <h2 style={{color: '#fff', fontSize: '32px'}}>Melomaniac: Your Personalized Desktop Music Experience</h2>
                <br />
                <span className={css.sub}>Welcome to Melomaniac, the desktop music player designed for music enthusiasts who crave simplicity, versatility, and customization. This application combines the essentials of music playback with the unique ability to download tracks directly from YouTube, making it the ultimate tool for managing and enjoying your favorite tunes.</span>
                <br />
                <h2 style={{color: '#fff', fontSize: '32px'}}>Discover Melomaniac's Features:</h2>
                <span className={css.sub}>🎼 Add your favorite tracks to playlists and enjoy seamless playback with a simple and intuitive interface.</span>
                <span className={css.sub}>🎶 Found the perfect song on YouTube? Download it directly into your library by pasting the video link—quick, easy, and hassle-free.</span>
                <span className={css.sub}>🎸 Organize your music your way. Create playlists, rename them to suit your mood, and delete them when it's time for a refresh.</span>
                <span className={css.sub}>🖥️ Make Melomaniac truly yours. Choose from a range of options to adjust the player's appearance and functionality, ensuring a personalized music experience.</span>
                <br />
                <h2 style={{color: '#fff', fontSize: '32px'}}>Why Choose Melomaniac?</h2>
                <span className={css.sub}>• Built using <span className={css.mark}>Electron</span>, making it a lightweight yet powerful desktop application.</span>
                <span className={css.sub}>• Incorporates <span className={css.mark}>Puppeteer</span> for seamless automation of YouTube downloads.</span>
                <span className={css.sub}>• User-friendly and highly customizable, catering to beginners and advanced users alike.</span>
                <img className={css.preview} src={require('../../../../../assets/images/melomaniac_prev.png')} alt="Melomaniac preview" />
                <img className={css.preview} src={require('../../../../../assets/images/melomaniac_prev2.png')} alt="Melomaniac preview 2" />
                <img className={css.preview} src={require('../../../../../assets/images/melomaniac_prev3.png')} alt="Melomaniac preview 3" />
            </div>
        </Container>
    )
}

export default Melomaniac