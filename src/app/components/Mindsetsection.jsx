"use client"
import React from 'react'
import Image from "next/image";
import Message from '../../../public/assets/images/message.png'
import { Arrowleft, Arrowright } from './Icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


const Mindsetsection = () => {
       
        return (
                <div id='benifits' className=' pt-[9px] pb-[30px] md:pb-[100px] lg:pb-[186px] overflow-hidden'>

                        <div className=' container mx-auto px-3'>
                                <div className=' flex justify-end'>
                                        <div className=' mr-3 lg:-mr-3 '>
                                                <p className=' inline-block font-Poppins font-light text-lg md:text-xl text-black -rotate-90 mb-[11px] ml-[87%]'>MJH</p>
                                                <div className=' flex'>
                                                        <div className=' flex items-end'>
                                                                <p className='ff-neun font-normal text-lg md:text-2xl text-black uppercase mb-[-10%]'>analysis</p>
                                                                <p className='ff-neue font-normal text-[25px] md:text-[40px] leading-[40px] md:leading-[51px] rotate-90 mb-[-10%]'>04</p>
                                                        </div>
                                                        <div className=' border-r-2 border-b-2 border-[#F77B0B] h-[35px] w-[16px]  md:h-[269px]  md:w-[26px]'>
                                                        </div>

                                                </div>
                                        </div>
                                </div>
                                <div className='lg:grid lg:grid-cols-2 px-3 lg:px-0 pt-[16px] md:pt-[26px]'>
                                        <div className=' pt-0 md:pt-[36px]'>
                                                <p className=' ff-neue font-normal text-[22px] md:text-[29px] text-black'>THE FOUR PHASES OF</p>
                                                <h3 className='uppercase ff-neue font-normal text-[35px] md:text-[52px] leading-[44px] md:leading-[66px] pb-2 md:pb-[19px]'>SEPARATION <span className=' text-[#F77B0B] block'>MINDSET</span></h3>
                                                <p className=' text-[#4D4D4D] font-Poppins font-normal text-sm md:text-base max-w-[490px] pb-2 md:pb-[36px]'>There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.</p>
                                                <div className=' flex max-w-[452px] gap-1 items-center border-[1.7px] border-solid border-[#0C5FD1] rounded-[63px] py-[5.83px] pl-[9px] pr-[44px] cursor-pointer duration-300 hover:scale-95 hover:shadow-2xl hover:shadow-blue-800'>
                                                        <Image src={Message} alt='#' width={50} height={47} />
                                                        <p className=' text-g font-Inter font-medium text-sm md:text-base capitalize'>Book a non-binding initial consultation now</p>
                                                </div>
                                        </div>
                                        <div className=' relative pt-4 lg:pt-0'>
                                                <Swiper
                                                        effect={'flip'}
                                                        grabCursor={true}
                                                        pagination={true}
                                                        modules={[EffectFlip, Pagination, Navigation]}
                                                        className="mySwiper"
                                                        loop={true}

                                                        speed={500}
                                                        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                                                >
                                                        <SwiperSlide>
                                                                <div className='bg-[url(/assets/images/slider-bg.png)] bg-cover bg-center bg-no-repeat min-h-[300px] md:min-h-[448px]'>
                                                                        <div className=' py-[133px]'>
                                                                                <p className=' text-center font-Poppins font-medium text-lg md:text-xl text-white pb-[15px] capitalize '>1st phase<span className='block'>"The not-wanting-to-be-true"</span></p>
                                                                                <p className=' mx-auto text-center text-white font-Poppins font-normal text-sm md:text-base max-w-[364px]'>This phase is characterized by denial and ignoring the final separation.</p>
                                                                        </div>
                                                                </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                                <div className='bg-[url(/assets/images/slider-bg.png)] bg-cover bg-center bg-no-repeat  min-h-[300px] md:min-h-[448px]'>
                                                                        <div className=' py-[133px]'>
                                                                                <p className=' text-center font-Poppins font-medium text-lg md:text-xl text-white pb-[15px] capitalize '>2nd phase<span className='block'>"The not-wanting-to-be-true"</span></p>
                                                                                <p className=' mx-auto text-center text-white font-Poppins font-normal text-sm md:text-base max-w-[364px]'>This phase is characterized by denial and ignoring the final separation.</p>
                                                                        </div>
                                                                </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                                <div className='bg-[url(/assets/images/slider-bg.png)] bg-cover bg-center bg-no-repeat  min-h-[300px] md:min-h-[448px]'>
                                                                        <div className=' py-[133px]'>
                                                                                <p className=' text-center font-Poppins font-medium text-lg md:text-xl text-white pb-[15px] capitalize '>3rd phase<span className='block'>"The not-wanting-to-be-true"</span></p>
                                                                                <p className=' mx-auto text-center text-white font-Poppins font-normal text-sm md:text-base max-w-[364px]'>This phase is characterized by denial and ignoring the final separation.</p>
                                                                        </div>
                                                                </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                                <div className='bg-[url(/assets/images/slider-bg.png)] bg-cover bg-center bg-no-repeat  min-h-[300px] md:min-h-[448px]'>
                                                                        <div className=' py-[133px]'>
                                                                                <p className=' text-center font-Poppins font-medium text-lg md:text-xl text-white pb-[15px] capitalize '>4th phase<span className='block'>"The not-wanting-to-be-true"</span></p>
                                                                                <p className=' mx-auto text-center text-white font-Poppins font-normal text-sm md:text-base max-w-[364px]'>This phase is characterized by denial and ignoring the final separation.</p>
                                                                        </div>
                                                                </div>
                                                        </SwiperSlide>
                                                </Swiper>
                                                <span className=' absolute bottom-[7%] md:bottom-[3%] left-[-6%] arrow-left arrow z-50 cursor-pointer'><Arrowleft/></span>
                                                <span className=' absolute left-[3%] bottom-[7%] md:bottom-[3%] arrow-right arrow cursor-pointer z-50'><Arrowright/></span>
                                        </div>

                                </div>
                        </div>
                </div>
        )
}

export default Mindsetsection
