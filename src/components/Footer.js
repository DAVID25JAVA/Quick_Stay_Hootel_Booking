import React from "react";

function Footer() {
  return (
    <>
      
      <footer class="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-green-50">
        <div class="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
          <div class="md:max-w-96">
            <img class="h-14 w-60 invert" src="/logo.png" alt="dummyLogoDark" />
            <p class="mt-6 text-[16px]">
              Discover the world's most extraordinary places to stay, from
              boutique hotels to luxury villas and private islands.
            </p>
          </div>
          <div class="flex-1 flex-col md:flex-row flex items-start md:justify-end gap-5 md:gap-20">
            <div>
              <h2 class="font-semibold text-[20px] mb-5 text-gray-800">
                Company
              </h2>
              <ul class="text-sm space-y-2">
                <li>
                  <p
                    className="text-[16px]"
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    Home
                  </p>
                </li>
                <li>
                  <p
                    className="text-[16px]"
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    About us
                  </p>
                </li>
                <li>
                  <p
                    className="text-[16px]"
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    Contact us
                  </p>
                </li>
                <li>
                  <p
                    className="text-[16px]"
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    Privacy policy
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="font-semibold text-gray-800 text-[20px] mb-5">
                Subscribe to our newsletter
              </h2>
              <div class="text-[16px] space-y-2">
                <p>
                  Subscribe to our newsletter for travel inspiration and special
                  offers.
                </p>
                <div class="flex items-center gap-2 pt-4">
                  <input
                    class="border border-gray-500/30 placeholder-gray-500 outline-none w-full max-w-64 h-9 rounded px-2"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button class="bg-black w-24 h-9 text-white rounded">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="pt-4 text-center text-xs md:text-sm pb-5">
          Copyright {new Date().getFullYear()} © Company name. All Right
          Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
