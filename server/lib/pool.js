import pkg from "pg";
import { keys } from "./keys.js";

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: keys.postgres,
  ssl: { rejectUnauthorized: false },
});
