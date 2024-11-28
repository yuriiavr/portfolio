import { display } from '@mui/system';
import Container from '../../components/Container/Container';
import css from './cv.module.css'
import pdfFile from "../../assets/Yurii_Avramets_Full-Stack-Dev.pdf";

const CV = () =>{
    return(
        <Container>
            <div className={css.cvCont}>
                <div className={css.sidebar}>
                    <img className={css.myPhoto} src={require('../../assets/images/my_photo.jpg')} alt="me" />
                    <a href={pdfFile} target='_blank' rel="noopener noreferrer" className={css.downloadBtn}>PDF <img className={css.download} src={require('../../assets/images/download.png')} alt="download" /></a>
                    <div>
                        <h1 className={css.name}>Yurii Avramets</h1>
                        <h2 className={css.position}>Full-Stack Developer</h2>
                        <span className={css.location}>📍 Ukraine, Kyiv</span>
                        <ul className={css.contacts}>
                            <li>GitHub: <a className={css.link} href="https://github.com/yuriiavr">yuriiavr</a></li>
                            <li>Mob: <a className={css.link} href="tel:+380931848293">+380931848293</a></li>
                            <li style={{whiteSpace: 'nowrap'}}>Mail: <a className={css.link} href="mailto:yura.avramets@ukr.net">yura.avramets@ukr.net</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Skills</h2>
                        <ul className={css.skills}>
                            <li><b className={css.link}>Frontend:</b> HTML, CSS, JavaScript, TypeScript, React, Redux, Next.js</li>
                            <li><b className={css.link}>Backend:</b> Node.js, Express.js, Python</li>
                            <li><b className={css.link}>Mobile:</b> React Native, Expo, Android/iOS Deployment</li>
                            <li><b className={css.link}>Database:</b> MongoDB, MySQL, Firebase</li>
                            <li><b className={css.link}>Tools:</b> Git, Webpack</li>
                            <li><b className={css.link}>Soft Skills:</b> Problem-solving, teamwork, adaptability, communication</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <span className={css.aboutMe}>
                        I am a Full-Stack Developer with over 2 years of experience in building web and mobile applications.
                        I specialize in JavaScript, React, Node.js, Python and React Native. Skilled in designing scalable architectures, developing APIs, 
                        and ensuring seamless integrations, I focus on delivering high-performing, user-friendly products that solve real-world challenges efficiently.
                    </span>

                    
                    <h2 className={css.title}>Professional Experience</h2>

                    <div className={css.workDesc}>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <h3>Full-Stack Developer</h3> <span>April 2023 - November 2024</span>
                        </div>
                        <span><b>Ignis - Kyiv, Ukraine</b></span>
                        
                        <span>
                            Optimized operations for a media buying company by focusing on reducing costs, time, and effort for routine tasks.
                            My role involved automating various internal processes to enhance efficiency. Key contributions included developing
                            automated landing page generation based on templates, creating a program for email campaigns, which later provided view statistics,
                            and automating server health monitoring. These solutions streamlined workflows and significantly improved the company's productivity.
                        </span>
                    </div>

                    <div className={css.workDesc}>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <h3>Frontend Developer</h3><span>October 2022 - April 2023</span>
                        </div>
                        <span><b>Freelance</b></span>
                        
                        <span>
                            During the break between jobs, I worked as a freelancer, taking on various projects to refine my skills and deliver quality solutions for clients. 
                            Additionally, I dedicated time to developing personal projects, exploring new technologies, and enhancing my expertise in full-stack development.
                        </span>
                    </div>

                    <div style={{borderBottom: 'none', paddingBottom: 0}} className={css.workDesc}>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <h3>Frontend Developer</h3><span>April 2022 - October 2022</span>
                        </div>
                        <span><b>Content Mania - Kyiv, Ukraine</b></span>
                        
                        <span>
                            Developed websites and landing pages with a focus on pixel-perfect implementation, ensuring precise alignment with provided design mockups. 
                            Paid close attention to detail to deliver visually accurate and highly responsive web solutions that met both client and user expectations.
                        </span>
                    </div>

                    <h2 className={css.title}>Education</h2>

                    <div className={css.workDesc}>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <h3>Neoversity, Woolf</h3><span>September 2024 - Present</span>
                        </div>
                        <span><b>Master’s Degree</b></span>
                        
                        <span>
                            Master of Science: Software Engineering
                        </span>
                    </div>

                    <div className={css.workDesc}>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <h3>GoIT</h3><span>November 2021 - September 2022</span>
                        </div>
                        <span><b>Full-stack Front-End Developer</b></span>
                    </div>

                    <div style={{borderBottom: 'none', paddingBottom: 0}} className={css.workDesc}>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <h3>Kyiv National Economic University</h3><span>September 2017 - June 2021</span>
                        </div>
                        <span><b>Bachelor’s Degree</b></span>
                        
                        <span>
                            Faculty of Accounting and Management Taxation
                        </span>
                    </div>

                    <h2 className={css.title}>Languages</h2>

                    <div style={{borderBottom: 'none', paddingBottom: 0}} className={css.workDesc}>
                        <span style={{marginTop: 20}}><b>Ukrainian – Native (C2)</b></span>
                        <span><b>English – Upper-intermediate (B2)</b></span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CV;