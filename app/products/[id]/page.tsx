import { fetchProduct } from "@/services/ProductService";
import Image from "next/image"
import Rating from '@mui/material/Rating';
import ShowProduct from "@/components/shared/ShowProduct";
type Props = { params: { id: number } };

const page = async({ params }: Props) => {
    const product = await fetchProduct(params.id);
   
    console.log('item', product)
  return (
    <section>
      <ShowProduct product={product}/>
      </section> )
}

export default page