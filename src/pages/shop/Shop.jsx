import React, { useState, useEffect } from "react";
import Products from "../../components/products/Products";
import { useFetch } from "../../hooks/useFetch";
import Banner from "../../components/banner/Banner";
import ShopToolbar from "../../components/shop-toolbar/ShopToolbar";

const Shop = () => {
  const { data } = useFetch(`/products`, { limit: 28, skip: 2 });

  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!data?.products) return;

    const result = data.products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(result);
  }, [searchTerm, data]);

  return (
    <div className="mb-[200px]">
      <Banner title={"Shop"} text={"Shop"} />
      <ShopToolbar onSearch={setSearchTerm} show={filtered.length} total={data?.products?.length || 0} />
      <Products title={null} data={filtered} />
    </div>
  );
};

export default React.memo(Shop);
