import React from 'react'
import Image from "next/image";
import flowerget from '../../../public/assets/images/get-flower.png'
import Message from '../../../public/assets/images/message.png'

const Getsection = () => {
  return (
    <div className=' pt-[122px]'>
      <div className=' relative container mx-auto px-3'>
      <div className=' absolute right-[9%] md:right-0 top-[-4%] md:top-[-6%] lg:top-[-28%] ml-10'>
            <p className=' inline-block font-Poppins font-light text-xl text-black -rotate-90 mb-[11px] ml-[70%]'>MJH</p>
            <div className=' flex'>
              <div className=' flex items-end'>
                <p className='ff-neue font-normal text-[25px] md:text-[40px] leading-[40px] md:leading-[51px] rotate-90 mb-[-10%]'>02</p>
              </div>
              <div className=' border-r-2 border-b-2 border-[#F77B0B] h-[35px] md:h-[269px] w-[26px]'>
              </div>

            </div>
          </div>
        <div className=' flex flex-col justify-center mx-auto'>
          <div className=' flex items-center flex-col lg:flex-row '>
            <div className=' flex flex-col'>
              <h3 className=' uppercase ff-neue font-normal text-[35px] md:text-[52px] leading-[44px] md:leading-[66px]'>what you </h3>
              <h2 className=' uppercase ff-neue font-normal text-4xl md:text-6xl text-black'>will <span className=' text-[#F77B0B]'>get</span></h2>
            </div>
            <Image className='ml-3 mr-[18px]' src={flowerget} alt='#' width={224} height={216} />
            <div className=' border-l-2 border-solid border-[#9800B0]'>
              <p className='max-w-[434px] pl-[11px] font-normal text-sm md:text-base font-Poppins '>I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.</p>
            </div>
          
          </div>
          <p className='pt-[47px] text-center ff-neue font-bold pb-7 text-xl text-black'>In a 1:1 live coaching session, we will clarify the following questions in particular:</p>
          <div className=' flex flex-col lg:flex-row items-center'>
            <div className=' mt-[-6%] mr-[-6%] pb-2 pt-2'>
              <p className=' inline-block font-Poppins font-light text-xl text-black -rotate-90 ml-[-20px] mb-[11px]'>MJH</p>
              <div className=' flex'>
                <div className=' border-s-2 border-b-2 border-[#F77B0B] h-[35px] md:h-[588px] w-[26px]'>
                </div>
                <div className=' flex items-end'>
                  <p className='ff-neue font-normal text-[25px] md:text-[40px] leading-[40px] md:leading-[51px] -rotate-90 mb-[-10%]'>03</p>
                  <p className=' ff-neun font-normal text-lg md:text-2xl text-black uppercase mb-[-10%]'>goal</p>
                </div>
              </div>
            </div>
            <div>
              <div className='grid lg:grid-cols-3'>
                <div className=' duration-300 hover:bg-[#F5FAFF] px-[40px] md:px-[48.5px] pt-[63px] pb-[115px] max-w-[380px]'>
                  <p className=' font-Poppins font-normal text-sm md:text-base text-black max-w-[283px] duration-300 hover:text-[#003E92] '>Why does your EX have to disappear from your life forever?
                  </p>
                </div>
                <div className=' duration-300 hover:bg-[#F5FAFF] px-[40px] md:px-[48.5px] py-[63px] max-w-[380px]'>
                  <p className=' font-Poppins font-normal text-sm md:text-base text-black max-w-[283px] duration-300 hover:text-[#003E92]'>What should your everyday life as a single person look like now and how can you cope with the new challenges?
                  </p>
                </div>
                <div className=' duration-300 hover:bg-[#F5FAFF] px-[40px] md:px-[48.5px] py-[63px] max-w-[380px]'>
                  <p className=' font-Poppins font-normal text-sm md:text-base text-black max-w-[283px] duration-300 hover:text-[#003E92]'>How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?
                  </p>
                </div>
              </div>
              <div className=' grid lg:grid-cols-3'>
                <div className=' duration-300 hover:bg-[#F5FAFF] px-[40px] md:px-[48.5px] pt-[88px] pb-[115px] max-w-[380px]'>
                  <p className=' font-Poppins font-normal text-sm md:text-base text-black max-w-[283px] duration-300 hover:text-[#003E92]'>Who are you without your EX?
                  </p>
                </div>
                <div className=' duration-300 hover:bg-[#F5FAFF] px-[40px] md:px-[48.5px] py-[88px] max-w-[380px]'>
                  <p className=' font-Poppins font-normal text-sm md:text-base text-black max-w-[283px] duration-300 hover:text-[#003E92]'>What new dreams and hopes do you want to live?
                  </p>
                </div>
                <div className=' flex justify-center items-center mx-auto'>
                  <div className=' flex gap-1 items-center border-[1.7px] border-solid border-[#0C5FD1] rounded-[8px] py-[18px] pl-[9px] pr-[23px] cursor-pointer duration-300 hover:scale-95 hover:shadow-2xl hover:shadow-blue-800'>
                    <Image src={Message} alt='#' width={50} height={47} />
                    <p className=' text-g font-Inter font-medium text-sm md:text-base max-w-[203px] duration-300 hover:text-[#003E92]'>Book a non-binding initial consultation now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Getsection
