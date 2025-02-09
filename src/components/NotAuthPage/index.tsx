'use client';

import { useSession } from 'next-auth/react';
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  children: ReactNode;
};

const NotAuthPage = ({ children }: Props) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard'); // ✅ Redirecionamento correto no cliente
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Carregando...</p>; // ✅ Evita que a página pisque enquanto verifica a sessão
  }

  return <>{children}</>;
};

export default NotAuthPage;
