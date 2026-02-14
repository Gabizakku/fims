import { drizzle as n_drizzle } from "drizzle-orm/neon-http"
import { drizzle as l_drizzle } from "drizzle-orm/node-postgres"
import * as schema from "./db/schema"
import { neon } from "@neondatabase/serverless";
import {DATABASE_URL, MODE} from "$env/static/private"
// for local/dev database, use
// postgresql://(user):(password)@localhost:(port)/(whatever you name the local database)
// within .env file under DATABASE
// also switch MODE to schema
// you can get the port using psql and doing \conninfo

//there has to be a cleaner way to do this
export const db =
    MODE === "NEON"
    ? n_drizzle(neon(DATABASE_URL), {schema})
    : MODE === "LOCAL"
    ? l_drizzle(DATABASE_URL, {schema})
    : (() => {throw new Error("INVALID MODE")})();