import React from 'react';
import ProductItem from './productItem';

function ProductList() {
  const products = [
    {
      name: "Nike Air Max",
      price: 4500,
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14c59ae7-bdff-4e61-8ed3-2f9bb3e5d624/air-max-90-shoes-N6Kf9c.png"
    },
    {
      name: "RayBan Sunglasses",
      price: 999,
      image: "https://m.media-amazon.com/images/I/61jy-Ak1sFL._UX679_.jpg"
    },
    {
      name: "Apple Watch",
      price: 25000,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7A3_VW_34FR+watch-case-45-aluminum-starlight-nc-s9_VW_34FR_WF_CO?wid=940&hei=1112&fmt=png-alpha&.v=1693617761847"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((item, index) => (
        <ProductItem
          key={index}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ProductList;
