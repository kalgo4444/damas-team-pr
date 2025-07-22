import React from "react";
import productsSelect from "../../assets/productsSelect.png";

const Recomintadion = () => {
	return (
		<div className='mt-14 w-full border-y border-gray-400 py-12'>
			<div className='container'>
				<div className='text-sm md:text-base lg:text-2xl flex items-center justify-center gap-8 md:gap-[52px] font-semibold text-product-second'>
					<h3 className='hover:text-black duration-300 cursor-pointer'>Description</h3>
					<h3 className='hover:text-black duration-300 cursor-pointer'>Additional Information</h3>
					<h3 className='hover:text-black duration-300 cursor-pointer'>Reviews [5]</h3>
				</div>
				<div className='mt-9 text-product-second text-sm md:text-base'>
					Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo
					speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes
					the show on the road.
					<br /> <br />
					Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
					engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a
					compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and
					extended highs for a sound that is both articulate and pronounced. The analogue knobs
					allow you to fine tune the controls to your personal preferences while the
					guitar-influenced leather strap enables easy and stylish travel.
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
	);
};

export default React.memo(Recomintadion);
