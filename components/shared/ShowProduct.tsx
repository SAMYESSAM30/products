import { ItemType } from '@/types/ItemType';
import { Rating } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
type ItemCardProps = {
    item: ItemType;
  };
  
const ShowProduct: FC<ItemCardProps> = ({ item }) => {
    const { title, thumbnail, price, discountPercentage, rating, stock, brand, category, description, images} = item;
  return (
      <div>
          <div className="container">
              <div className="flex flex-col items-center">
              <h1 className="my-4 text-xl  text-[#285F9D] text-[18px] font-semibold text-center">{ title}</h1>
                  <Image width={500} height={500} src={thumbnail} alt="img" className="rounded-lg" />
                  <div className="grid grid-cols-2 gap-x-[40px] gap-y-1 my-5">
                  <p>Price :  <span className="text-[#285F9D]">{price}$</span></p>
                  <p>Discount Percentage : <span className="text-[#285F9D]">{discountPercentage}</span></p>
                  <p>Rating :  <Rating name="read-only" value={ rating} readOnly /></p>
                  <p>Stock : <span className="text-[#285F9D]">{ stock}</span></p>
                  <p>Brand :  <span className="text-[#285F9D]">{ brand}</span></p>
                  <p>Category : <span className="text-[#285F9D]">{ category}</span></p>
                  </div>
              </div>
              <h2 className="text-xl font-medium my-3">item Description</h2>
          <p className="my-3 text-[#7F7F7F]">{description }</p>
              <h2 className="text-xl font-medium my-3">Product Images</h2>
              <div className="flex flex-wrap gap-5 mb-[150px]">
              {images.map((img, i) => <Image key={i} width={300} height={300} src={ img} alt="img" className="rounded-lg" />)} 
              </div>
          </div>
    </div>
  )
}

export default ShowProduct