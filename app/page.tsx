"use client";

import { useEffect, useState } from "react";

import ListItems from "@/components/shared/ListItems";

import SearchBar from "@/components/ui/SearchBar";
import { Separator } from "@/components/ui/separator";
import fetchProducts from "@/services/ProductService";
import { ItemType } from "@/types/ItemType";
import Footer from "@/components/shared/Footer";

const Home = () => {
  const [products, setProducts] = useState<ItemType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ItemType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProducts();
        console.log("data", data);
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="min-h-screen md:max-w-screen-2xl sm:max-w-screen-sm max-w-screen-md md:px-24 md:py-16 px-12 py-8 shadow-lg mx-auto ">
      <section className=" flex flex-col items-start ">
        <h1 className="my-4 text-[#285F9D] text-[18px] font-medium">
          Search products by keyword
        </h1>
        <SearchBar items={products} setFilteredItems={setFilteredProducts} />
      </section>
      {/* <Separator className="my-7" /> */}
      <section>
        <ListItems items={filteredProducts} />
      </section>
    </main>
  );
};
export default Home;
