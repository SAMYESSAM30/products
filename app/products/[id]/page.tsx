import { fetchProduct } from "@/services/ProductService";
import Image from "next/image"
import Rating from '@mui/material/Rating';
type Props = { params: { id: number } };

const page = async({ params }: Props) => {
    const product = await fetchProduct(params.id);
   
    console.log('item', product)
  return (
      <div className="container">
           <div className="flex flex-col items-center">
              <h1 className="my-4 text-xl  text-[#285F9D] text-[18px] font-semibold text-center">{ product.title}</h1>
                    <Image width={500} height={500} src={product.thumbnail} alt="img" className="rounded-lg" />
                    <div className="grid grid-cols-2 gap-x-[40px] gap-y-1 my-5">
                  <p>Price :  <span className="text-[#285F9D]">{product.price}$</span></p>
                  <p>Discount Percentage : <span className="text-[#285F9D]">{product.discountPercentage}</span></p>
                  <p>Rating :  <Rating name="read-only" value={ product.rating} readOnly /></p>
                  <p>Stock : <span className="text-[#285F9D]">{ product.stock}</span></p>
                  <p>Brand :  <span className="text-[#285F9D]">{ product.brand}</span></p>
                  <p>Category : <span className="text-[#285F9D]">{ product.category}</span></p>
              </div>
          </div>
          <h2 className="text-xl font-medium my-3">Product Description</h2>
          <p className="my-3 text-[#7F7F7F]">{product.description }</p>
                <h2 className="text-xl font-medium my-3">Product Images</h2>
                
          <div className="flex flex-wrap gap-5 mb-[150px]">
              {product.images.map((img, i) => <Image key={i} width={300} height={300} src={ img} alt="img" className="rounded-lg" />)} 
               
               
            </div>
    </div>
  )
}

export default page