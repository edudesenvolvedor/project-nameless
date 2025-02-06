import styles from './styles.module.css';
import Input from '@/components/Input';
import DataPicker from '@/components/DataPicker';

const Create = () => (
  <form className={styles.container}>
    <div className={styles.title}>Criar novo projeto</div>
    <Input.TextField label="Projeto" />
    <div className={styles.dateWrapper}>
      <DataPicker label={'Data de Inicio'} />
      <DataPicker label={'Data de Termino'} />
    </div>
    <button className={styles.buttonOutline}>Criar</button>
  </form>
);

export default Create;
