export interface ReviewData {
  id: number;
  review: string;
}

export type Product = {
  id: number;
  name: string;
  price: number;
};

export interface Retry<T> {
  fn: () => Promise<T>;
  retryAttempts?: number;
  delay?: number;
}
