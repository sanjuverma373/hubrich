"use client"
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import girlimg from "../../../public/assets/images/circleimg.png"


import {
        A11y,
        Autoplay,
        Controller,
        Navigation,
        Pagination,
        Virtual,
} from "swiper/modules";
import { Quotes } from "./Icon";
import Image from "next/image";
const clientData1 = [
        {
                discription:
                        "Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. ",
                name: "Marrie James-CEO",
                position: "Limana Enterprises, CA",
                profile: girlimg,
        },
        {
                discription:
                        "Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. ",
                name: "Marrie James-CEO",
                position: "Limana Enterprises, CA",
                profile: girlimg,
        },
        {
                discription:
                        "Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. ",
                name: "Marrie James-CEO",
                position: "Limana Enterprises, CA",
                profile: girlimg,
        },
];
const clientData2 = [
        {
                discription:
                        "Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
                name: "Ralph Edwards-CEO",
                position: "Limana Enterprises, CA",
                profile: girlimg,
        },
        {
                discription:
                        "Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
                name: "Ralph Edwards-CEO",
                position: "Limana Enterprises, CA",
                profile: girlimg,
        },
        {
                discription:
                        "Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
                name: "Ralph Edwards-CEO",
                position: "Limana Enterprises, CA",
                profile: girlimg,
        },
];
const Clientsection = () => {
        const [firstSwiper, setFirstSwiper] = React.useState(null);
        const [secondSwiper, setSecondSwiper] = React.useState(null);
        return (
                <div className="relative swip container mx-auto sm:py-5 lg:py-[200px]">
                       <div className='  absolute top-[-9%] md:top-0 right-[32px] md:right-0 '>
                                                <p className=' inline-block font-Poppins font-light text-lg md:text-xl text-black -rotate-90 mb-[11px] ml-[70%]'>MJH</p>
                                                <div className=' flex'>
                                                        <div className=' flex items-end'>
                                                                <p className='ff-neue font-normal text-[25px] md:text-[40px] leading-[40px] md:leading-[51px] rotate-90 mb-[-25%]'>06</p>
                                                        </div>
                                                        <div className=' border-r-2 border-b-2 border-[#F77B0B] h-[35px] w-[16px]  md:h-[269px]  md:w-[26px]'>
                                                        </div>

                                                </div>
                                        </div>

                        <h1
                                data-aos="zoom-in"
                                className="text-[35px] md:text-[52px] leading-[44px] md:leading-[66px] text-center md:mb-7 uppercase font-normal ff-neue text-black "
                        >
                                What our <span className="text-[#F77B0B]"> clients</span> say
                        </h1>
                        <Swiper
                                direction={"vertical"}
                                modules={[Virtual, A11y, Autoplay, Controller, Pagination]}
                                loop={true}
                                autoHeight={true}
                                spaceBetween={200}
                                slidesPerView={1}
                                pagination={true}
                                navigation={false}
                                onSwiper={setFirstSwiper}
                                controller={{ control: secondSwiper }}
                                className=" sm:!px-40 cursor-pointer relative z-[1] !pt-[84px] !pb-[20px]"
                        >
                                {clientData1.map((data, index) => (
                                        <SwiperSlide key={index} className=" !h-auto">
                                                <div
                                                        data-aos="zoom-in"
                                                        className=" p-[38px_20px_20px] md:p-[58px_50px_32px] max-w-[820px] mx-auto relative z-[1] shadow-[0px_2px_48px_0px_#00000014] h-full"
                                                >
                                                        <p className=" text-black opacity-[70%] font-Poppins max-w-[721px] mx-auto text-sm md:text-base leading-[25px] text-center">
                                                                {data.discription}
                                                        </p>
                                                        <h3 className=" font-Poppins pt-4 font-medium text-sm md:text-base leading-[25px] text-center">
                                                                {data.name}
                                                        </h3>
                                                        <p className="text-black opacity-[70%] font-normal font-Poppins text-sm md:text-base leading-[25px] text-center">
                                                                {data.position}
                                                        </p>
                                                        <Image
                                                                src={data.profile}
                                                                alt="girlProfile"
                                                                width={86}
                                                                height={86}
                                                                className=" absolute left-[50%] translate-x-[-50%] top-0 z-[-1] translate-y-[-55px]"
                                                        />
                                                </div>
                                        </SwiperSlide>
                                ))}
                                <span
                                        data-aos="zoom-in"
                                        className="hidden md:block absolute top-[9%]  sm:top-[14%] right-[14%] z-[-1]"
                                >
                                        <Quotes />{" "}
                                </span>
                        </Swiper>
                        {/*  */}
                        <Swiper
                                breakpoints={{
                                        850: {
                                                slidesPerView: 2,
                                        },
                                }}
                                modules={[Virtual, A11y, Autoplay, Controller, Pagination]}
                                loop={true}
                                spaceBetween={20}
                                slidesPerView={1}
                                onSwiper={setSecondSwiper}
                                controller={{ control: firstSwiper }}
                                className=" max-w-[790px] cursor-pointer px-5 sm:pb-10"
                        >
                                {clientData2.map((data, index) => (
                                        <SwiperSlide key={index} className=" sm:h-auto mb-[6px]">
                                                <div
                                                        data-aos="zoom-in"
                                                        className=" p-[25px_36px_31px] mt-5 relative z-[1]  shadow-[0px_2px_48px_0px_#00000014]"
                                                >
                                                        <p className=" text-black opacity-[70%] font-Poppins max-w-[721px] mx-auto text-sm md:text-base text-center">
                                                                {data.discription}
                                                        </p>
                                                        <h3 className=" font-Poppins pt-4 font-medium text-sm md:text-base leading-[25px] text-center">
                                                                {data.name}
                                                        </h3>
                                                        <p className="text-black opacity-[70%] font-normal font-Poppins text-sm md:text-base leading-[25px] text-center">
                                                                {data.position}
                                                        </p>
                                                </div>
                                        </SwiperSlide>
                                ))}
                        </Swiper>
                        <div className=' absolute left-[2%] bottom-0 md:bottom-[4%]'>
                                <p className=' inline-block font-Poppins font-light text-lg md:text-xl text-black -rotate-90 ml-[-20px] mb-[11px]'>MJH</p>
                                <div className=' flex'>
                                        <div className=' border-s-2 border-b-2 border-[#F77B0B] h-[35px] md:h-[269px] w-[26px]'>
                                        </div>
                                        <div className=' flex items-end'>
                                                <p className='ff-neue font-normal text-[25px] md:text-[40px] leading-[40px] md:leading-[51px] -rotate-90 mb-[-10%]'>07</p>
                                                <p className=' ff-neun font-normal text-lg md:text-2xl text-black uppercase mb-[-10%]'>take step</p>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Clientsection;
