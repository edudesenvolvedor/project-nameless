import React, { ComponentProps } from 'react';
import Input from '@/components/Input';

type Props = ComponentProps<typeof Input> & {
  type?: 'text' | 'email' | 'password';
};

const TextField: React.FC<Props> = (props: Props) => (
  <Input inputProps={{ type: props.type }} {...props} />
);

export default TextField;
