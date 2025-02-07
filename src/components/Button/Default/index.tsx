import styles from './styles.module.css';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
};

const Default = (props: Props) => (
  <button className={`${styles.button} ${props.className}`} {...props}>
    {props.iconLeft && (
      <span className={styles.iconWrapperLeft}>{props.iconLeft}</span>
    )}
    <span className={styles.contentWrapper}>{props.children}</span>
    {props.iconRight && (
      <span className={styles.iconWrapperRight}>{props.iconRight}</span>
    )}
  </button>
);

export default Default;
