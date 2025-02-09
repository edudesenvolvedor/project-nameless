import { z } from 'zod';

export const authorizeSchema = z.object({
  id: z.string(),
});

export type Authorize = z.output<typeof authorizeSchema>;
