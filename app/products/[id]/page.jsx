
import { fetchProduct } from "@/services/ProductService";
import ShowProduct from "@/components/shared/ShowProduct";
import { ItemType } from "@/types/ItemType";



const page = async({ params }) => {
  const prodect = await fetchProduct(params.id);
  return (
    <section>
      
      <ShowProduct item={prodect}/>
      </section> )
}

export default page