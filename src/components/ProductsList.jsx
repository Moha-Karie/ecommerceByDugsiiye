import { useEffect, useRef, useState } from "react";

import ProductItem from "./ProductItem";
import axios from "axios";
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";
import { AiOutlineSearch } from "react-icons/ai";

const ProductsList = () => {
  // products state
  const [prouducts, setProducts] = useState([]);

  // laoding state
  const [loading, setLoading] = useState(false);

  // searhTerm state
  const [searchTerm, setSearhTerm] = useState("");

  // search api calling deboucing
  const [debouncedSearchTerm, setDebouncedSearhTerm] = useState("");

  // original products state
  const [originalProducts, setOriginalProducts] = useState([]);

  // useRef for search autofocus
  const searchRef = useRef(null);

  //  all products api
  useEffect(() => {
    // all products api
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://dummyjson.com/products");

        // setTimeout(() => {
        setProducts(data.products);
        setOriginalProducts(data.products); // getting the original products
        setLoading(false);
        // }, timeout);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    };
    fetchProducts();
  }, []);

  // debouncing useEffect
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearhTerm(searchTerm);
    }, 300);

    // clean out | closing setTimeout
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  // searching products api
  useEffect(() => {
    // fetching the products
    if (debouncedSearchTerm) {
      const fetchProducts = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(
            `https://dummyjson.com/products/search?q=${searchTerm}`
          );

          setProducts(data.products);

          setLoading(false);
        } catch (e) {
          setLoading(false);
          console.log(e);
        }
      };
      fetchProducts();
    } else {
      setProducts(originalProducts);
    }
  }, [debouncedSearchTerm]);

  // useRef's useEffect
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [prouducts]);

  if (loading) return <ProductLoadingSkeleton />;

  return (
    <>
      <div className="relative">
        <input
          type="search"
          ref={searchRef}
          autoFocus
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearhTerm(e.target.value)}
          className="p-2 pl-10 rounded border shadow w-full focus:outline-none focus:border-pink-300"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <AiOutlineSearch className="w-6 h-6 text-pink-600"></AiOutlineSearch>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {prouducts.length > 0 &&
          prouducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductsList;
