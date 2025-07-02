import { Link, useOutletContext } from "react-router-dom"
import React from 'react'
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const Melomaniac = () => {
  const { currentLang } = useOutletContext();

  const content = {
    uk: {
      back: 'Назад',
      titlePart1: 'Melo',
      titlePart2: 'maniac',
      tryIt: 'Спробувати',
      introText1: 'Незалежно від того, керуєте ви плейлистами чи завантажуєте треки, Melomaniac створений, щоб покращити ваш музичний досвід. Не соромтеся вивчати гарячі клавіші, налаштовувати свій плеєр та надавати відгуки, щоб зробити Melomaniac ще кращим.',
      introText2: 'Пориньте в ритм і дозвольте музиці текти! 🎵',
      mainTitle: 'Melomaniac: Ваш Персоналізований Настільний Музичний Досвід',
      description1: 'Ласкаво просимо до Melomaniac, настільного музичного плеєра, розробленого для меломанів, які прагнуть простоти, універсальності та налаштування. Ця програма поєднує основи відтворення музики з унікальною можливістю завантажувати треки безпосередньо з YouTube, що робить її ідеальним інструментом для керування та насолоди улюбленими мелодіями.',
      featuresTitle: 'Відкрийте для себе можливості Melomaniac:',
      feature1: '🎼 Додавайте улюблені треки до плейлистів і насолоджуйтеся безперервним відтворенням за допомогою простого та інтуїтивно зрозумілого інтерфейсу.',
      feature2: '🎶 Знайшли ідеальну пісню на YouTube? Завантажуйте її безпосередньо у свою бібліотеку, вставивши посилання на відео — швидко, легко та без зайвих зусиль.',
      feature3: '🎸 Організуйте свою музику так, як вам зручно. Створюйте плейлисти, перейменовуйте їх відповідно до свого настрою та видаляйте, коли прийде час для оновлення.',
      feature4: '🖥️ Зробіть Melomaniac справді своїм. Вибирайте з безлічі опцій для налаштування зовнішнього вигляду та функціональності плеєра, забезпечуючи персоналізований музичний досвід.',
      whyChooseTitle: 'Чому варто обрати Melomaniac?',
      whyChoose1: '• Створено за допомогою ',
      electronMark: 'Electron',
      whyChoose2: ', що робить його легким, але потужним настільним додатком.',
      whyChoose3: '• Використовує ',
      puppeteerMark: 'Puppeteer',
      whyChoose4: ' для безперебійної автоматизації завантажень з YouTube.',
      whyChoose5: '• Зручний та високо настроюваний, підходить як для початківців, так і для досвідчених користувачів.',
    },
    en: {
      back: 'Back',
      titlePart1: 'Melo',
      titlePart2: 'maniac',
      tryIt: 'Try it',
      introText1: 'Whether you’re managing playlists or downloading tracks, Melomaniac has been crafted to elevate your music experience. Feel free to explore the hotkeys, customize your player, and provide feedback to help make Melomaniac even better.',
      introText2: 'Dive into the rhythm and let the music flow! 🎵',
      mainTitle: 'Melomaniac: Your Personalized Desktop Music Experience',
      description1: 'Welcome to Melomaniac, the desktop music player designed for music enthusiasts who crave simplicity, versatility, and customization. This application combines the essentials of music playback with the unique ability to download tracks directly from YouTube, making it the ultimate tool for managing and enjoying your favorite tunes.',
      featuresTitle: 'Discover Melomaniac\'s Features:',
      feature1: '🎼 Add your favorite tracks to playlists and enjoy seamless playback with a simple and intuitive interface.',
      feature2: '🎶 Found the perfect song on YouTube? Download it directly into your library by pasting the video link—quick, easy, and hassle-free.',
      feature3: '🎸 Organize your music your way. Create playlists, rename them to suit your mood, and delete them when it\'s time for a refresh.',
      feature4: '🖥️ Make Melomaniac truly yours. Choose from a range of options to adjust the player\'s appearance and functionality, ensuring a personalized music experience.',
      whyChooseTitle: 'Why Choose Melomaniac?',
      whyChoose1: '• Built using ',
      electronMark: 'Electron',
      whyChoose2: ', making it a lightweight yet powerful desktop application.',
      whyChoose3: '• Incorporates ',
      puppeteerMark: 'Puppeteer',
      whyChoose4: ' for seamless automation of YouTube downloads.',
      whyChoose5: '• User-friendly and highly customizable, catering to beginners and advanced users alike.',
    },
  };

  const text = content[currentLang];

  return (
    <Container>
      <div className={css.cont}>
        <Link className={css.backbutton} to={'/'}>{text.back}</Link>
        <h2 className={css.title}>
          <span style={{ color: '#9d00ff' }}>{text.titlePart1}</span>{text.titlePart2}
        </h2>
        <a className={css.visitWebsite} target="_blank" href="https://github.com/yuriiavr/desctop-player" rel="noopener noreferrer">{text.tryIt}</a>
        <br />
        <span className={css.sub}>
          {text.introText1}
          <br /><br />
          {text.introText2}
        </span>
        <br />
        <h2 style={{ color: '#fff', fontSize: '32px' }}>{text.mainTitle}</h2>
        <br />
        <span className={css.sub}>{text.description1}</span>
        <br />
        <h2 style={{ color: '#fff', fontSize: '32px' }}>{text.featuresTitle}</h2>
        <span className={css.sub}>{text.feature1}</span>
        <span className={css.sub}>{text.feature2}</span>
        <span className={css.sub}>{text.feature3}</span>
        <span className={css.sub}>{text.feature4}</span>
        <br />
        <h2 style={{ color: '#fff', fontSize: '32px' }}>{text.whyChooseTitle}</h2>
        <span className={css.sub}>
          {text.whyChoose1}
          <span className={css.mark}>{text.electronMark}</span>
          {text.whyChoose2}
        </span>
        <span className={css.sub}>
          {text.whyChoose3}
          <span className={css.mark}>{text.puppeteerMark}</span>
          {text.whyChoose4}
        </span>
        <span className={css.sub}>{text.whyChoose5}</span>
        <img className={css.preview} src={require('../../../../../assets/images/melomaniac_prev2.png')} alt="Melomaniac preview 2" />
        <img className={css.preview} src={require('../../../../../assets/images/melomaniac_prev3.png')} alt="Melomaniac preview 3" />
      </div>
    </Container>
  )
}

export default Melomaniac