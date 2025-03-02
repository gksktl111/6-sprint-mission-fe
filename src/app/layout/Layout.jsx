import styles from './Layout.module.css';

import Header from './ui/Header';
import Footer from './ui/Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout__container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
