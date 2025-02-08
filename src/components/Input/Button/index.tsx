import styles from './styles.module.css';
import { ComponentProps } from 'react';
import Input from '@/components/Input';

type Props = ComponentProps<typeof Input>;

const Button = (props: Props) => (
  <Input
    inputProps={{
      type: 'button',
      className: styles.button,
      value: props.label,
    }}
  />
);

export default Button;
