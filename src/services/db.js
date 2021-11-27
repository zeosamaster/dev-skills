import api from "./api";

export async function addDev({ devId, skills }) {
  const { data } = await api.from("Devs").insert([{ devId, skills }]);
  return data;
}

export async function getDevs() {
  const { data } = await api
    .from("Devs")
    .select(`*`)
    .order("devId", { ascending: true });

  return data;
}
