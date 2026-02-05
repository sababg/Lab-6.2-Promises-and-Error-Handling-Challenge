import { DataError, NetworkError } from "./customErrors.js";
import type { Product, ReviewData } from "./types.js";

export const fetchProductCatalog = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
          ]);
        } else {
          reject(new DataError("something went wrong"));
        }
      }, 1000);
    } catch (error) {
      throw new NetworkError("failed to fetch product catalog");
    }
  });
};

export const fetchProductReviews = (
  productId: number,
): Promise<ReviewData[]> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          const reviewsByProduct: Record<number, ReviewData[]> = {
            1: [
              { id: 1, review: "Powerful" },
              { id: 2, review: "amazing." },
            ],
            2: [
              { id: 1, review: "Great sound." },
              { id: 2, review: "Very comfortable." },
            ],
          };

          resolve(reviewsByProduct[productId] ?? []);
        } else {
          reject(new DataError(`Failed to fetch reviews for ${productId}`));
        }
      }, 1500);
    } catch (error) {
      throw new NetworkError("failed to fetch product reviews");
    }
  });
};

export const fetchSalesReport = (): Promise<
  {
    productId: number;
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
  }[]
> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (Math.random() < 1) {
          resolve([
            { productId: 1, totalSales: 4, unitsSold: 4, averagePrice: 2 },
            { productId: 2, totalSales: 8, unitsSold: 8, averagePrice: 4 },
          ]);
        } else {
          reject(new DataError("something went wrong"));
        }
      }, 1000);
    } catch (error) {
      throw new NetworkError("failed to fetch sales report");
    }
  });
};
