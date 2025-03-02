import styles from './Footer.module.css';
import facebook from '../../../../public/img/ic_facebook.png';
import twitter from '../../../../public/img/ic_twitter.png';
import youtube from '../../../../public/img/ic_youtube.png';
import instagram from '../../../../public/img/ic_instagram.png';

const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__content}>
        <div className={styles.footer__left}>
          <span>@codeit - 2025</span>
        </div>
        <div className={styles.footer__center}>
          <a href='/page/privacy.html'>Privacy Policy</a>
          <a href='/page/faq.html'>FAQ</a>
        </div>
        <div className={styles.footer__right}>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={facebook} alt='Facebook' />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={twitter} alt='Twitter' />
          </a>
          <a
            href='https://youtube.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={youtube} alt='Youtube' />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instagram} alt='Instagram' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
