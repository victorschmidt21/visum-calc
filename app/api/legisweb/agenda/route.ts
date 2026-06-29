import { NextResponse } from "next/server";
import axios from "axios";

const TOKEN = process.env.LEGISWEB_TOKEN || "8940330006972b22c5bdec0.40154555";
const DOMAIN = process.env.LEGISWEB_DOMAIN || "186.226.50.64";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mes = searchParams.get("mes") ?? "";
  const ano = searchParams.get("ano") ?? "";

  const formData = new URLSearchParams();
  formData.append("token", TOKEN);
  formData.append("dominio", DOMAIN);
  formData.append("mes", mes);
  formData.append("ano", ano);

  const response = await axios.post(
    "https://www.legisweb.com.br/parceiros/integracao/getDiasAgenda/",
    formData,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  return NextResponse.json(response.data);
}
