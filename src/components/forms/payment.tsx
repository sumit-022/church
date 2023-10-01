import React from "react";

const Payment = () => {
  return (
    <div className="border py-8 px-3 flex flex-col gap-4">
      <p className="text-xl font-semibold">Payment</p>
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <input type="radio" name="payment" id="paypal" />
          <label htmlFor="paypal" className="text-[#8d9297]">
            Paypal
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" name="payment" id="offline" />
          <label htmlFor="online" className="text-[#8d9297]">
            Offline Donation
          </label>
        </div>
      </div>
    </div>
  );
};

export default Payment;
