import styles from './styles.module.css';
import IllustrationSignIn from '@/assets/images/illustration_signin.svg';
import Image from 'next/image';
import FormSignUp from '@/components/Forms/SignUp';

const SignInPage = () => (
  <div className={styles.container}>
    <div
      className={styles.containerFormSignIn}
      style={{ backgroundColor: '#d56c6c', width: '100%', height: '100%' }}
    >
      <Image width={700} src={IllustrationSignIn} alt="illustration" />
    </div>
    <div className={styles.containerFormSignIn}>
      <h1>Obrigado por quere se juntar a nós!</h1>
      <FormSignUp />
    </div>
  </div>
);

export default SignInPage;
