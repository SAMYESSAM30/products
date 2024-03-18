import { fetchProduct } from "@/services/ProductService";
import ShowProduct from "@/components/shared/ShowProduct";
import { ItemType } from "@/types/ItemType";

type Props = { params: { id: number } };

const page = async({ params }: Props) => {
  const prodect = await fetchProduct(params.id);
  return (
    <section>
      
      <ShowProduct item={prodect}/>
      </section> )
}

export default page