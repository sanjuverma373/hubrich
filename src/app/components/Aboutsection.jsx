import React from 'react'
import Image from "next/image";
import Aboutimg from '../../../public/assets/images/about-img.png'
import Imgelips from '../../../public/assets/images/imgelips.png'
import { Right } from './Icon';

const Aboutsection = () => {
        return (
                <div id='testimonials' className=' pt-3'>
                        <div className=' container mx-auto px-3'>
                                <div className=''>
                                        <div className=' flex pb-3 lg:pb-[52px]'>
                                                <div className=' border-s-2 border-b-2 border-[#F77B0B] h-[35px] md:h-[174px] w-[16px] md:w-[26px]'>
                                                </div>
                                                <div className=' flex items-end'>
                                                        <p className='ff-neue font-normal text-[25px] md:text-[40px] leading-[40px] md:leading-[51px] -rotate-90 mb-[-10%]'>05</p>
                                                        <p className=' ff-neue font-normal text-lg md:text-2xl text-black uppercase mb-[-10%]'>about</p>
                                                </div>

                                        </div>
                                </div>
                                <div className=' grid lg:grid-cols-2 gap-3 lg:gap-[58px]'>
                                        <div>
                                                <Image className=' w-full' src={Aboutimg} alt='#' width={559} height={574} />
                                        </div>
                                        <div>
                                                <h3 className=' ff-neue text-[35px] md:text-[52px] font-normal leading-[44px] md:leading-[66px] max-w-[523px] uppercase'>LAWYER <span className=' text-[#F77B0B]'>&</span> DIVORCE COACH</h3>
                                                <h3 className=' ff-neue font-normal text-3xl md:text-4xl uppercase pb-3 md:pb-[30px]'><span className='text-[#F77B0B]'>M</span>arc <span className='text-[#F77B0B]'>J</span>oachim <span className='text-[#F77B0B]'>H</span>ubrich</h3>
                                                <p className=' ff-neue font-bold text-lg md:text-xl capitalize pb-3 text-black'>About the mindset agency coach</p>
                                                <p className=' font-Poppins font-normal text-sm md:text-base text-[#4D4D4D] pb-3 md:pb-[35px] max-w-[448px]'>Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</p>
                                                <div className=' gap-1 md:gap-3 items-center max-w-[350px] flex border-[1.7px] rounded-[39px] border-solid border-[#0C5FD1] py-[16px] px-[24px] cursor-pointer duration-300 hover:scale-95 hover:shadow-2xl hover:shadow-blue-800 group'>
                                                        <p className=' text-g font-Inter font-normal text-sm md:text-base capitalize'>Learn more about the agency</p>
                                                        <span className=' group-hover:ml-3 duration-300'><Right /></span>
                                                </div>

                                                <Image className=' w-full' src={Imgelips} alt='#' width={738} height={211.63} />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Aboutsection
