'use client';

import styles from './styles.module.css';
import Link from 'next/link';
import Input from '@/components/Input';
import { FormEvent } from 'react';
import { redirect } from 'next/navigation';

const FormSignIn = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    redirect('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Input.TextField
        label={'Email'}
        type="email"
        placeholder="exemplo@exemplo.com"
      />
      <Input.TextField
        label={'Senha'}
        type="password"
        placeholder="••••••••••••••••••••••••••"
      />
      <Link className={styles.forgetPassword} href={'/'}>
        Esqueceu a senha?
      </Link>
      <Input.Button value="Sign In" />
    </form>
  );
};

export default FormSignIn;
