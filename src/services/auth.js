import api from "./api";

export async function signup({ email, password }) {
  return await api.auth.signUp({ email, password });
}

export async function login({ email, password }) {
  return await api.auth.signIn({ email, password });
}

export async function sendMagicLink({ email }) {
  return await api.auth.signIn({ email });
}

