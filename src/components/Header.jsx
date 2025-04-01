import { Link } from "react-router-dom";
import useShopContextHook from "../ShopContext";

const Header = () => {
  // first day of useContext() 31-march- 2025
  const { products } = useShopContextHook();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-md shadow-lg z-50">
      <div className=" max-w-4xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-semibold text-gray-700 ">
          Logo
        </Link>
        <ul className="flex space-x-8 text-gray-700">
          <Link to="/" className="hover:text-pink-600">
            Home
          </Link>
          <Link to="/products" className="hover:text-pink-600">
            Products
          </Link>
          <Link to="/about" className="hover:text-pink-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-pink-600">
            Contact
          </Link>
          <div className="relative">
            <Link to="/cart" className="hover:text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="absolute -top-2 -right-2 bg-pink-700 text-white rounded-full text-xs  w-5 h-5 flex items-center justify-center ">
                {products.length}
              </span>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
