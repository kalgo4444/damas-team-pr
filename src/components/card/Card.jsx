
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ data }) => {
  const navigate = useNavigate()

  return (
    <div className="container px-4">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((product) => (
          <div
            key={product.id}
            className="flex flex-col border rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-[280px] object-contain cursor-pointer bg-white"
              onClick={() => navigate(`/product/${product.id}`)}
            />

            <div className="flex flex-col justify-between flex-grow bg-[#F4F5F7] p-4">
              <div>
                <h3 className="font-semibold text-[18px] mb-1">{product.title}</h3>
                <p className="text-sm text-[#898989] mb-2">{product.brand}</p>
              </div>
              <strong className="text-[18px] font-bold mt-auto">Rp {product.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
