import axios from "axios";

const LEGISWEB_TOKEN = "8940330006972b22c5bdec0.40154555";
const LEGISWEB_DOMAIN = "186.226.50.64";

export const api = axios.create({
  baseURL: `http://${LEGISWEB_DOMAIN}/api`,
  headers: {
    'Authorization': `Bearer ${LEGISWEB_TOKEN}`
  }
});
