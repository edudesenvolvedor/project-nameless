'use client';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import NotAuthPage from '@/components/NotAuthPage';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <SessionProvider>
      <NotAuthPage>{children}</NotAuthPage>
    </SessionProvider>
  );
};

export default Layout;
