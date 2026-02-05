import type { Retry } from "./types.js";

export const retryPromise = async <T>({
  fn,
  retryAttempts = 3,
  delay = 1000,
}: Retry<T>): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retryAttempts <= 0) {
      console.error("Error");
      throw new Error("Error");
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
    console.log("retryAttempts", retryAttempts);
    return await retryPromise({
      fn,
      retryAttempts: retryAttempts - 1,
      delay,
    });
  }
};
