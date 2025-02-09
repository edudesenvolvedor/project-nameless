import { ReactNode } from 'react';
import Dashboard from '@/components/Dashboard';

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => <Dashboard>{props.children}</Dashboard>;

export default Layout;
