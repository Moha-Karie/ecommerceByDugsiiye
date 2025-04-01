// import React from 'react'

import useShopContextHook from "../ShopContext";

const Payments = () => {
  const { total } = useShopContextHook();

  console.log(total);

  return (
    <div className="lg:w-1/3">
      <div className="border border-gray-200 p-4 rounded-lg">
        <h1 className="font-semibold text-2xl mb-4">Choose Payment Method</h1>
        <div className="flex flex-col space-y-4">
          <div>
            <input type="radio" name="paymentMethod" className="mr-2" />
            <label htmlFor="paymentMethod">Card Payment</label>
          </div>
          <div>
            <input type="radio" name="paymentMethod" className="mr-2" />
            <label htmlFor="paymentMethod">On Cash Payment</label>
          </div>
        </div>
        {/* Line */}
        <div className="w-full h-px bg-gray-200 mt-6"></div>
        <div className="flex justify-between mt-4">
          <div className="font-semibold text-gray-700"> Subtotal</div>
          <div className="text-gray-700 font-semibold">${total.toFixed()}</div>
        </div>
        <div className="flex justify-between mt-6">
          <div className="font-semibold text-pink-600 text-2xl">Subtotal</div>
          <div className="text-gray-700 font-semibold text-2xl">${total.toFixed()}</div>
        </div>
        <button className="bg-pink-600 text-white text-center py-1 rounded-lg w-full mt-6">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Payments;
