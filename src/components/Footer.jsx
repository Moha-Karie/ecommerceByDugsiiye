// import React from "react";
const Footer = () => {
  //current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-8  border-t mt-16 border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-600 font-light mb-2 ">
          Thanks for you visiting this website
        </p>
        <p className="text-gray-800 font-semibold ">
          Dugsiiye &copy; {currentYear}
        </p>
      </div>
    </div>
  );
};

export default Footer;
