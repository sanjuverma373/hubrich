import React from 'react'
import Image from "next/image";
import Message from '../../../public/assets/images/message.png'
import { Faultimg } from './Icon';

const Faultsection = () => {
        return (
                <div className=' relative z-10 overflow-x-clip'>
                        <div className=' container mx-auto px-3'>
                                <div className=' mt-[5%] lg:mt-[-6%]'>
                                        <p className=' inline-block font-Poppins font-light text-lg md:text-xl text-black -rotate-90 ml-[-20px] mb-[11px]'>MJH</p>
                                        <div className=' flex'>
                                                <div className=' border-s-2 border-b-2 border-[#F77B0B] h-[35px] md:h-[269px] w-[26px]'>
                                                </div>
                                                <div className=' flex items-end'>
                                                        <p className='ff-neue font-normal text-[25px] md:text-[40px] leading-[40px] md:leading-[51px] -rotate-90 mb-[-10%]'>01</p>
                                                        <p className=' ff-neun font-normal text-lg md:text-2xl text-black uppercase mb-[-10%]'>fault</p>
                                                </div>
                                        </div>
                                </div>
                                <div className='flex-col lg:flex-row flex items-center justify-center gap-3 md:gap-[61px] pb-3 md:pb-[58px]'>
                                        <div className='flex flex-col pt-3 lg:pt-0'>
                                                <h2 className=' font-normal text-4xl md:text-6xl text-black ff-neue'>IT'S NOT</h2>
                                                <h2 className='font-normal ml-[73px] text-4xl md:text-6xl text-black ff-neue'><span className=' text-[#F77B0B]'>YOUR</span> FAULT!</h2>
                                        </div>
                                        <div className=' border-l-2 border-solid border-[#9800B0]'>
                                                <p className='max-w-[288px] pl-[11px] font-normal text-sm md:text-base font-Poppins'>It's not your fault for not knowing how to let go of the partner who no longer made you feel special.</p>
                                        </div>
                                </div>
                                <p className=' text-center font-bold text-lg md:text-xl text-black ff-neue pb-[34px] capitalize'>How would you know when you are busy with completely different things at the moment:</p>
                        </div>
                        <div className='bg-[url(/assets/images/fault-bg-img.png)] bg-cover bg-center bg-no-repeat mb-[47px]'>
                                <div className=' container mx-auto px-40 '>
                                        <div className=' flex-col lg:flex-row flex items-center justify-end'>
                                                <div className='w-[250px] h-[100px] md:h-[162px] bg-[#003E92] opacity-25 flex items-center justify-center duration-300 hover:opacity-100 cursor-pointer mt-[12px] lg:mt-0'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[38.5px] font-Poppins font-normal text-sm md:text-base'>Your self-esteem is in the basement.</p>
                                                        </div>
                                                </div>
                                                <div className='w-[250px] h-[100px] md:h-[162px] bg-[#003E92] opacity-25 flex items-center justify-center duration-300 hover:opacity-100 cursor-pointer mt-[12px] lg:mt-0'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[26.5px] font-Poppins font-normal text-sm md:text-base'>You keep asking yourself what you did wrong.
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className='w-[250px] h-[100px] md:h-[162px] bg-[#003E92] opacity-25 flex items-center justify-center duration-300 hover:opacity-100 cursor-pointer mt-[12px] lg:mt-0'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[38.5px] font-Poppins font-normal text-sm md:text-base'>The feeling of helplessness is your constant companion.</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className=' flex-col lg:flex-row flex items-center lg:pt-[29px]'>
                                                <div className='w-[250px] h-[100px] md:h-[162px] bg-[#003E92] opacity-25 flex items-center justify-center duration-300 hover:opacity-100 cursor-pointer mt-[12px] lg:mt-0'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[38.5px] font-Poppins font-normal text-sm md:text-base'>You spend the nights alone and lonely.
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className='w-[250px] h-[100px] md:h-[162px] bg-[#003E92] opacity-25 flex items-center justify-center duration-300 hover:opacity-100 cursor-pointer mt-[12px] lg:mt-0'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[26.5px] font-Poppins font-normal text-sm md:text-base'>You have stopped going out and spend the time crying in your room.
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className='w-[250px] h-[100px] md:h-[162px] bg-[#003E92] opacity-25 flex items-center justify-center duration-300 hover:opacity-100 cursor-pointer mt-[12px] lg:mt-0'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[38.5px] font-Poppins font-normal text-sm md:text-base'>An emotional chaos is raging inside you.</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <p className=' text-black mx-auto px-[38.5px] font-Poppins font-normal text-center text-sm md:text-base pb-[20px]'>You are not alone! Numerous women before you stood exactly at this point, where you are now.</p>
                        <div className=' flex justify-center'>
                                <div className=' flex gap-1 items-center border-[1.7px] border-solid border-[#0C5FD1] rounded-[63px] py-[5.83px] pl-[9px] pr-[48px] cursor-pointer duration-300 hover:scale-95 hover:shadow-2xl hover:shadow-blue-800'>
                                        <Image src={Message} alt='#' width={50} height={47} />
                                        <p className=' text-g font-Inter font-medium text-sm md:text-base capitalize'>Book a non-binding initial consultation now</p>
                                </div>
                        </div>
                        <span className=' -z-10 top-[5%] right-0 absolute'><Faultimg /></span>
                </div>
        )
}

export default Faultsection
