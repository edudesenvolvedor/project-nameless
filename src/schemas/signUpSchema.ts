import { z } from 'zod';

const signUpSchema = z.object({
  name: z.string().max(30),
  lastname: z.string().max(30),
  email: z.string().email().max(100).min(5),
  password: z.string().max(100).min(6),
});

export default signUpSchema;

export type SignUp = z.infer<typeof signUpSchema>;
