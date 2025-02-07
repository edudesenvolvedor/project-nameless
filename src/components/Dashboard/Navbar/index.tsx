import styles from './styles.module.css';
import { FaAlignRight } from 'react-icons/fa';

const Navbar = () => (
  <nav className={styles.container}>
    <div className={styles.sidebarWrapper}>
      <div>Logo</div>
      <button className={styles.button}>
        <span className={styles.iconWrapper}>
          <FaAlignRight />
        </span>
        <span hidden={true}>Toggle</span>
      </button>
    </div>
  </nav>
);

export default Navbar;
