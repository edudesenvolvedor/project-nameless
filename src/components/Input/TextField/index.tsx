import styles from './styles.module.css';
import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const TextField = (props: Props) => (
  <div className={styles.inputContainer}>
    <input {...props} type="text" placeholder=" " />
    <label htmlFor={props.id}>{props.label}</label>
  </div>
);

export default TextField;
