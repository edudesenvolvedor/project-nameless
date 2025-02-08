'use client';

import React, {
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from 'react';
import styles from './styles.module.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  label?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
};

const Input: React.FC<Props> = ({
  label,
  inputProps,
  labelProps,
  onChange,
  name,
  ...props
}: Props) => {
  return (
    <div className={`${styles.container} ${props.className}`} {...props}>
      <input
        onChange={onChange}
        name={name}
        placeholder={' '}
        className={`${styles.input} ${inputProps?.className}`}
        {...inputProps}
      />
      {label && (
        <label
          className={`${styles.label} ${labelProps?.className}`}
          htmlFor={inputProps?.id ?? labelProps?.htmlFor}
          {...labelProps}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
