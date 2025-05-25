import ExclusiveOffer from "@/components/ExclusiveOffer";
import FeaturedDestination from "@/components/FeaturedDestination";
import MainHeader from "@/components/MainHeader";

export default function Home() {
  return (
    <>
      <MainHeader />
      <div className="md:max-w-8xl w-full xl:px-20 mx-auto px-5">
        <div className="2xl:container 2xl:mx-auto">
          <FeaturedDestination />
          <ExclusiveOffer/>
        </div>
       
       
      </div>
         
    </>
  );
}
