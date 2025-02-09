import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { Credentials as CredentialType } from '@/schemas/credentialsSchema';

import { SignIn, signInSchema } from '@/schemas/signInSchema';
import UserModel from '@/model/UserModel';
import connect from '@/lib/database/mongoose';
import { Authorize } from '@/schemas/authorizeSchema';

const handler = NextAuth({
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials): Promise<Authorize> => {
        const signInData: SignIn = credentials as CredentialType;

        try {
          const validatedSignIn: SignIn = signInSchema.parse(signInData);

          await connect();
          const user = await UserModel.findOne({
            email: validatedSignIn.email,
          });

          console.log(user);

          if (!user) {
            throw new Error('User does not exist');
          }

          if (
            user.email !== credentials?.email &&
            user.password !== credentials?.password
          ) {
            throw new Error('Invalid credentials.');
          }

          console.log({ email: user.email });

          return { id: '1' };
        } catch (error) {
          console.error(error);
          throw new Error('Unable to parse signIn');
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
});

export { handler as GET, handler as POST };
