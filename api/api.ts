import axios from "axios";

export async function fetchLegisWebNews() {
  const response = await axios.get("/api/legisweb/news");
  return response.data;
}

export async function fetchLegisWebAgenda(mes: string | number, ano: string | number) {
  const response = await axios.get(`/api/legisweb/agenda?mes=${mes}&ano=${ano}`);
  return response.data;
}

export async function sendContactForm(data: any) {
  const response = await axios.post(
    "https://n8n.taktico.com.br/webhook/contact",
    data
  );
  return response.data;
}
