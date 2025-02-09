'use client';
import styles from './styles.module.css';
import Link from 'next/link';
import TextField from '@/components/Input/TextField';
import Button from '@/components/Input/Button';
import { signIn } from 'next-auth/react';
import React from 'react';
import { useRouter } from 'next/navigation';

const FormSignIn = () => {
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
      callbackUrl: '/dashboard',
    });

    if (res?.error) {
      return;
    }

    router.push('/dashboard');
  };

  return (
    <form onSubmit={handleLogin} className={styles.container}>
      <TextField label={'Email'} name={'email'} type={'email'} />
      <TextField label={'Senha'} name={'password'} type={'password'} />
      <Link className={styles.forgetPassword} href={'/'}>
        Esqueceu a senha?
      </Link>
      <Button label={'Login'} />
    </form>
  );
};

export default FormSignIn;
