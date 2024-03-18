import { ItemType } from "@/types/ItemType";

async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products/");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data= await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
export async function fetchProduct(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default fetchProducts;
