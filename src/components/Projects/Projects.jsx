import { useOutletContext } from 'react-router-dom';
import React from 'react';
import Container from '../Container/Container';
import ProjectList from '../Projects/ProjectList/ProjectList';
import css from './Projects.module.css';

const Projects = () => {
  const { currentLang } = useOutletContext();

  const content = {
    uk: {
      hello: 'Привіт, мене звати Юра',
      title: 'Я Full-Stack Розробник.',
      subtitle:
        'Я розпочав свій шлях як front-end розробник наприкінці 2021 року, і з того часу це був неймовірний досвід, наповнений безперервним навчанням та зростанням. Мій поточний стек технологій включає JavaScript, React, React Native та Node.js, і нещодавно я розширив свої горизонти, занурившись у захоплюючі світи Electron та Python. Я по-справжньому захоплений створенням — кожен проект, над яким я працюю, є плодом любові, куди я вкладаю всю свою енергію та креативність, щоб втілити щось цінне та значуще в життя. Цей веб-сайт служить як моїм портфоліо, так і місцем, де я ділюся своїми думками та досвідом. Ласкаво прошу до мого портфоліо, де я демонструю свою роботу та ділюся своєю пристрастю до розробки.',
      projectsSection: 'Мої Проекти',
    },
    en: {
      hello: 'Hello, my name is Yura',
      title: "I'm Full-Stack Developer.",
      subtitle:
        'I embarked on my journey as a front-end developer towards the end of 2021, and since then, it has been an incredible experience filled with continuous learning and growth. My current tech stack includes JavaScript, React, React Native, and Node.js, and I’ve recently expanded my horizons by diving into the fascinating worlds of Electron and Python. I’m truly passionate about creating — every project I work on is a labor of love, where I invest all my energy and creativity to bring something valuable and meaningful to life. This website serves as both my portfolio and a place to share my thoughts and experiences. Welcome to my portfolio, where I showcase my work and share my passion for development.',
      projectsSection: 'My Projects',
    },
  };

  const text = content[currentLang];

  return (
    <Container>
      <div>
        <span className={css.hello}>{text.hello}</span>
        <h1 className={css.title}>{text.title}</h1>
        <span className={css.subtitle}>{text.subtitle}</span>
      </div>
      <div className={css.projectsCont}>
        <h2 className={css.sectionName}>{text.projectsSection}</h2>
        <ProjectList />
      </div>
    </Container>
  );
};

export default Projects;