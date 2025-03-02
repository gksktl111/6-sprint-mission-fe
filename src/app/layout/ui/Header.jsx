import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '/img/panda_icon_big.png';
import userIcon from '/img/user_icon.png';
import useDeviceType from '../../../shared/hooks/useDeviceType';

const Header = () => {
  const location = useLocation();

  const isCommunity = location.pathname === '/community';
  const isUsedMarket = location.pathname === '/used-market';

  const { isTablet } = useDeviceType();

  return (
    <header className={styles.header__container}>
      <div className={styles.header__wrapper}>
        <Link className={styles.header__logo} to='/'>
          <img src={logo} alt='판다마켓' />
          <span>판다마켓</span>
        </Link>
        <nav className={styles.header__nav}>
          <Link
            className={isCommunity ? styles.nav_active : ''}
            to='/community'
          >
            자유게시판
          </Link>
          <Link
            className={isUsedMarket ? styles.nav_active : ''}
            to='/used-market'
          >
            중고마켓
          </Link>
        </nav>

        <Link className={styles.header__login} to='/login'>
          {isTablet ? <img src={userIcon} alt='유저 아이콘' /> : '로그인'}
        </Link>
      </div>
    </header>
  );
};

export default Header;
