import axios from "axios";
import queryString from "query-string";

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

function send({
  method,
  path,
  data,
  query = {},
  headers = {},
  newUrl,
}: IRequest): Promise<IResponse> {
  return new Promise((resolve) => {
    let url =
      (newUrl ? newUrl : process.env.REACT_APP_API_URL) +
      `${path}` + getQueryString(query);
    const dataString = window.localStorage.getItem("data");
    if (dataString) {
      const newData = JSON.parse(dataString);
      headers.authorization = `Bearer ${newData.token}`;
    }
    axios({
      method,
      url,
      data,
      headers,
    })
      .then((result) => {        
        return resolve({
          data: result.data,
          status: result.status
        });
      })
      .catch((error) => {
        return resolve({
          data: error.response.data,
          status: error.response.status
        });
      });
  });
}

export default {
  send,
};
