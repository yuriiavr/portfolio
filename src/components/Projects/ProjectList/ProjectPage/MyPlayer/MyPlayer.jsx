import { Link } from "react-router-dom"
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const MyPlayer = () => {
    return (
        <Container>
            <div className={css.cont}>
                <Link className={css.backbutton} to={'/'}>Back</Link>
                <h2 className={css.title}><span style={{color: '#9d00ff'}}>My</span>Player</h2>
                <a className={css.visitWebsite} target="_blank" href="https://yuriiavr.github.io/myplayer/">Visit Webstite</a>
                <br />
                <span className={css.sub}>MyPlayer це застосунок, який я створював аби розібратись з метаданими файлів та створити +- зручний для використання плеєр.</span>
                <br />
                <span className={css.sub}>Ви можете додавати музку до свого плейліста. Нажаль нормального варіанту для збереження плейлістів та музики після оновлення сторінки я не знайшов. Назва пісні, артист та картинка витягуються з метаданих і з'являються в плеєрі. Також можна промотати пісню, зменшити або збільшити гучність та переключати пісня в будь-який спосіб.</span>
                <br />
                <span className={css.sub}>Все зроблено на JS, а метадані витягуються за допомогою бібліотеки <span className={css.mark}>jsmediatags</span>. Мобільної версії застосунку нема, тому що нема мети використовувати його на інших пристроях.</span>
                <img className={css.preview} src={require('../../../../../assets/images/myPlayer_preview.png')} alt="my player preview" />
            </div>
        </Container>
    )
}

export default MyPlayer