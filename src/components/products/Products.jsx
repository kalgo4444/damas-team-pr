import React from 'react'
import { useFetch } from '../../hooks/useFetch' // если это твой кастомный хук
import Card from '../card/Card'
import Skeleton from '../skeleton/Skeleton'

const Products = () => {
  const { data, error, loading } = useFetch("/products", { limit: 8 ,skip:5})

  return (
    <div className='text-center'>
      <h2 className='text-center font-bold text-[40px] mb-[32px]'>Our Products</h2>

      {error && <p className="text-red-500 text-center">Something went wrong</p>}

      {loading
        ? <Skeleton />
        : <Card data={data?.products} />
      }
      <button className='max-[450px]:px-[55px] max-[450px]:text-[14px] cursor-pointer duration-200 shadow-[#BBBE2F] hover:shadow-2xs font-[600] text-[16px] text-[#B88E2F] rounded-[3px] py-[12px] mt-[32px] mb-[68px] px-[75px] border-[1px] border-[#B88E2F]'>Show More</button>
    </div>
  )
}

export default Products
