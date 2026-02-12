import { IBL_BASE_URL } from "./client";
export async function getIbl() {
  const res = await fetch(`${IBL_BASE_URL}`); // Temporarily end point

  if (!res.ok) throw new Error("Failed");

  return res.json();
}
