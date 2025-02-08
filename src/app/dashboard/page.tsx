'use client';

import styles from './styles.module.css';
import Item from '@/components/List/Reports/Item';
import Panel from '@/components/Panel';
import Card from '@/components/Card';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const DashboardPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Carregando...</p>;

  if (!session) {
    redirect('/auth/signin');
    return null;
  }

  return (
    <>
      <Panel title={'Projetos'}>
        <Card.Project></Card.Project>
      </Panel>
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
    </>
  );
};

export default DashboardPage;
