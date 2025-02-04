import styles from './styles.module.css';
import Header from '@/components/Report/Header';
import Body from '@/components/Report/Body';
import Footer from '@/components/Report/Footer';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

const Page = (props: Props) => (
  <div className={styles.container}>
    <Header />
    <Body>{props.children}</Body>
    <Footer />
  </div>
);

export default Page;
