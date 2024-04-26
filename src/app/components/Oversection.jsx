import React from "react";

const Oversection = () => {
  return (    
      <div className="bg-[url('/assets/images/over-img.png')] z-[1] w-full relative md:min-h-[517px] bg-no-repeat bg-cover bg-center object-cover flex justify-center items-center ">
        <div className="max-w-[778px]  bg-[#ffffff26] p-3 sm:p-5 lg:p-[50px] my-auto  mx-auto">
          <h1
            data-aos="zoom-in"
            className="font-normal leading-[44px] md:leading-[66px] ff-neue uppercase text-center text-white mb-[10px] text-[35px] md:text-[52px]"
          >
            Are you over your EX?
          </h1>
          <p
            data-aos="zoom-in"
            className="text-sm md:text-base font-normal font-Poppins text-center mx-auto mb-[30px] max-w-[585px] text-white"
          >
            Most women don't even realize how their past experiences affect
            their lives today. Assisting you to overcome this situation is what
            we do.
          </p>
          <button
            data-aos="zoom-in"
            aria-label="fint-out"
            className="text-sm md:text-base cursor-pointer duration-300 hover:scale-95 font-Inter font-medium text-white flex justify-center mx-auto p-[16px_36px] rounded-[68px] bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] hover:shadow-2xl hover:shadow-blue-800 border-transparent"
          >
            Let’s find it out
          </button>
        </div>
      </div>    
  );
};

export default Oversection;
