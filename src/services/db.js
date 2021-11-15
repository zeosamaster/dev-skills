import api from "./api";

export async function getDevCount() {
  const { data } = await api.from("Devs").select(`id`);
  return data.length;
}

export async function addDev({ devId, skills }) {
  const { data } = await api.from("Devs").insert([{ devId, skills }]);
  return data;
}

export async function getDevs() {
  const { data } = await api.from("Devs").select(`*`);
  return data;
}
