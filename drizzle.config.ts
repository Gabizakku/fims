<<<<<<< HEAD
// drizzle.config.ts


import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: "./drizzle",
  schema: "./src/lib/server/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!
=======
import { defineConfig } from "drizzle-kit"

export default defineConfig({
  out: "",
  schema: "./src/lib/server/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    user: process.env.USERANME!,
    password: process.env.PASSWORD!,
>>>>>>> cc9123c (init db code)
  }
})
