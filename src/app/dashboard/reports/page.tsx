import styles from './styles.module.css';
import Page from '@/components/Report/Page';

const ReportPage = () => (
  <div className={styles.container}>
    <Page>
      <div className={styles.section}>
        RELATÓRIO TÉCNICO DE INSTALAÇÃO DA REDE WI-FI DO PROJETO WEB ESCOLA
        PRODEPA – SEDUC
        <br />
        EETEPA DE ORIXIMINÁ
        <br />
        ORIXIMINÁ – PA
        <br />
      </div>
      <div className={styles.section}>PPI</div>
      <div>Belém, 10 de Outubro de 2024.</div>
    </Page>
    <Page>
      <div className={styles.section}>
        RELATÓRIO TÉCNICO DE INSTALAÇÃO DA REDE WI-FI DO PROJETO WEB ESCOLA
        PRODEPA – SEDUC
        <br />
        EETEPA DE ORIXIMINÁ
        <br />
        ORIXIMINÁ – PA
        <br />
      </div>
      <div className={styles.section}>PPI</div>
      <div>Belém, 10 de Outubro de 2024.</div>
    </Page>
  </div>
);

export default ReportPage;
