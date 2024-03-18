import { fetchProduct } from "@/services/ProductService";
import ShowProduct from "@/components/shared/ShowProduct";
import { ItemType } from "@/types/ItemType";

type Props = { params: { id: number } };

const page = async({ params }: Props) => {
  const prodect = await fetchProduct(params.id);
  const item = prodect.map((item:ItemType , i) => item)
  return (
    <section>
      
      <ShowProduct item={item}/>
      </section> )
}

export default page