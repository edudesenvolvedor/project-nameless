import styles from './styles.module.css';
import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Button = (props: Props) => (
  <input className={styles.button} type={'submit'} {...props} />
);

export default Button;
