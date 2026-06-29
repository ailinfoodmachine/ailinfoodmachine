import products from "@/data/products.json";
import settings from "@/data/settings.json";

export const productCategories = [
  "vegetable-cutting",
  "cleaning-peeling",
  "meat-processing",
  "dough-processing"
];

export function getProducts() {
  return products;
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured).slice(0, 6);
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

export function getSettings() {
  return settings;
}
