import axios from "axios";
import queryString from "query-string";
import { verifyJWT } from "./jwt";
import { message } from "antd";
import { STORAGE_ACCESS_TOKEN_KEY } from "../utils/constants";

const getQueryString = (query: object) => {
  const result = queryString.stringify(query);

  if (!result) return "";
  return `?${result}`;
};

export interface IRequest {
  method: "GET" | "POST";
  path?: string;
  data?: object;
  query?: object;
  newUrl?: string;
  headers?: {
    authorization?: string;
  };
}

export interface IResponse {
  data: any;
  status: number;
}

async function send({
  method,
  path,
  data,
  query = {},
  headers = {},
  newUrl,
}: IRequest): Promise<IResponse> {
  const jwt = window.localStorage.getItem(STORAGE_ACCESS_TOKEN_KEY) || "";
  const validateRes = await verifyJWT(jwt, `${method}_${path}`);
  switch (validateRes) {
    case 403:
      message.warning("Forbidden!");
      setTimeout(() => window.history.back(), 1000);
      break;
    case 401:
      message.warning("Expired session!");
      window.localStorage.removeItem(STORAGE_ACCESS_TOKEN_KEY);
      setTimeout(() => (window.location.href = "/authentication"), 1000);
      break;
    default:
      break;
  }

  return new Promise((resolve) => {
    let url =
      (newUrl ? newUrl : process.env.REACT_APP_API_URL) +
      `${path}` +
      getQueryString(query);
    axios({
      method,
      url,
      data,
      headers,
    })
      .then(async (result) => {
        return resolve({
          data: result.data,
          status: result.status,
        });
      })
      .catch((error) => {
        return resolve({
          data: error.response.data,
          status: error.response.status,
        });
      });
  });
}

export default {
  send,
};
