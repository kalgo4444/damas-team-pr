import React from "react";
import { useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { useStore } from "../../zustand/useStore";

const Card = ({ data }) => {
	const navigate = useNavigate();
	const {toggleWishlist, wishlist} = useStore()
	console.log(wishlist);
	
	return (
		<div className='container px-4'>
			<div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{data?.map(product => (
					<div
						key={product.id}
						className='flex flex-col border-[.1px] border-[#F1F1F1] rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300'
					>
						<img
							src={product.thumbnail}
							alt={product.title}
							className='w-full h-[280px] object-contain cursor-pointer bg-white'
							onClick={() => navigate(`/product/${product.id}`)}
						/>

						<div className='text-left flex flex-col justify-between flex-grow bg-second p-4'>
							<div>
								<h3 className='font-semibold text-[18px] mb-1'>{product.title}</h3>
								<p className='text-sm text-[#898989] mb-2'>{product.brand}</p>
							</div>
							<div className='flex justify-between items-center relative'>
								<strong className='text-[18px] font-bold mt-auto'>Rp {product.price}</strong>
								<button onClick={() => toggleWishlist(product)} className=' text-[25px] cursor-pointer'>
									{
									wishlist.some((item) => item.id === product.id) ?
									<FcLike />
									 :
									 <CiHeart />}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default React.memo(Card);
