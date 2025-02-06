import styles from './styles.module.css';

type Props = {
  step: number;
  label: string;
  isChecked?: boolean;
  isLast?: boolean;
};

const Step = (props: Props) => (
  <div className={`${styles.bubble} ${!props.isLast && styles.line}`}>
    <div className={styles.stepWrapper}>
      <div
        className={`${styles.step} ${props.isChecked && styles.stepChecked}`}
      >
        {props.step}
      </div>
      <div className={styles.stepTitle}>{props.label}</div>
    </div>
  </div>
);

export default Step;
