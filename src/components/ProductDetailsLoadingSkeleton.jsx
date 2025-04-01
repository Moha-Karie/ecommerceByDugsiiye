// import React from 'react'

const ProductDetailsLoadingSkeleton = () => {
  return (
    <div className="p-4 animate-pulse ">
      {/* title placeholder. */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 w-1/2 h-4 "></div>

      {/* Thumbnail and image galleries placeholder. */}
      <div className="flex mt-4">
        <div className=" w-1/2 ">
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 w-full h-96 rounded-lg"></div>
          {/* image galleries */}
          <div className="flex space-x-2">
            <div className="w-24 h-24 mt-4 bg-gradient-to-r from-gray-200 to-gray-400 rounded-lg"></div>
            <div className="w-24 h-24 mt-4 bg-gradient-to-r from-gray-200 to-gray-400 rounded-lg"></div>
            <div className="w-24 h-24 mt-4 bg-gradient-to-r from-gray-200 to-gray-400 rounded-lg"></div>
            <div className="w-24 h-24 mt-4 bg-gradient-to-r from-gray-200 to-gray-400 rounded-lg"></div>
          </div>
        </div>
        <div className="w-1/2 ml-4">
          <div className="flex flex-col space-y-3">
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 w-full h-4"></div>
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 w-full h-4"></div>
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 w-full h-4"></div>
          </div>
          <div className=" mt-4 flex justify-between">
            <div className="bg-gradient-to-r from-gray-300 to-gray-400 w-1/4 h-8"></div>
            <div className="bg-gradient-to-r from-gray-300 to-gray-400 w-1/4 h-8"></div>
          </div>
          <div className="mt-2 flex space-x-2">
            <div className="bg-gradient-to-r from-gray-200 to-gray-400 w-4 h-4"></div>
            <div className="bg-gradient-to-r from-gray-200 to-gray-400 w-4 h-4"></div>
            <div className="bg-gradient-to-r from-gray-200 to-gray-400 w-4 h-4"></div>
            <div className="bg-gradient-to-r from-gray-200 to-gray-400 w-4 h-4"></div>
            <div className="bg-gradient-to-r from-gray-200 to-gray-400 w-4 h-4"></div>
          </div>
          <div className=" mt-2 bg-gradient-to-r from-gray-200 to-gray-400 w-1/2 h-5"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsLoadingSkeleton;
