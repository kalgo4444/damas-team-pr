import React from "react";
import "./banner.css";
import bannerLogo from "../../assets/images/bannerLogo.png";

const Banner = ({ title, text }) => {
	return (
		<div className='bannerBg mb-3'>
			<div className='container min-h-[316px] flex flex-col gap-2.5 items-center justify-center'>
				<img src={bannerLogo} alt='Banner logo' />
				<h2 className='font-semibold text-2xl sm:text-4xl md:text-5xl'>{title}</h2>
				<p className='flex items-center gap-3'>
					<span className='font-semibold'>Home</span>
					{">"}
					<span>{text}</span>
				</p>
			</div>
		</div>
	);
};

export default React.memo(Banner);
