'use client';

import styles from './styles.module.css';
import Link from 'next/link';
import { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import IFormData from '@/components/Forms/SignIn/IFormData';
import TextField from '@/components/Input/TextField';
import Button from '@/components/Input/Button';

const FormSignIn = () => {
  const [data, setData] = useState<IFormData>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(data);
    //redirect('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <TextField
        label={'Email'}
        name={'email'}
        type={'email'}
        onChange={handleChange}
      />
      <TextField
        label={'Senha'}
        name={'password'}
        type={'password'}
        onChange={handleChange}
      />
      <Link className={styles.forgetPassword} href={'/'}>
        Esqueceu a senha?
      </Link>
      <Button label={'Login'} />
    </form>
  );
};

export default FormSignIn;
