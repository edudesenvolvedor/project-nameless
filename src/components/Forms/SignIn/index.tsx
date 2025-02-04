import styles from './styles.module.css';
import Link from 'next/link';
import Input from '@/components/Input';
import Button from '@/components/Button';

const FormSignIn = () => (
  <form className={styles.container}>
    <Input label={'Email'} type="email" placeholder="exemplo@exemplo.com" />
    <Input
      label={'Senha'}
      type="password"
      placeholder="••••••••••••••••••••••••••"
    />
    <Link className={styles.forgetPassword} href={'/'}>
      Esqueceu a senha?
    </Link>
    <Button value="Entrar" type="submit" />
  </form>
);

export default FormSignIn;
