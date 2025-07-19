import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
	const { id } = useParams();
	const { data, error, loading } = useFetch(`/products/${id}`);

	console.dir(data);
	return <div>Abdulaziz Section</div>;
};

export default React.memo(DetailProduct);
