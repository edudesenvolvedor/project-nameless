import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';
import Default from '@/components/Button/Default';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Button = (props: Props) => (
  <input className={styles.buttons} {...props} type={'submit'} />
);

Button.Default = Default;

export default Button;
