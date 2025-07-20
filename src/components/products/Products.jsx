import React from 'react'
import { useFetch } from '../../hooks/useFetch' // если это твой кастомный хук
import Card from '../card/Card'
import Skeleton from '../skeleton/Skeleton'

const Products = () => {
  const { data, error, loading } = useFetch("/products", { limit: 8 })

  return (
    <div>
      <h1 className='text-center font-bold text-[40px] mb-[32px]'>Our Products</h1>

      {error && <p className="text-red-500 text-center">Something went wrong</p>}

      {loading
        ? <Skeleton />
        : <Card data={data?.products} />
      }
    </div>
  )
}

export default Products
