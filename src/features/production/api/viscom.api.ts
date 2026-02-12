import { VISCOM_BASE_URL } from "./client";
export async function getViscom() {
  const res = await fetch(`${VISCOM_BASE_URL}`); // Temporarily end point

  if (!res.ok) throw new Error("Failed");

  return res.json();
}
