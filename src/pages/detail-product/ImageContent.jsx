import React from "react";

const ImageContent = ({ data }) => {
	const [showImageIndex, setShowImageIndex] = React.useState(0);
	return (
		<div className='w-full md:w-[50%] lg:w-[45%] max-md:flex-col-reverse flex gap-8 '>
			<div className='w-full sm:w-1/2 md:w-3/12 flex flex-row md:flex-col gap-1.5 lg:gap-2.5'>
				{data?.images.map((item, inx) => (
					<div
						key={inx}
						onClick={() => setShowImageIndex(inx)}
						className={`bg-second border border-transparent rounded-border-radius cursor-pointer p-1`}
					>
						<img src={item} alt='img for select ' className='max-sm:h-[100px] max-sm:w-full' />
					</div>
				))}
			</div>
			<div className='w-full sm:w-3/4'>
				<div className='w-full min-h-[350px] lg:min-h-[500px]  bg-second flex items-center justify-center rounded-border-radius p-3'>
					<img src={data?.images[showImageIndex]} className='w-full block mx-auto' alt='' />
				</div>
			</div>
		</div>
	);
};

export default React.memo(ImageContent);
