import api from "./api";

export async function getDevCount() {
  const { data } = await api.from("Devs").select(`id`);
  return data.length;
}
