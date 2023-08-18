import dotenv from "dotenv";
import { z } from "zod";

export const SecretsSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z.string().optional(),
});

const output = dotenv.config();

export const Secrets = SecretsSchema.parse(output.parsed);
