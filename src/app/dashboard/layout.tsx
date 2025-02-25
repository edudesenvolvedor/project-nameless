'use client';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import AuthPage from '@/components/AuthPage';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <SessionProvider>
      <AuthPage>{children}</AuthPage>
    </SessionProvider>
  );
};

export default Layout;
