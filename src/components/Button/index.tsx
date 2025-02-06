import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Button = (props: Props) => (
  <input className={styles.buttons} {...props} type={'submit'} />
);

export default Button;
