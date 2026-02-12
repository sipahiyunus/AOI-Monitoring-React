import { FUJI_BASE_URL } from "./client";
export async function getFuji() {
  const res = await fetch(`${FUJI_BASE_URL}`); // Temporarily end point

  if (!res.ok) throw new Error("Failed");

  return res.json();
}
