import styles from './styles.module.css';
import Item from '@/components/List/Reports/Item';

const DashboardPage = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1>Dashboard</h1>
      <button>Novo Relatório</button>
    </div>
    <hr />
    <div className={styles.list}>
      <Item nameReport={'Relatório 1'} />
      <Item nameReport={'Relatório 2'} />
      <Item nameReport={'Relatório 3'} />
    </div>
  </div>
);

export default DashboardPage;
