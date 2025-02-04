import { ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
};

const Body = (props: Props) => (
  <div className={styles.body}>{props.children}</div>
);

export default Body;
