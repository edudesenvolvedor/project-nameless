import styles from './styles.module.css';
import Section from '@/components/Dashboard/Section';
import Button from '@/components/Dashboard/Button';

const Sidebar = () => (
  <aside className={styles.container}>
    <Section title={'Geral'}>
      <Button>Home</Button>
      <Button>Setting</Button>
    </Section>
  </aside>
);

export default Sidebar;
