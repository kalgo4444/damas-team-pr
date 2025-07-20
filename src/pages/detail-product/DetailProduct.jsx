import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import productsSelect from "../../assets/productsSelect.png";

const DetailProduct = () => {
	const [count, setCount] = React.useState(1);
	const [showImageIndex, setShowImageIndex] = React.useState(0);
	const { id } = useParams();
	const { data, error, loading } = useFetch(`/products/${id}`);
	React.useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			{" "}
			<>
				{error && <div>Error</div>}
				{loading ? (
					<div className='container mt-10 animate-pulse bg-second min-h-[60vh]'></div>
				) : (
					<section className='overflow-hidden'>
						<div className='h-[100px] bg-second w-full flex items-center'>
							<div className='container text-base flex items-center gap-4'>
								<span className='text-second-text hover:text-black cursor-pointer'>Home</span>{" "}
								<span>{">"}</span>{" "}
								<span className='text-second-text hover:text-black cursor-pointer'>Shop</span>{" "}
								<span>{">"}</span>
								<span className='pl-5 py-1.5 border-l-2 border-gray-400 cursor-pointer'>
									{data?.title}
								</span>
							</div>
						</div>
						<div className='container mt-8 max-md:flex-col flex  gap-[60px] lg:gap-[105px]'>
							<div className='w-full md:w-[45%] max-md:flex-col-reverse flex gap-8 '>
								<div className='w-full sm:w-3/12 flex flex-row md:flex-col gap-1.5 lg:gap-2.5'>
									{data?.images.map((item, inx) => (
										<div
											key={inx}
											onClick={() => setShowImageIndex(inx)}
											className={`bg-second border border-transparent rounded-border-radius cursor-pointer p-3`}
										>
											<img
												src={item}
												alt='img for select '
												className='max-sm:h-[100px] max-sm:w-full'
											/>
										</div>
									))}
								</div>
								<div className='w-full sm:w-3/4'>
									<div className='w-full min-h-[350px] lg:min-h-[500px]  bg-second flex items-center justify-center rounded-border-radius'>
										<img
											src={data?.images[showImageIndex]}
											className='w-full block mx-auto'
											alt=''
										/>
									</div>
								</div>
							</div>
							<div className='w-full md:w-[55%]'>
								<div className='border-b border-second-text pb-[60px]'>
									<h2 className='text-3xl md:text-4xl lg:text-product-title font-semibold'>
										{data.title}
									</h2>
									<p className='text-base sm:text-lg md:text-xl lg:text-product-price text-product-second font-semibold'>
										Rs. {data.price}
									</p>
									<div className='flex items-center gap-6 mt-3 '>
										<div className='flex items-center gap-1.5 text-lg text-yellow-300'>
											<IoStarSharp />
											<IoStarSharp />
											<IoStarSharp />
											<IoStarSharp />
											<IoStarSharp />
										</div>
										<div className='border-l-2 border-gray-400 px-5 text-product-text'>
											5 Customer Review
										</div>
									</div>
									<p className='mt-4 text-  product-text md:max-w-[550px] w-full font-medium'>
										{data.description}
									</p>
									<div className='mt-6'>
										<p className='text-product-text text-product-second'>Size</p>
										<div className='mt-3 flex items-center gap-3 text-sm md:text-base'>
											<button className='bg-second hover:bg-main size-8 rounded-border-radius cursor-pointer duration-150'>
												L
											</button>
											<button className='bg-second hover:bg-main size-8 rounded-border-radius cursor-pointer duration-150'>
												XL
											</button>
											<button className='bg-second hover:bg-main size-8 rounded-border-radius cursor-pointer duration-150'>
												XS
											</button>
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
									<div className='mt-8 w-full flex items-center gap-3.5'>
										<div className='flex items-center justify-between py-4 px-2 w-1/5 border rounded-border-radius'>
											<button
												disabled={count >= 10}
												onClick={() => setCount(p => p + 1)}
												className='cursor-pointer'
											>
												+
											</button>
											<div>{count}</div>
											<button
												disabled={count <= 0}
												onClick={() => setCount(p => p - 1)}
												className='cursor-pointer'
											>
												{"-"}
											</button>
										</div>
										<button className='w-2/5 border py-4 rounded-border-radius font-semibold cursor-pointer duration-150 active:bg-white active:text-black bg-white hover:bg-black hover:text-white'>
											Add To Cart
										</button>
										<button className='w-2/5 border py-4 rounded-border-radius font-semibold cursor-pointer duration-150 active:bg-white active:text-black bg-white hover:bg-black hover:text-white'>
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
										<li className='flex items-center gap-2'>
											<FaFacebook />
											<FaLinkedin />
											<FaTwitter />
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='mt-14 w-full border-y border-gray-400 py-12'>
							<div className='container'>
								<div className='text-sm md:text-base lg:text-2xl flex items-center justify-center gap-8 md:gap-[52px] font-semibold text-product-second'>
									<h3 className='text-black'>Description</h3>
									<h3>Additional Information</h3>
									<h3>Reviews [5]</h3>
								</div>
								<div className='mt-9 text-product-second text-sm md:text-base'>
									Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active
									stereo speaker takes the unmistakable look and sound of Marshall, unplugs the
									chords, and takes the show on the road.
									<br /> <br />
									Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
									engineering. Setting the bar as one of the loudest speakers in its class, the
									Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a
									clear midrange and extended highs for a sound that is both articulate and
									pronounced. The analogue knobs allow you to fine tune the controls to your
									personal preferences while the guitar-influenced leather strap enables easy and
									stylish travel.
								</div>
								<div className='mt-9 flex max-md:flex-col items-center gap-7'>
									{Array(2)
										.fill()
										.map((_, i) => (
											<div key={i} className='w-full md:w-1/2 bg-second rounded-border-radius'>
												<img src={productsSelect} alt='productsSelect image' loading='lazy' />
											</div>
										))}
								</div>
							</div>
						</div>
					</section>
				)}
			</>
		</div>
	);
};

export default React.memo(DetailProduct);
