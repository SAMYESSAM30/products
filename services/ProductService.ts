import { ItemType } from "@/types/ItemType";

async function fetchProducts(): Promise<ItemType[]> {
  try {
    const response = await fetch("https://dummyjson.com/products/");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: ItemType[] = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
export async function fetchProduct(id : number): Promise<ItemType[]> {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: ItemType[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default fetchProducts;
