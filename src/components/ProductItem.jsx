/* eslint-disable react/prop-types */
// import React from 'react'

import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Link
      to={`/product-details/${product.id}`}
      key={product.id}
      className="border-1 border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in"
    >
      <img
        className="w-full  h-48 object-cover"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="p-4">
        <h2 className=" text-xl font-bold mb-2">{product.title}</h2>
        <p className="truncate mb-4 text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center ">
          <span className="text-blue-600 font-semi-bold">
            ${product.price.toFixed()}
          </span>
          <div className="text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} In stock` : "Out of stock"}
          </div>
        </div>
        <div>
          <span className="text-yellow-500">
            {"★".repeat(Math.round(product.rating))}
          </span>
          <span className="text-gray-500">
            {"★".repeat(Math.round(5 - product.rating))}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
