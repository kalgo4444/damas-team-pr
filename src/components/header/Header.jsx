import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { RiDislikeLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { NAVLINK } from "../../static";

const Header = () => {
	const [show, setShow] = useState(false);
	return (
		<header className='h-[85px]  w-full bg-white sticky top-0 left-0 z-50 shadow-md'>
			<nav className='container h-full flex items-center justify-between'>
				<NavLink to={"/"}>
					<img src={logo} alt='Header logo' loading='lazy' />
				</NavLink>
				<>
					<ul className='flex items-center gap-[40px] xl:gap-[75px] relative max-md:hidden'>
						{NAVLINK?.map((item, index) => (
							<li
								key={index}
								className='font-medium text-base hover:text-main duration-150 active:text-black'
							>
								<NavLink to={item.link}>{item.name}</NavLink>
							</li>
						))}
					</ul>
				</>
				{show ? (
					<>
						<div
							onClick={() => setShow(!show)}
							className='fixed top-0 left-0 right-0 bottom-0 bg-neutral-950/25 z-30 duration-300'
						></div>
						<ul className='flex flex-col items-center p-10 gap-[75px] bg-neutral-100 z-40 shadow-2xl fixed top-0 left-0 max-md:h-screen max-md:w-3/4'>
							{NAVLINK?.map((item, index) => (
								<li
									key={index}
									className='font-medium text-base hover:text-main duration-150 active:text-black'
								>
									<NavLink onClick={() => setShow(!show)} to={item.link}>
										{item.name}
									</NavLink>
								</li>
							))}
						</ul>
					</>
				) : null}
				<div className='flex items-center gap-5 xl:gap-[45px] text-xl lg:text-2xl max-md:hidden'>
					<button className='cursor-pointer'>
						<FaUserLarge />
					</button>
					<button className='cursor-pointer'>
						<RiDislikeLine />
					</button>
					<button className='cursor-pointer'>
						<GoSearch />
					</button>
					<button className='cursor-pointer'>
						<AiOutlineShoppingCart />
					</button>
				</div>
				<button
					onClick={() => setShow(!show)}
					className='max-md:block hidden text-2xl cursor-pointer'
				>
					<HiMenuAlt3 />
				</button>
			</nav>
		</header>
	);
};

export default React.memo(Header);
