import styles from './styles.module.css';
import DataPicker from '@/components/DataPicker';
import TextField from '@/components/Input/TextField';

const Create = () => (
  <form className={styles.container}>
    <div className={styles.title}>Criar novo projeto</div>
    <TextField label="Projeto" />
    <div className={styles.dateWrapper}>
      <DataPicker label={'Data de Inicio'} />
      <DataPicker label={'Data de Termino'} />
    </div>
    <button className={styles.buttonOutline}>Criar</button>
  </form>
);

export default Create;
