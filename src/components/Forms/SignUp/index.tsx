import styles from './styles.module.css';
import Input from '@/components/Input';
import Button from '@/components/Button';

const FormSignUp = () => (
  <form className={styles.container}>
    <Input label={'Nome'} type="email" placeholder="Seu nome ..." />
    <Input label={'Sobrenome'} type="email" placeholder="Seu sobrenome ..." />
    <Input label={'Email'} type="email" placeholder="exemplo@exemplo.com" />
    <Input label={'Senha'} type="email" placeholder="exemplo@exemplo.com" />
    <Input
      label={'Senha'}
      type="password"
      placeholder="••••••••••••••••••••••••••"
    />
    <Button value="Entrar" type="submit" />
  </form>
);

export default FormSignUp;
