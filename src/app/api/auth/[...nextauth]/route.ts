import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        console.log(credentials);
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing credentials.');
        }

        // Simulação de busca de usuário no banco
        const user = {
          id: '1594668',
          email: 'contato@eapprojetos.com.br',
          password: '123456',
        };

        if (
          credentials.email !== user.email ||
          credentials.password !== user.password
        ) {
          throw new Error('Invalid credentials.');
        }

        console.log({ id: user.id, email: user.email });

        return { id: user.id, email: user.email };
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
