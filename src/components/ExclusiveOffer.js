import React from "react";
import { ArrowRight } from "lucide-react";

function ExclusiveOffer() {
  return (
    <div>
      <p className="text-black text-xl md:text-4xl">Exclusive Offers</p>
      <div className="flex justify-between">
        
      <p className="text-gray-500 text-base max-w-2xl">
        Take advantage of our limited-time offers and special packages to
        enhance your stay and create unforgettable memories.
      </p>
              <div className="flex gap-1 cursor-pointer hover:bg-gray-300 px-2 py-1 duration-500 rounded-full items-center">
                   <p className="text-base text-black">View All Offers</p><ArrowRight className="text-black" />
              </div>
      </div>
    </div>
  );
}

export default ExclusiveOffer;
