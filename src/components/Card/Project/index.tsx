import styles from './styles.module.css';
import { FaUser } from 'react-icons/fa';
import Button from '@/components/Button';

const Project = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.title}>Title</div>
      <div className={styles.bagde}>Done</div>
    </div>
    <div className={styles.location}>Belém, Brasil</div>
    <div className={styles.description}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>
    <div className={styles.containerResponsible}>
      <div className={styles.responsible}>
        <div>Coordenador</div>
        <span className={styles.imageUserWrapper}>
          <FaUser />
        </span>
      </div>
      <div className={styles.responsible}>
        <div>Analista</div>
        <span className={styles.imageUserWrapper}>
          <FaUser />
        </span>
      </div>
      <div className={styles.responsible}>
        <div>Técnico</div>
        <span className={styles.imageUserWrapper}>
          <FaUser />
        </span>
      </div>
    </div>
    <div>
      <div className={styles.labelProgress}>30% Done</div>
      <div className={`${styles.progressbar}`}>
        <div
          className={`${styles.progress} ${styles.progressBarStripes}`}
        ></div>
      </div>
    </div>
    <Button.Default className={styles.maxWidth}>Visualizar</Button.Default>
  </div>
);

export default Project;
