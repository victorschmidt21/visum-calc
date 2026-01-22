import axios from "axios";

const LEGISWEB_TOKEN = "8940330006972b22c5bdec0.40154555";
const LEGISWEB_DOMAIN = "186.226.50.64";

// Configure axios instance if needed, or use directly.
// Since the endpoint is external, we'll use direct calls.
// Note: This relies on the API supporting CORS or being okay with browser requests.

export async function fetchLegisWebNews() {
  const formData = new URLSearchParams();
  formData.append("token", LEGISWEB_TOKEN);
  formData.append("dominio", LEGISWEB_DOMAIN);

  const response = await axios.post(
    "https://www.legisweb.com.br/parceiros/integracao/getNoticias/",
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return response.data;
}

export async function fetchLegisWebAgenda(mes: string | number, ano: string | number) {
  const formData = new URLSearchParams();
  formData.append("token", LEGISWEB_TOKEN);
  formData.append("dominio", LEGISWEB_DOMAIN);
  formData.append("mes", String(mes));
  formData.append("ano", String(ano));

  const response = await axios.post(
    "https://www.legisweb.com.br/parceiros/integracao/getDiasAgenda/",
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return response.data;
}
