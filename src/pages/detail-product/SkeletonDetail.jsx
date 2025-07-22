import React from "react";

const SkeletonDetail = () => {
	return (
		<div className='container mt-10 animate-puls min-h-[80vh] max-md:flex-col flex gap-10 animate-pulse'>
			<div className='w-full md:w-2/5 h-[60vh] bg-gray-300 rounded-border-radius mt-20'></div>
			<div className='w-2/3 h-[60vh] max-md:hidden bg-gray-300 rounded-border-radius mt-20'></div>
		</div>
	);
};

export default React.memo(SkeletonDetail);
