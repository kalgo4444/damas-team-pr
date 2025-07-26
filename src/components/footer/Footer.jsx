import React from "react";
import { Link } from "react-router-dom";
import { NAVLINK, FOOTERHELP } from "../../static";

const Footer = () => {
	return (
		<footer className='bg-white text-gray-800 py-10'>
			<div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				<div>
					<h2 className='text-2xl font-bold mb-2'>Funiro.</h2>
					<p className='text-sm text-gray-500'>
						400 University Drive Suite 200 Coral Gables,
						<br />
						FL 33134 USA
					</p>
				</div>
				<div>
					<h3 className='text-gray-500 font-semibold mb-3'>Links</h3>
					<ul className='space-y-2'>
						{NAVLINK?.map((item, inx) => (
							<li key={inx}>
								<Link
									onClick={() => {
										window.scrollTo(0, 0);
									}}
									key={inx}
									to={item.link}
									className='hover:underline'
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className='text-gray-500 font-semibold mb-3'>Help</h3>
					<ul className='space-y-2'>
						{FOOTERHELP?.map((item, inx) => (
							<li key={inx}>
								<Link
									onClick={() => {
										window.scrollTo(0, 0);
									}}
									key={inx}
									to={"/"}
									className='hover:underline'
								>
									{item}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className='text-gray-500 font-semibold mb-3'>Newsletter</h3>
					<form className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
						<input
							type='email'
							placeholder='Enter Your Email Address'
							className='w-full sm:w-auto flex-grow border-b border-gray-400 bg-transparent focus:outline-none py-1 text-sm'
						/>
						<button
							type='button'
							className='text-sm font-bold border-b border-black transition cursor-pointer block md:hidden'
						>
							SUBSCRIBE
						</button>
					</form>
				</div>
			</div>
			<div className='mt-10 border-t border-gray-300 pt-4 text-sm text-gray-500 text-center'>
				2023 funiro. All rights reserved
			</div>
		</footer>
	);
};

export default React.memo(Footer);
