// utils/flagData.js
// Handles flag quiz loading from database or fallback, plus randomization

import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// Fallback flag quiz data (use emoji or static file references)
const fallbackFlags = [
  { name: "Canada", flag: "🇨🇦" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Norway", flag: "🇳🇴" },
];

/**
 * Loads flag data from PostgreSQL or fallback
 * @returns {Promise<Array<{ name: string, flag: string }>>}
 */
export async function loadFlagData() {
  const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  });

  try {
    await db.connect();
    const result = await db.query("SELECT * FROM flags");
    await db.end();
    return result.rows;
  } catch (error) {
    console.error("❌ DB failed – using fallback flag data.", error);
    return fallbackFlags;
  }
}

/**
 * Picks a random flag from provided dataset
 * @param {Array<{ name: string, flag: string }>} flagData 
 * @returns {{ name: string, flag: string }}
 */
export function getRandomFlag(flagData) {
  if (!flagData.length) return fallbackFlags[0];
  return flagData[Math.floor(Math.random() * flagData.length)];
}
