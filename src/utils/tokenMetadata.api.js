import axios from "axios";

const api = axios.create({ baseURL: "https://metadata.templewallet.com" });

const cache = {};

export async function getTokensMetadata(address, id, timeout = 15000) {
  const key = `${address}-${id}`;
  if (cache[key]) {
    return cache[key];
  }
  const metadata = await getTokensMetadataLogic(address, id, timeout)
  cache[key] = metadata;
  return metadata;
}

export async function getTokensMetadataLogic(address, id, timeout = 15000) {
  const metadata = await api
    .get(`metadata/${address}/${id}`, { timeout })
    .then((r) => r.data);
  return metadata;
}
