import { ReactNode } from 'react';
import Create from '@/components/Forms/Project/Create';

type Props = {
  children?: ReactNode;
};

const Project = (props: Props) => <>{props.children}</>;

Project.Create = Create;

export default Project;
