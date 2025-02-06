'use client';

import styles from './styles.module.css';
import Input from '@/components/Input';
import Form from 'react-bootstrap/Form';

const CreateReport = () => (
  <div>
    <Input.TextField label={'name'} id={'name'} name={'name'}></Input.TextField>
    <Form>
      <div>
        <div>CAPA</div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Projeto</Form.Label>
          <Form.Control type="text" placeholder="Nome do projeto ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Relatório</Form.Label>
          <Form.Control type="text" placeholder="Nome do relatório ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Localidade</Form.Label>
          <Form.Control type="text" placeholder="Localização da vistoria ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tipo do documento</Form.Label>
          <Form.Control type="text" placeholder="Tipo do documento ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Data de finalização</Form.Label>
          <Form.Control type="text" placeholder="Data de termino ..." />
        </Form.Group>
      </div>
      <div>
        <div>Conteúdo</div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Introdução</Form.Label>
          <Form.Control type="text" placeholder="Resumo do projeto aqui ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Coordenadas</Form.Label>
          <Form.Control type="text" placeholder="Coordenadas ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Coordenadas</Form.Label>
          <Form.Control type="file" placeholder="Coordenadas ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Descrição da atividade</Form.Label>
          <Form.Control type="text" placeholder="escrição da atividade ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Legendas</Form.Label>
          <Form.Control type="text" placeholder="Legendas ..." />
        </Form.Group>
      </div>

      <div>
        <div>Dados</div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Cliente</Form.Label>
          <Form.Control type="text" placeholder="Cliente ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Endereço</Form.Label>
          <Form.Control type="text" placeholder="Endereço ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="text" placeholder="Cidade ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Latitude</Form.Label>
          <Form.Control type="text" placeholder="Latitude ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Longitude</Form.Label>
          <Form.Control type="text" placeholder="Longitude ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Data da Vistoria</Form.Label>
          <Form.Control type="text" placeholder="Data da Vistoria ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>TÉCNICO RESPONSÁVEL</Form.Label>
          <Form.Control type="text" placeholder="TÉCNICO RESPONSÁVEL ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>HORA DE INICIO DE ATIVIDADE</Form.Label>
          <Form.Control
            type="text"
            placeholder="HORA DE INICIO DE ATIVIDADE ..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>DATA DO ENCERRAMENTO DA VISTORIA</Form.Label>
          <Form.Control
            type="text"
            placeholder="DATA DO ENCERRAMENTO DA VISTORIA ..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>HORA DE TÉRMINO DA ATIVIDADE</Form.Label>
          <Form.Control
            type="text"
            placeholder="DATA DO ENCERRAMENTO DA VISTORIA ..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>TELEFONE DO LOCAL</Form.Label>
          <Form.Control
            type="text"
            placeholder="DATA DO ENCERRAMENTO DA VISTORIA ..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>ACOMPANHAMENTO PRODEPA</Form.Label>
          <Form.Control type="text" placeholder="ACOMPANHAMENTO PRODEPA ..." />
        </Form.Group>
      </div>

      <div>
        <div>Dados</div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Conclusão</Form.Label>
          <Form.Control type="text" placeholder="Conclusão ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Responsável Técnico</Form.Label>
          <Form.Control type="text" placeholder="Responsável Técnico ..." />
        </Form.Group>
      </div>
    </Form>
  </div>
);

export default CreateReport;
