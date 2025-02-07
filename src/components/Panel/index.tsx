import styles from './styles.module.css';
import { FiTarget } from 'react-icons/fi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { LuCircleCheckBig } from 'react-icons/lu';
import { FaPlus } from 'react-icons/fa';
import Button from '@/components/Button';
import { ReactNode } from 'react';

type Props = {
  title?: string;
  children?: ReactNode;
};

const Panel = (props: Props) => (
  <div className={styles.body}>
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div>Home / Projetos</div>
    </div>
    <div className={styles.header}>
      <div className={styles.containerFilter}>
        <div className={styles.filterActive}>
          <FiTarget /> All
        </div>
        <div className={styles.filter}>
          <IoIosInformationCircleOutline /> Doing
        </div>
        <div className={styles.filter}>
          <LuCircleCheckBig /> Done
        </div>
      </div>
      <Button.Default iconLeft={<FaPlus />}>Criar Novo Projeto</Button.Default>
    </div>
    <div className={styles.content}>{props.children}</div>
  </div>
);

export default Panel;
