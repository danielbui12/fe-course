import axios from "axios";
import { message } from "antd";
import queryString from "query-string";

const getQueryString = (query: object) => {
  const result = queryString.stringify(query);

  if (!result) return "";
  return `?${result}`;
};

interface IRequest {
  method: "GET" | "POST";
  path?: string;
  data?: object;
  query?: object;
  newUrl?: string;
  headers?: {
    authorization?: string;
  };
}

function send({
  method,
  path,
  data,
  query = {},
  headers = {},
  newUrl,
}: IRequest) {
  return new Promise((resolve) => {
    let url =
      (newUrl ? newUrl : process.env.REACT_APP_API_URL) +
      `${path}${getQueryString(query)}`;
    if (newUrl) {
      url = `${newUrl}${getQueryString(query)}`;
    }
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
        const data = result.data;
        return resolve(data);
      })
      .catch((error) => {
        const { response = {} } = error;

        const result = response.data ? response.data : null;
        if (!result) {
          return resolve({ statusCode: 404, message: "" });
        } else {
          const { statusCode, message: data } = result;

          if (statusCode === 401) {
            message.warning(data || "Đã có lỗi xảy ra");
            setTimeout(() => {
              window.localStorage.clear();
              window.location.href = "/";
            }, 1000);
          } else if (
            (statusCode === 401 && data === "Unauthorized") ||
            (statusCode === 403 && data === "InvalidToken")
          ) {
            window.localStorage.clear();
            window.location.href = "/";
          } else {
            return resolve(result);
          }
        }
      });
  });
}

export default {
  send,
};
