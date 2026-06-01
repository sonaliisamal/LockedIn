import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url({ message: "Invalid Supabase URL format" }),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(10, { message: "Supabase Anon Key is missing or too short" }),
});

const parsed = envSchema.safeParse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});

if (!parsed.success) {
  console.error("❌ Invalid environment variables:", parsed.error.format());
  throw new Error("Invalid environment variables. Fix them in .env.local before running.");
}

export const env = parsed.data;