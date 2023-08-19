import { ITable } from "../type";
import Request, { IRequest } from "./request";


export const getTable = async (inUsed?: boolean): Promise<ITable[]> => {
  const payload: IRequest = {
    method: "GET",
    path: "table",
  }
  if (inUsed !== undefined || inUsed !== null) {
    payload.query = {
      in_used: inUsed
    } 
  }

  const resp = await Request.send(payload)
  if (resp.status === 200) {
    return resp.data as ITable[]
  } else {
    return [] as ITable[]
  }
}
















export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};
