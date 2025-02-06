import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';
import TextField from '@/components/Input/TextField';

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

Input.TextField = TextField;

export default Input;
