import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Card = ({data}) => {
  const navigate = useNavigate()
    
  return (
    <div className='container'>
        <div className='grid grid-cols-4 gap-[32px] mb-[32px]'>
          {
            data?.map((product) => (
              <div key={product.id} className='border-[2px] rounded-[10px]'>
                <img className='max-w-[285px] min-h-[301px] ' onClick={() => navigate(`/product/${product.id}`)} src={product.thumbnail} alt="" />
                  <div className='bg-[#F4F5F7] max-w-[285px]  rounded-[10px] m-h-[145px]'>
                    <h3>{product.title}</h3>
                    <p>{product.brand}</p>
                    <strong>Rp {product.price}</strong>
                  </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Card