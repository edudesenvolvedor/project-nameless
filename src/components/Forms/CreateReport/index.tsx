import styles from './styles.module.css';
import Input from '@/components/Input';

const CreateReport = () => (
  <div>
    <div className={styles.hidden}>
      <Input.TextField
        label={'Projeto'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <Input.TextField
        label={'Relatório'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <Input.TextField
        label={'Localidade'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <Input.TextField
        label={'Tipo do documento'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <Input.TextField
        label={'Data de finalização'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <button className={styles.button}>Proximo</button>
    </div>

    <div className={styles.hidden}>
      <Input.TextField
        label={'Introdução'}
        id={'name'}
        name={'name'}
      ></Input.TextField>
      <Input.TextField
        label={'Coordenadas'}
        id={'name'}
        name={'name'}
      ></Input.TextField>
      <Input.TextField
        label={'Descrição da atividade'}
        id={'name'}
        name={'name'}
      ></Input.TextField>
      <Input.TextField
        label={'Legendas'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <div>
        <button className={styles.button}>Voltar</button>
        <button className={styles.button}>Proximo</button>
      </div>
    </div>

    <div className={styles.hidden}>
      <Input.TextField
        label={'Cliente'}
        id={'name'}
        name={'name'}
      ></Input.TextField>
      <Input.TextField
        label={'Endereço'}
        id={'name'}
        name={'name'}
      ></Input.TextField>
      <Input.TextField
        label={'Cidade'}
        id={'name'}
        name={'name'}
      ></Input.TextField>
      <Input.TextField
        label={'Latitude'}
        id={'name'}
        name={'name'}
      ></Input.TextField>
      <Input.TextField
        label={'Longitude'}
        id={'name'}
        name={'name'}
      ></Input.TextField>
      <Input.TextField
        label={'TÉCNICO RESPONSÁVEL'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <Input.TextField
        label={'HORA DE INICIO DE ATIVIDADE'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <Input.TextField
        label={'DATA DO ENCERRAMENTO DA VISTORIA'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <Input.TextField
        label={'TELEFONE DO LOCAL'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <Input.TextField
        label={'ACOMPANHAMENTO PRODEPA'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <div>
        <button className={styles.button}>Voltar</button>
        <button className={styles.button}>Proximo</button>
      </div>
    </div>
    <div>
      <Input.TextField
        label={'Conclusão'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <Input.TextField
        label={'Responsável Técnico'}
        id={'name'}
        name={'name'}
      ></Input.TextField>

      <div>
        <button className={styles.button}>Voltar</button>
        <button className={styles.button}>Proximo</button>
      </div>
    </div>
  </div>
);

export default CreateReport;
