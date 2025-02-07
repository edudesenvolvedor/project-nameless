import styles from './styles.module.css';
import { ReactNode } from 'react';

type Props = {
  title: string;
  children?: ReactNode;
};

const Section = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.title}>{props.title}</div>
    <div>{props.children}</div>
  </div>
);

export default Section;
