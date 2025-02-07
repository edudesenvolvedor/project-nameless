import styles from './styles.module.css';
import { ReactNode } from 'react';

type Props = {
  title?: string;
  breadcrumb?: ReactNode | string;
  header?: ReactNode | string;
  children?: ReactNode;
};

const Panel = (props: Props) => (
  <div className={styles.body}>
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div>{props.breadcrumb}</div>
    </div>
    {props.header && <div className={styles.header}>{props.header}</div>}
    {props.children && <div className={styles.content}>{props.children}</div>}
  </div>
);

export default Panel;
