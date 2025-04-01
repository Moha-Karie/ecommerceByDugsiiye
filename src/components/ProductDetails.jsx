// import React from 'react'

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailsLoadingSkeleton from "./ProductDetailsLoadingSkeleton";
import { ShopContext } from "../ShopContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // context
  const context = useContext(ShopContext);

  // state
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState();
  // const [loading, SetLaoding] = useState(false);

  // useEffect
  useEffect(() => {
    const getProduct = async () => {
      try {
        // SetLaoding(true);
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        // setTimeout(() => {
        // console.log(data);
        setProduct(data);
        // SetLaoding(false);
        setMainImage(data.thumbnail);
        // }, 3000);
      } catch (e) {
        // SetLaoding(false);
        console.log(e);
      }
    };

    getProduct();
  }, [id]);

  if (!product) return <ProductDetailsLoadingSkeleton />;

  return (
    product && (
      <div className="p-4 md:p-8">
        <button
          onClick={() => navigate(-1)}
          className="bg-pink-600 text-white px-4 rounded-lg mb-4 py-2 shadow hover:bg-pink-700 transition-colors duration-200"
        >
          ← Go Back
        </button>

        <h1 className="font-bold text-3xl mb-6">{product.title}</h1>
        <div className="md:flex">
          <div className="md:w-1/2 pr-4 mb-6 mr-6 md:mb-0">
            <img
              className="w-full h-96 object-cover rounded-lg shodow:md"
              src={mainImage}
              alt={product.title}
            />

            {/* Image Gellary */}
            <div className="flex overflow-x-auto space-x-2 mt-4">
              {product.images.map((image) => (
                <img
                  onClick={() => setMainImage(image)}
                  className="w-24 h-24 shadow object-cover rounded-lg cursor-pointer"
                  key={product.id}
                  src={image}
                  alt={product.title}
                />
              ))}
            </div>
          </div>

          <div>
            <p>{product.description}</p>
            <div className="flex justify-between mt-4 mb-4">
              <h1 className="text-pink-600 font-semibold text-2xl">
                ${product.price.toFixed()}
              </h1>
              <p className="text-gray-500">
                {product.stock > 0
                  ? `${product.stock} In stock`
                  : "Out of the stock"}
              </p>
            </div>
            <div>
              <span className="text-yellow-600">
                {"★".repeat(Math.round(product.rating))}
              </span>
              <span className="text-gray-500">
                {"★".repeat(Math.round(5 - product.rating))}
              </span>
            </div>
            <button
              className="p-4 py-2 rounded-lg shadow hover:bg-pink-700 bg-pink-600 mt-4 text-white"
              onClick={() => context.addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
