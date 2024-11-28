import { Link } from "react-router-dom"
import Container from "../../../../Container/Container"
import css from '../ProjectPage.module.css'

const VoiceHelper = () => {
    return (
        <Container>
            <div className={css.cont}>
                <Link className={css.backbutton} to={'/'}>Back</Link>
                <h2 className={css.title}><span style={{color: '#ff5277'}}>My</span>Blog</h2>
                <a className={css.link} href="https://yuriiavr.github.io/phonebook/">Visit Webstite  &#707;</a>
                <span className={css.sub}>MyBlog is a blog website with my original design, where you can create content and share your thoughts. I used Node.js, so website has my own back-end and database. </span>
                <img className={css.preview} src={require('../../../../../assets/images/blog-main_preview.jpg')} alt="blog main page preview" />
                <span className={css.sub}>There are registration at website. You can sign up or login and write comments to posts. If you wanna sign up, you must confirm your Email. </span>
                <img style={{margin: '30px auto'}} width={500} src={require('../../../../../assets/images/blog-signup_preview.jpg')} alt="blog sign up page preview" />
                <span className={css.sub}>You can create your own posts at "Add Post" page. You should enter title, picture and content of the post. You also can see there post preview to know how'll be looks your post.</span>
                <img className={css.preview} src={require('../../../../../assets/images/blog-createpost_preview.jpg')} alt="blog create post page preview" />
                <span className={css.sub}>When you crate post you can see it at home page. There'll be just image and if you hover picture, you can see title of the post. When you click on image, you'll move to full post page. There you can see all content and write comments. Also you can add post to your favoire. </span>
                <img className={css.preview} src={require('../../../../../assets/images/blog-homepage_preview.jpg')} alt="blog home page preview" />
                <span className={css.sub}>If you have admin account, you can edit or delate post. You can also delate comments.</span>
                <img className={css.preview} src={require('../../../../../assets/images/blog-post_preview.jpg')} alt="blog home page preview" />
            </div>
        </Container>
    )
}

export default VoiceHelper