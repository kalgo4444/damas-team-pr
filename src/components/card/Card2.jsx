import React from "react";
import { useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { CiShare2 } from "react-icons/ci";

const Card2 = ({ date }) => {
	const navigation = useNavigate();

	return (
		<div className='text-center'>
			<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-hidden'>
				{date?.map(item => (
					<article
						data-aos='fade-up'
						onClick={() => navigation(`/product/${item.id}`)}
						key={item.id}
						className='flex flex-col cursor-pointer font-bold text-left'
					>
						<div className='overflow-hidden flex-2/3 md:min-h-[301px] relative'>
							<img
								src={item.thumbnail}
								loading='lazy'
								className='w-full bg-contain block mx-auto'
								alt=''
							/>
							<div className='absolute top-2 right-3 flex items-center gap-2.5 text-2xl'>
								<button className='cursor-pointer'>
									<FcLike />
								</button>
								<button className='cursor-pointer'>
									<CiShare2 />
								</button>
							</div>
						</div>
						<div className='bg-card-bg w-full pt-4 px-4 pb-5 flex-1/5'>
							<h3 className='text-card-title max-md:text-xl'>
								{item.title.split(" ").slice(0, 2).join(" ")}
							</h3>
							<p className='text-card-text text-second-text '>{item.brand}</p>
							<div className='text-card-price  flex items-center justify-between'>
								<span>Rp {item.price}</span>
								<span>
									<s className='text-card-del-text'>Rp 20.00</s>
								</span>
							</div>
						</div>
						<button className='w-full  border border-main hover:bg-main hover:text-white duration-300 py-2.5 cursor-pointer '>
							Add to Card
						</button>
					</article>
				))}
			</div>
			<button className='mt-8 border border-main py-3 px-[70px] max-w-3xs w-full font-bold text-main hover:text-white hover:bg-main duration-300 cursor-pointer'>
				Show More
			</button>
		</div>
	);
};

export default React.memo(Card2);
