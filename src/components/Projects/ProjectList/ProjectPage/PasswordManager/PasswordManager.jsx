import { useOutletContext } from 'react-router-dom';
import React from 'react';
import css from '../ProjectPage.module.css';
import Container from '../../../../Container/Container';

const PasswordManager = () => {
  const { currentLang } = useOutletContext();

  const content = {
    uk: {
      title: 'Password Manager',
      subtitle: 'Ваше досконале безпечне сховище паролів',
      paragraph1:
        'У сучасному цифровому світі керування незліченними паролями може стати справжнім кошмаром. Від онлайн-банкінгу та соціальних мереж до робочих облікових записів та стрімінгових сервісів – запам\'ятати унікальні, надійні паролі для кожного входу майже неможливо. Що ще гірше, використання одного й того ж пароля всюди або нерегулярне оновлення їх створює величезні ризики безпеки, залишаючи ваші цінні облікові записи вразливими до зламу. Ось тут на допомогу приходить Password Manager – ваше універсальне рішення для безпечного, зручного та інтелектуального керування паролями.',
      paragraph2:
        'Наш Password Manager дає вам змогу взяти під контроль вашу цифрову безпеку. Основний принцип геніальний: ви створюєте єдиний, високо зашифрований файл, який виконує роль вашого особистого сховища паролів. Цей файл знаходиться у вашому повному розпорядженні; зберігайте його там, де вам найзручніше – на вашому персональному ПК, безпечно синхронізуйте з вашим Google Диском для хмарної доступності, або навіть на USB-флешці для максимальної портативності та офлайн-доступу.',
      paragraph3:
        'Незрівнянна безпека ваших даних ґрунтується на одному критично важливому елементі: вашому майстер-паролі. Це єдиний ключ для розблокування вашого зашифрованого сховища. Без нього ваша конфіденційна інформація залишається неприступною, навіть якщо хтось отримає доступ до вашого зашифрованого файлу. Це надійне, галузеве шифрування гарантує, що ваші паролі захищені від сторонніх очей та кіберзагроз.',
      paragraph4:
        'Окрім надійної безпеки, наш Password Manager розроблений для неперевершеної зручності використання. Забудьте про клопоти постійного введення складних паролів. Лише кількома кліками ви можете миттєво скопіювати будь-який пароль до буфера обміну, готовий до вставки там, де вам це потрібно. Додавання нових облікових даних є надзвичайно простим, а наш інтуїтивно зрозумілий інтерфейс робить організацію вашого зростаючого списку логінів неймовірно легкою. Незалежно від того, чи у вас десятки, чи сотні паролів, знайти потрібний завжди швидко та просто.',
      paragraph5:
        'Відчуйте спокій, який приносить знання того, що ваше цифрове життя захищене. Password Manager – це не просто інструмент; це ваш особистий супутник кібербезпеки – швидкий, неймовірно зручний та абсолютно безпечний! Скажіть "прощавай" забутим паролям, ризикованим звичкам і "привіт" легкому, захищеному онлайн-життю.',
    },
    en: {
      title: 'Password Manager',
      subtitle: 'Your Perfect Secure Password Vault',
      paragraph1:
        'In today\'s digital world, managing countless passwords can become a real nightmare. From online banking and social media to work accounts and streaming services, remembering unique, strong passwords for every login is nearly impossible. What\'s worse, using the same password everywhere or not updating them regularly creates huge security risks, leaving your valuable accounts vulnerable to breaches. This is where Password Manager comes in – your all-in-one solution for secure, convenient, and intelligent password management.',
      paragraph2:
        'Our Password Manager empowers you to take control of your digital security. The core principle is ingenious: you create a single, highly encrypted file that serves as your personal password vault. This file is entirely at your disposal; store it wherever it\'s most convenient for you – on your personal PC, securely synchronize it with your Google Drive for cloud accessibility, or even on a USB flash drive for maximum portability and offline access.',
      paragraph3:
        'The unparalleled security of your data relies on one critically important element: your master password. This is the sole key to unlocking your encrypted vault. Without it, your confidential information remains impenetrable, even if someone gains access to your encrypted file. This robust, industry-grade encryption ensures that your passwords are safeguarded from prying eyes and cyber threats.',
      paragraph4:
        'Beyond robust security, our Password Manager is designed for unparalleled ease of use. Forget the hassle of constantly typing complex passwords. With just a few clicks, you can instantly copy any password to your clipboard, ready to paste wherever you need it. Adding new credentials is incredibly straightforward, and our intuitive interface makes organizing your growing list of logins remarkably easy. Whether you have dozens or hundreds of passwords, finding the one you need is always quick and simple.',
      paragraph5:
        'Experience the peace of mind that comes with knowing your digital life is protected. Password Manager is not just a tool; it\'s your personal cybersecurity companion – fast, incredibly convenient, and absolutely secure! Say goodbye to forgotten passwords, risky habits, and hello to an effortless, protected online life.',
    },
  };

  const text = content[currentLang];

  return (
    <Container>
      <div className={css.cont}>
        <h2 className={css.title}>{text.title}</h2>
        <h3 style={{ textAlign: 'center' }}>{text.subtitle}</h3>
        <p>{text.paragraph1}</p>
        <p>{text.paragraph2}</p>
        <p>{text.paragraph3}</p>
        <p>{text.paragraph4}</p>
        <p>{text.paragraph5}</p>
      </div>
    </Container>
  );
};

export default PasswordManager;