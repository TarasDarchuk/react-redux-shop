import React from "react";
import Product from "../Product";

const products = [
  {
    model: "Nike LeBron 16",
    colors: 1 + " color",
    gender: "mens",
    price: 200,
    image:
      "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/kr1wna0znhyrlc0eewfw/lebron-soldier-xii-sfg-basketball-shoe-4VTnbn71.jpg",
    key: 1
  },
  {
    model: "Air Jordan Future Premium",
    colors: 1 + " color",
    gender: "mens",
    price: 165,
    image:
      "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/kc8owtspruz1ybjqmkzh/buty-meskie-air-jordan-future-vj7klB.jpg",
    key: 2
  }
];

function ProductsList() {
  return products.map((product, index) => (
    <Product
      key={index}
      model={product.model}
      colors={product.colors}
      gender={product.gender}
      price={product.price}
      image={product.image}
      product={product}
    />
  ));
}

export default ProductsList;
