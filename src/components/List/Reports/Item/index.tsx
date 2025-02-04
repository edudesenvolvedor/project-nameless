import styles from './styles.module.css';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

type Props = {
  nameReport: string;
};

const List = (props: Props) => (
  <div className={styles.container}>
    <div>{props.nameReport}</div>
    <div className={styles.containerButtons}>
      <button className={styles.buttons}>
        <FaEdit className={styles.icon} />
      </button>
      <button className={styles.buttons}>
        <FaTrash className={styles.icon} />
      </button>
    </div>
  </div>
);

export default List;
