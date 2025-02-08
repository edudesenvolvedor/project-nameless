import Panel from '@/components/Panel';
import Card from '@/components/Card';
import Dashboard from '@/components/Dashboard';

const Service = () => (
  <Panel
    title={'Serviços'}
    breadcrumb={'Dashboard / Serviços'}
    header={<button>Novo Relatório</button>}
  >
    <Card.Project></Card.Project>
    <Card.Project></Card.Project>
    <Card.Project></Card.Project>
    <Card.Project></Card.Project>
    <Card.Project></Card.Project>
    <Card.Project></Card.Project>
    <Card.Project></Card.Project>
    <Card.Project></Card.Project>
    <Card.Project></Card.Project>
    <Card.Project></Card.Project>
  </Panel>
);

export default Service;
