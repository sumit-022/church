import Input from "@/components/atoms/input";
import React from "react";

interface Props {
  organizer: string;
  startDate: string;
  endDate: string;
  time: string;
  cost: string;
  venue: string;
  address: string;
  email: string;
  phone: string;
  website: string;
}

const RightContent: React.FC<Props> = ({
  organizer,
  startDate,
  endDate,
  time,
  cost,
  venue,
  address,
  email,
  phone,
  website,
}: Props) => {
  const detailfields = [
    {
      name: "Organizer",
      value: organizer,
    },
    {
      name: "Start Date",
      value: startDate,
    },
    {
      name: "End Date",
      value: endDate,
    },
    {
      name: "Time",
      value: time,
    },
    {
      name: "Cost",
      value: cost,
    },
  ];

  const venuefields = [
    {
      name: "Venue",
      value: venue,
    },
    {
      name: "Address",
      value: address,
    },
    {
      name: "Email",
      value: email,
    },
    {
      name: "Phone",
      value: phone,
    },
    {
      name: "Website",
      value: website,
    },
  ];
  return (
    <div className="lg:w-[30%] w-full">
      <p className="bg-primary-yellow p-3 rounded-t-lg text-center font-bold text-xl text-white">
        Event Details
      </p>
      <div className="border p-4">
        <div className="flex flex-col gap-3">
          {detailfields.map((field, index) => (
            <>
              <div key={index} className="flex items-center gap-3 py-2">
                <p className="font-bold">{field.name} :</p>
                <p className="text-primary-grey">{field.value}</p>
              </div>
              {index !== detailfields.length - 1 && (
                <div className="border-b"></div>
              )}
            </>
          ))}
        </div>
      </div>
      <p className="bg-primary-yellow p-3 text-center font-bold text-xl text-white">
        Event Venue
      </p>
      <div className="border p-4">
        <div className="flex flex-col gap-3">
          {venuefields.map((field, index) => (
            <>
              <div key={index} className="flex items-center gap-3 py-2">
                <p className="font-bold">{field.name} :</p>
                <p className="text-primary-grey">{field.value}</p>
              </div>
              {index !== detailfields.length - 1 && (
                <div className="border-b"></div>
              )}
            </>
          ))}
        </div>
      </div>
      <p className="bg-primary-yellow p-3 text-center font-bold text-xl text-white">
        Event Registration
      </p>
      <div className="border p-6">
        <div className="flex flex-col gap-3">
          <Input
            placeholder="Name"
            type="text"
            name="name"
            className="p-3 bg-transparent"
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            className="p-3 bg-transparent"
          />
          <Input
            placeholder="Phone"
            type="text"
            name="phone"
            className="p-3 bg-transparent"
          />
          <select className="p-3 bg-transparent border-[1.5px] text-primary-grey rounded-md focus:outline-none">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </select>
          <button className="bg-primary-yellow text-white w-max px-8 py-2 rounded">
            Send Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
