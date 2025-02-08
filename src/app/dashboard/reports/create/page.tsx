import Timeline, { StepData } from '@/components/Forms/Timeline';
import styles from './styles.module.css';

const ReportCreatePage = () => {
  const steps: StepData[] = [
    { label: 'Step 1', step: 1, isChecked: true, isLast: false },
    { label: 'Step 2', step: 2, isChecked: false, isLast: false },
    { label: 'Step 3', step: 3, isChecked: false, isLast: false },
    { label: 'Step 4', step: 4, isChecked: false, isLast: true },
  ];

  return (
    <div>
      <div className={styles.sidebar}>
        <Timeline title={'Create Report'} data={steps} />
      </div>
      <div className={styles.containerForms}></div>
    </div>
  );
};

export default ReportCreatePage;
