'use client';

import styles from './styles.module.css';
import TextField from '@/components/Input/TextField';
import Button from '@/components/Input/Button';
import { redirect } from 'next/navigation';

const FormSignUp = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirect('/auth/signin');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <TextField label={'Nome'} name={'name'} type={'text'} />
      <TextField label={'Sobrenome'} name={'lastname'} type={'text'} />
      <TextField label={'Email'} name={'email'} type={'email'} />
      <TextField label={'Senha'} name={'password'} type={'password'} />
      <Button label={'Criar Nova Conta'} />
    </form>
  );
};

export default FormSignUp;
