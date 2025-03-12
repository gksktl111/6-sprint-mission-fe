import styles from './Footer.module.css';
import facebook from '/img/ic_facebook.png';
import twitter from '/img/ic_twitter.png';
import youtube from '/img/ic_youtube.png';
import instagram from '/img/ic_instagram.png';

const LINK_IMG_DATAS = [
  {
    href: 'https://facebook.com',
    img: facebook,
  },
  {
    href: 'https://twitter.com',
    img: twitter,
  },
  {
    href: 'https://youtube.com',
    img: youtube,
  },
  {
    href: 'https://instagram.com',
    img: instagram,
  },
];

const Footer = () => {
  console.log(LINK_IMG_DATAS);
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <span>@codeit - 2025</span>
        </div>
        <div className={styles.center}>
          <a href='/page/privacy.html'>Privacy Policy</a>
          <a href='/page/faq.html'>FAQ</a>
        </div>
        <div className={styles.right}>
          {LINK_IMG_DATAS.map((data) => (
            <a
              key={data.href}
              href={data.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={data.img} alt={data.href} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
