import { fetchProduct } from "@/services/ProductService";
import ShowProduct from "@/components/shared/ShowProduct";
import { ItemType } from "@/types/ItemType";

type Props = { params: { id: number } };

const page = async({ params }: Props) => {
  const prodect = await fetchProduct(params.id);
  const item = [prodect]
  console.log("product", item);
  return (
    <section>
      {item.map((item:ItemType , i) =>  <ShowProduct key={i} item={item}/>)}
     
      </section> )
}

export default page