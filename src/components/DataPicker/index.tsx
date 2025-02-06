import styles from './styles.module.css';

type Props = {
  label?: string;
};

const DataPicker = (props: Props) => (
  <div className={styles.inputContainer}>
    <input type="date" id="date-input" placeholder=" " />
    <label htmlFor="date-input">{props.label}</label>
  </div>
);

export default DataPicker;
