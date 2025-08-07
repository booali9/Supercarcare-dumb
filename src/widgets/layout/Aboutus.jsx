import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Aboutus = () => {
  return (
    <><div className="">
      <div class=" w-full  text-center mt-20 mb-8">
        <h1 class="text-3xl font-bold">Why choose us</h1>
        <p className="text-center mb-8">
          A high-performing web-based car rental system for any rent-a-car
          company and website
        </p>
      </div>
      <div class="flex flex-col w-full md:gap-40 md:flex-row items-center justify-center  bg-white rounded-lg shadow-md p-6">
        {/* <div class=" border-2 border-black w-full h-full  max-w-md md:w-1/2 p-4 flex items-center justify-center">
          <div class="bg-blue-200 p-4 rounded-md">Slider</div>
        </div> */}

        {/* <div class="text-left  w-full md:w-1/2 p-4 max-w-md">
          <div class="gap-2 flex  items-start mb-4">
            <div class="mr-2 text-4xl">
              <FaPhoneSquareAlt />
            </div>
            <div>
              <h2 class=" font-semibold mb-2 text-3xl">Heading 1</h2>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div class="flex items-start mb-4">
            <div class="mr-2 text-4xl">
              <FaPhoneSquareAlt />
            </div>
            <div>
              <h2 class="text-3xl font-semibold mb-2">Heading 2</h2>
              <p class="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div class="flex items-start mb-4">
            <div class="mr-2 text-4xl">
              <FaPhoneSquareAlt />
            </div>
            <div>
              <h2 class="text-3xl font-semibold mb-2">Heading 3</h2>
              <p class="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    </>
  );
};

export default Aboutus;
