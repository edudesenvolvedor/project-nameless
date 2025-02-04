import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = (props: Props) => (
  <div className={styles.container}>
    <label className={styles.label} htmlFor={props.id}>
      {props.label}
    </label>
    <input {...props} className={styles.input} />
  </div>
);

export default Input;
