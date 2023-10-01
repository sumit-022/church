import React from "react";
import Input from "../atoms/input";

const Detail = () => {
  return (
    <div className="border py-8 px-3 flex flex-col gap-4">
      <p className="text-xl font-semibold">Details</p>
      <Input
        required
        name="fname"
        type="text"
        id="fname"
        label="First Name"
        className="w-full py-2 rounded-[5px] px-3 bg-transparent"
      />
      <Input
        required
        name="lname"
        type="text"
        id="lname"
        label="Last Name"
        className="w-full py-2 rounded-[5px] px-3 bg-transparent"
      />
      <Input
        required
        name="email"
        type="email"
        id="email"
        label="Email"
        className="w-full py-2 rounded-[5px] px-3 bg-transparent"
      />
      <Input
        name="address"
        type="text"
        id="address"
        label="Address"
        className="w-full py-2 rounded-[5px] px-3 bg-transparent"
      />
      <Input
        name="address2"
        type="text"
        id="address2"
        label="Address 2"
        className="w-full py-2 rounded-[5px] px-3 bg-transparent"
      />
      <Input
        name="cuty"
        type="text"
        id="city"
        label="City"
        className="w-full py-2 rounded-[5px] px-3 bg-transparent"
      />
      <Input
        name="state"
        type="text"
        id="state"
        label="State"
        className="w-full py-2 rounded-[5px] px-3 bg-transparent"
      />
      <Input
        name="postcode"
        type="text"
        id="postcode"
        label="Postcode"
        className="w-full py-2 rounded-[5px] px-3 bg-transparent"
      />
      <Input
        name="country"
        type="text"
        id="country"
        label="Country"
        className="w-full py-2 rounded-[5px] px-3 bg-transparent"
      />
      <Input
        name="phone"
        type="text"
        id="phone"
        label="Phone Number"
        className="w-full py-2 rounded-[5px] px-3 bg-transparent"
      />
    </div>
  );
};

export default Detail;
