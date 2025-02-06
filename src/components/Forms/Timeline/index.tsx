import Step from '@/components/Forms/Timeline/Step';
import styles from './styles.module.css';

export type StepData = {
  step: number;
  label: string;
  isChecked: boolean;
  isLast: boolean;
};

export type TimelineData = {
  steps: StepData[];
};

type Props = {
  title?: string;
  data?: TimelineData;
};

const Timeline = (props: Props) => {
  return (
    <div>
      <div className={styles.title}>{props.title}</div>
      <div>
        {props.data &&
          props.data?.steps.map((item, i) => <Step key={i} {...item} />)}
      </div>
    </div>
  );
};

export default Timeline;
