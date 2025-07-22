import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

import SkeletonDetail from "./SkeletonDetail";
import TopHeader from "./TopHeader";
import Recomintadion from "./Recomintadion";
import Card from "../../components/card/Card";
import ImageContent from "./ImageContent";
import InfoContent from "./InfoContent";

const DetailProduct = () => {
	const { id } = useParams();
	const { data, error, loading } = useFetch(`/products/${id}`);
	const obj = useFetch(`/products`, { limit: 4, skip: 10 });

	React.useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			{" "}
			<>
				{error && <div>Error</div>}
				{loading ? (
					<SkeletonDetail />
				) : (
					<section className='overflow-hidden'>
						{/*  */}
						<TopHeader data={data} />
						{/*  */}
						<div className='container mt-8 max-md:flex-col flex  gap-[50px] lg:gap-[100px]'>
							{/*  */}
							<ImageContent data={data} />
							{/*  */}
							<InfoContent data={data} />
							{/*  */}
						</div>
						{/*  */}
						<Recomintadion />
						{/*  */}
						<div className=' w-full border-b border-gray-400 py-12'>
							<div className='container'>
								<h2 className='text-3xl font-semibold text-center py-5'> Lorem, ipsum dolor.</h2>
								<Card data={obj.data?.products} />
							</div>
						</div>
					</section>
				)}
			</>
		</div>
	);
};

export default React.memo(DetailProduct);
