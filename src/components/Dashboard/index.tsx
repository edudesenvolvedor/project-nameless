import styles from './styles.module.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Dashboard/Navbar';
import Sidebar from '@/components/Dashboard/Sidebar';

type Props = {
  children?: ReactNode;
};

const Dashboard = (props: Props) => (
  <div className={styles.container}>
    <Navbar />
    <Sidebar />
    {props.children}
  </div>
);

export default Dashboard;
