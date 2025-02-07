import styles from './styles.module.css';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLHeadingElement>;

const H3 = (props: Props) => (
  <h3 className={`${styles.h3} ${props.className}`} {...props}>
    {props.children}
  </h3>
);

export default H3;
