import styles from './styles.module.css';
import Image from 'next/image';
import ClientLogo from '@/assets/images/client_logo.png';
import ContractorLogo from '@/assets/images/contractor_logo.png';

const Header = () => (
  <div className={styles.header}>
    <Image src={ClientLogo} alt={'logo'} width={150} />
    <Image src={ContractorLogo} alt={'logo'} width={75} />
  </div>
);

export default Header;
