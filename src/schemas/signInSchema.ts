import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email().max(100).min(5),
  password: z.string().min(6).max(100),
});

export type SignIn = z.output<typeof signInSchema>;
