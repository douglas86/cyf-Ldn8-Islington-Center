import dotenv from "dotenv";
dotenv.config();

export const keys = {
  postgres: process.env.DATABASE_URL,
};
