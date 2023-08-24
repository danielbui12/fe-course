export type Tag =
  | "Hot Dish"
  | "Cold Dish"
  | "Soup"
  | "Grill"
  | "Appetizer"
  | "Dessert";

export interface IFood {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  discount_amount: number;
  tag: Tag;
}

export interface IOrder {
  id: number;
  total_price: number;
  tax_amount: number;
  discount_amount: number;
  total_payment: number;
  payment_at: Date;
  table_id: number;
}

export interface IOrderItem {
  id: number;
  order_id: number;
  food_id: number;
  price: number;
  discount_amount: number;
  total: number;
}

export interface ITable {
  id: number;
  in_used: number;
}

export interface IAdmin {
  email: string;
  full_name: string;
}

export interface IUser {
  table_id: number;
}
