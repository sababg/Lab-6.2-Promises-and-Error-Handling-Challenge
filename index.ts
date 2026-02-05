import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator.js";
import { retryPromise } from "./utilityFunction.js";

const loadData = (): void => {
  retryPromise({ fn: fetchProductCatalog })
    .then((product) => {
      return Promise.all(
        product.map((pro) => {
          console.log(`Product: ${pro.id}- ${pro.name} ($${pro.price})`);
          return fetchProductReviews(pro.id);
        }),
      );
    })
    .then((reviews) => {
      console.log("Product Reviews:", reviews);
    })
    .then(() => {
      return fetchSalesReport();
    })
    .then((report) => console.log("sales report is: ", report))
    .catch((err) => console.error(err))
    .finally(() => console.log("\nAll API calls have been attempted"));
};

loadData();
