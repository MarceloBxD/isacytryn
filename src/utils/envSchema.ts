import { z } from "zod";

const envSchema = z.object({
  INSTAGRAM_ACCESS_TOKEN: z
    .string()
    .min(1, "INSTAGRAM_ACCESS_TOKEN is required"),
});

export const env = envSchema.parse(process.env);
