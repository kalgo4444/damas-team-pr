import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const size = ["l", "xl", "xs"];

const InfoContent = ({ data }) => {
	const [count, setCount] = React.useState(1);
	const [isActive, setIsActive] = React.useState(0);

	return (
		<div className='w-full md:w-[50%] lg:w-[55%]'>
			<div className='border-b border-second-text pb-[60px]'>
				<h2 className='text-3xl md:text-4xl lg:text-product-title font-semibold'>{data.title}</h2>
				<p className='text-base sm:text-lg md:text-xl lg:text-product-price text-product-second font-semibold'>
					Rs. {(data.price * count).toFixed(2)}
				</p>
				<div className='flex items-center gap-6 mt-3 '>
					<div className='flex items-center gap-1.5 text-lg text-yellow-300'>
						<IoStarSharp />
						<IoStarSharp />
						<IoStarSharp />
						<IoStarSharp />
						<IoStarSharp />
					</div>
					<div className='border-l-2 border-gray-400 px-5 text-product-text'>5 Customer Review</div>
				</div>
				<p className='mt-4 text-  product-text md:max-w-[550px] w-full font-medium'>
					{data.description}
				</p>
				<div className='mt-6'>
					<p className='text-product-text text-product-second'>Size</p>
					<div className='mt-3 flex items-center gap-3 text-sm md:text-base'>
						{size?.map((item, inx) => (
							<button
								key={inx}
								onClick={() => setIsActive(inx)}
								className={`bg-second uppercase hover:bg-main size-10 md:size-8 rounded-border-radius cursor-pointer duration-150 ${
									isActive === inx ? "isActive2" : ""
								}`}
							>
								{item}
							</button>
						))}
					</div>
				</div>
				<div className='mt-6'>
					<p className='text-product-text text-product-second'>Color</p>
					<div className='mt-3 flex items-center gap-3'>
						<div className='size-8 rounded-full bg-purple-800 cursor-pointer'></div>
						<div className='size-8 rounded-full bg-neutral-800 cursor-pointer'></div>
						<div className='size-8 rounded-full bg-main cursor-pointer'></div>
					</div>
				</div>
				<div className='mt-8 w-full flex max-md:flex-col items-center gap-3.5'>
					<div className='flex items-center justify-between max-sm:mr-0 max-sm:ml-auto w-2/4 md:w-2/6 h-14 overflow-hidden border rounded-border-radius'>
						<button
							disabled={count >= 10}
							onClick={() => setCount(p => p + 1)}
							className='cursor-pointer active:bg-neutral-100 h-full flex-1/2'
						>
							+
						</button>
						<div>{count}</div>
						<button
							disabled={count <= 0}
							onClick={() => setCount(p => p - 1)}
							className='cursor-pointer active:bg-neutral-100 h-full flex-1/2'
						>
							{"-"}
						</button>
					</div>
					<button className='w-full sm:w-3/5 md:w-2/3 border py-4 rounded-border-radius font-semibold cursor-pointer duration-150 active:bg-white active:text-black bg-white hover:bg-black hover:text-white'>
						Add To Cart
					</button>
					<button className='w-full sm:w-3/5 md:w-2/3 border py-4 rounded-border-radius font-semibold cursor-pointer duration-150 active:bg-white active:text-black bg-white hover:bg-black hover:text-white'>
						+ Compare
					</button>
				</div>
			</div>
			<div className='mt-10 flex items-center gap-2.5 text-sm text-product-second font-medium'>
				<ul className='leading-8'>
					<li>SKU</li>
					<li>Category</li>
					<li>Tags</li>
					<li>Share</li>
				</ul>
				<ul className='leading-8'>
					<li>: {data.sku}</li>
					<li>: {data.category}</li>
					<li>: {data.tags[0]}</li>
					<li className='flex items-center gap-5 text-lg text-black'>
						<FaFacebook />
						<FaLinkedin />
						<FaTwitter />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default React.memo(InfoContent);
