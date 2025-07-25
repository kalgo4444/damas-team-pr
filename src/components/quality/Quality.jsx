import { Trophy, ShieldCheck, Package, Headset } from "lucide-react";
import React from "react";

const quality = [
	{
		icon: <Trophy className='w-8 h-8 text-black' />,
		title: "High Quality",
		description: "crafted from top materials",
	},
	{
		icon: <ShieldCheck className='w-8 h-8 text-black' />,
		title: "Warranty Protection",
		description: "Over 2 years",
	},
	{
		icon: <Package className='w-8 h-8 text-black' />,
		title: "Free Shipping",
		description: "Order over 150 $",
	},
	{
		icon: <Headset className='w-8 h-8 text-black' />,
		title: "24 / 7 Support",
		description: "Dedicated support",
	},
];

const Quality = () => {
	return (
		<section className='bg-[#fdf7f0] my-10 py-10 px-4'>
			<div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center'>
				{quality.map((feature, index) => (
					<div key={index} className='flex flex-col items-center'>
						<div className='mb-2'>{feature.icon}</div>
						<h3 className='text-lg font-semibold text-black'>{feature.title}</h3>
						<p className='text-gray-500 text-sm'>{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default React.memo(Quality);
