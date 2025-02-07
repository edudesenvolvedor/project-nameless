import styles from './styles.module.css';
import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => (
  <button className={styles.button}>{props.children}</button>
);

export default Button;
