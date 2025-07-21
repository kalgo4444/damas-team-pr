import React from "react";
import mainLogo from "../../assets/Frame 168.png";
import { FaRegUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
	return (
		<div className='sticky top-0 left-0 w-full bg-white z-50 shadow'>
			<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
				<a href='/'>
					<img src={mainLogo} alt='main logo' className='h-8 md:h-auto' />
				</a>

				<ul className='hidden md:flex gap-6 lg:gap-10 items-center'>
					<li className='hover:text-[#B88E2F] hover:scale-110 transition duration-300 cursor-pointer'>
						Home
					</li>
					<li className='hover:text-[#B88E2F] hover:scale-110 transition duration-300 cursor-pointer'>
						Shop
					</li>
					<li className='hover:text-[#B88E2F] hover:scale-110 transition duration-300 cursor-pointer'>
						About
					</li>
					<li className='hover:text-[#B88E2F] hover:scale-110 transition duration-300 cursor-pointer'>
						Contact
					</li>
				</ul>

				<div className='flex gap-5 items-center'>
					<FaRegUser className='hover:scale-110 transition duration-300 cursor-pointer' size={20} />
					<BsSearch className='hover:scale-110 transition duration-300 cursor-pointer' size={20} />
					<AiOutlineHeart
						className='hover:scale-110 transition duration-300 cursor-pointer'
						size={20}
					/>
					<AiOutlineShoppingCart
						className='hover:scale-110 transition duration-300 cursor-pointer'
						size={20}
					/>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Header);
