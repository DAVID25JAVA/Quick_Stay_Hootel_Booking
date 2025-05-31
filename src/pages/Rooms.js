import React from "react";
import { roomsDummyData } from "../../public/assets";

function Rooms() {
  console.log("Rooms------->", roomsDummyData);

  return (
    <div className="md:max-w-8xl w-full mx-auto xl:px-20 px-4 my-28  ">
      <div className="2xl:container 2xl:mx-auto">
        <div>
          <p className="text-black text-2xl   md:text-5xl">Hotel Rooms</p>
          <p className="text-gray-500 text-[20px] my-2 md:max-w-2xl w-full">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        <div className="flex justify-between items-center">
          {/* Rooms details code */}
          <div className="my-10">
            {roomsDummyData?.map((item) => (
              <div key={item?._id} className="flex flex-col gap-10 border-gray-300 border-b-[2px] my-10">
                <div className="">
                   {item?.images?.slice(0, 1).map((img, index) => (
                  <img
                    key={index}
                    src={img?.src}
                    alt="Room image"
                    className="w-1/2  rounded cursor-pointer"
                  />
                ))}
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-gray-600 text-base">{item?.hotel?.city}</p>
                  <p className="text-black text-xl md:text-3xl">{item?.hotel?.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
