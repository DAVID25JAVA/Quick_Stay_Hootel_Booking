import ExclusiveOffer from "@/components/ExclusiveOffer";
import FeaturedDestination from "@/components/FeaturedDestination";
import GuestRating from "@/components/GuestRating";
import MainHeader from "@/components/MainHeader";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <MainHeader />
      <div className="md:max-w-8xl w-full xl:px-20 mx-auto px-4">
        <div className="2xl:container 2xl:mx-auto">
          <FeaturedDestination />
          <ExclusiveOffer />
          <GuestRating />
          <Newsletter/>
        </div>
       
       
      </div>
         
    </>
  );
}
