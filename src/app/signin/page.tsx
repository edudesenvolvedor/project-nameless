import styles from './styles.module.css';
import FormSignIn from '@/components/Forms/SignIn';
import IllustrationSignIn from '@/assets/images/illustration_signin.svg';
import Image from 'next/image';

const SignInPage = () => (
  <div className={styles.container}>
    <div className={styles.containerFormSignIn}>
      <h1>Bem Vindo de Volta!</h1>
      <FormSignIn />
    </div>
    <div
      className={styles.containerFormSignIn}
      style={{ backgroundColor: '#d56c6c', width: '100%', height: '100%' }}
    >
      <Image width={700} src={IllustrationSignIn} alt="illustration" />
    </div>
  </div>
);

export default SignInPage;
