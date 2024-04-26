import React from 'react'
import Image from "next/image";
import Message from '../../../public/assets/images/message.png'

const Bindingsection = () => {
        return (
                <div className='bg-[#F2F8FF] '>
                        <div className=' container px-3 mx-auto'>
                                <div className=' flex flex-col lg:flex-row items-center justify-between pt-[30px] md:pt-[71px] pb-[30px] md:pb-[59px]'>
                                        <div>
                                                <h3 className=' uppercase ff-neue font-normal text-[35px] md:text-[52px] leading-[44px] md:leading-[66px]'>Request your </h3>
                                                <h3 className=' uppercase ff-neue font-normal text-[35px] md:text-[52px] leading-[44px] md:leading-[66px]'><span className='text-[#F77B0B]'>non-binding</span> strategy</h3>
                                                <h3 className=' uppercase ff-neue font-normal text-[35px] md:text-[52px] leading-[44px] md:leading-[66px]'>meeting now!</h3>
                                                
                                        </div>
                                        <div className=''>
                                                <div className=' border-l-2 border-solid border-[#9800B0] lg:ml-[129px]'>
                                                        <p className='max-w-[413px] pl-[11px] font-normal text-sm md:text-base font-Poppins capitalize '>Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics: 
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className='bg-[url(/assets/images/binding-bg-img.png)] bg-cover bg-center bg-no-repeat'>
                        <div className=' container mx-auto px-3 pt-[30px] md:pt-[70px] lg:pt-[111px] pb-[30px] md:pb-[90px] lg:pb-[186px] '>
                                        <div className=' flex items-center justify-center flex-col md:flex-row'>
                                                <div className='w-[250px] h-[150px] md:h-[200px] bg-[#FFFFFF26] flex items-center justify-center cursor-pointer duration-300 hover:bg-[#003E92]'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[38.5px] font-Poppins font-normal text-sm md:text-base'>How do I let go of my EX so I can finally leave him behind?</p>
                                                        </div>
                                                </div>
                                                <div className='w-[250px] h-[150px] md:h-[200px] bg-[#FFFFFF26] flex items-center justify-center cursor-pointer duration-300 hover:bg-[#003E92]'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[38.5px] font-Poppins font-normal text-sm md:text-base'>How does the divorce process work?</p>
                                                        </div>
                                                </div>
                                                <div className='w-[250px] h-[150px] md:h-[200px] bg-[#FFFFFF26] flex items-center justify-center cursor-pointer duration-300 hover:bg-[#003E92]'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[38.5px] font-Poppins font-normal text-sm md:text-base'>Do I need a lawyer?</p>
                                                        </div>
                                                </div>
                                                
                                        </div>
                                        <div className=' flex items-center justify-center mt-3 md:mt-[34px] flex-col md:flex-row'>
                                                <div className='w-[250px] h-[150px] md:h-[200px] bg-[#FFFFFF26] flex items-center justify-center cursor-pointer duration-300 hover:bg-[#003E92]'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[38.5px] font-Poppins font-normal text-sm md:text-base'>How much will the divorce cost?</p>
                                                        </div>
                                                </div>
                                                <div className='w-[250px] h-[150px] md:h-[200px] bg-[#FFFFFF26] flex items-center justify-center cursor-pointer duration-300 hover:bg-[#003E92]'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[38.5px] font-Poppins font-normal text-sm md:text-base'>What will happen to my children?</p>
                                                        </div>
                                                </div>
                                                <div className='w-[250px] h-[150px] md:h-[200px] bg-[#FFFFFF26] flex items-center justify-center cursor-pointer duration-300 hover:bg-[#003E92]'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[38.5px] font-Poppins font-normal text-sm md:text-base'>What does my future as a single person look like now?</p>
                                                        </div>
                                                </div>
                                                <div className='w-[250px] h-[150px] md:h-[200px] bg-[#FFFFFF26] flex items-center justify-center cursor-pointer duration-300 hover:bg-[#003E92]'>
                                                        <div className=' flex items-center justify-center'>
                                                                <p className=' text-white mx-auto px-[38.5px] font-Poppins font-normal text-sm md:text-base'>How do I rebuild my self-esteem?</p>
                                                        </div>
                                                </div>
                                                
                                        </div>
                                        <div className=' pt-[12px] md:pt-[58px] flex items-center justify-center'>
                                        <div className=' flex max-w-[452px] gap-1 items-center border-[1.7px] border-solid border-[#0C5FD1] bg-white rounded-[63px] py-[5.83px] pl-[9px] pr-[9px] md:pr-[48px] cursor-pointer duration-300 hover:scale-95 hover:shadow-2xl hover:shadow-white'>
                                                        <Image src={Message} alt='#' width={50} height={47} />
                                                        <p className=' text-g font-Inter font-medium text-sm md:text-base'>Book a non-binding initial consultation now</p>
                                                </div>
                                        </div>
                                        
                                </div>
                        </div>
                </div>
        )
}

export default Bindingsection
