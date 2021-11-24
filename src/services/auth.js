import api from "./api";

export async function signup({ email, password }) {
  return await api.auth.signUp({ email, password });
}
