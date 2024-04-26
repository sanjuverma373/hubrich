import React from 'react'
import flowerget from '../../../public/assets/images/get-flower.png'
import leftflower from '../../../public/assets/images/flower-l.png'
import rightflower from '../../../public/assets/images/flower-r.png'
import Image from 'next/image'

const Getsection = () => {
  return (
    <div className=' pt-[122px] relative'>
      <Image className=' absolute right-0 top-[25%]' src={rightflower} alt="rightflower" />
      <div className=' container mx-auto px-3'>
        <div className=' flex flex-wrap items-center justify-center '>
          <div className=' flex flex-col'>
            <h3 className=' uppercase ff-neue font-normal text-[35px] md:text-[52px] leading-[44px] md:leading-[66px]'>what you </h3>
            <h2 className=' uppercase ff-neue font-normal text-4xl md:text-6xl text-black'>will <span className=' text-[#F77B0B]'>get</span></h2>
          </div>
          <Image className='ml-3 mr-[18px]' src={flowerget} alt='#'/>
          <div className=' border-l-2 border-solid border-[#9800B0]'>
            <p className='max-w-[434px] pl-[11px] font-normal text-sm md:text-base font-Poppins '>I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.</p>
          </div>
          <div className=' ml-10 mt-[-28%] hidden sm:block'>
            <p className=' inline-block font-Poppins font-light text-lg md:text-xl text-black -rotate-90 mb-[11px] md:ml-[70%] ml-[92%]'>MJH</p>
            <div className=' flex'>
              <div className=' flex items-end'>
                <p className='font-Helvetica font-normal text-[40px] leading-[51px] md:rotate-90 mb-[-10%]'>02</p>
              </div>
              <div className=' border-r-2 border-b-2 border-[#F77B0B] md:h-[269px] h-[26px] md:w-[26px] w-[269px]'>
              </div>
            </div>
          </div>
        </div>
        <p className='pt-[47px] text-center font-Helvetica font-bold pb-7 text-lg md:text-xl text-black'>In a 1:1 live coaching session, we will clarify the following questions in particular:</p>
        <div className=' flex items-center justify-center'>
          <div className=' mt-[-6%] mr-[-6%] hidden sm:block'>
            <p className=' inline-block font-Poppins font-light text-lg md:text-xl text-black -rotate-90 ml-[-20px] mb-[11px]'>MJH</p>
            <div className=' flex'>
              <div className=' border-s-2 border-b-2 border-[#F77B0B] h-[588px] w-[26px]'>
              </div>
              <div className=' flex items-end'>
                <p className='font-Helvetica font-normal text-[40px] leading-[51px] -rotate-90 mb-[-10%]'>03</p>
                <p className=' ff-neun font-normal text-lg md:text-2xl text-black uppercase mb-[-10%]'>goal</p>
              </div>        
            </div>
          </div>
          <div>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center'>
              <div className=' duration-300 hover:bg-[#F5FAFF] px-[48.5px] md:pt-[63px] pt-[20px] md:pb-[115px] pb-[20px] sm:w-[380px]'>
                <p className=' font-Poppins font-normal text-sm md:text-base text-black max-w-[283px] duration-300 hover:text-[#003E92] '>Why does your EX have to disappear from your life forever?
                </p>
              </div>
              <div className=' duration-300 hover:bg-[#F5FAFF] px-[48.5px] md:py-[63px] py-[20px] sm:w-[380px]'>
                <p className=' font-Poppins font-normal text-sm md:text-base text-black max-w-[283px] duration-300 hover:text-[#003E92]'>What should your everyday life as a single person look like now and how can you cope with the new challenges?
                </p>
              </div>
              <div className=' duration-300 hover:bg-[#F5FAFF] px-[48.5px] md:py-[63px] py-[20px] sm:w-[380px] lg:mx-auto '>
                <p className=' font-Poppins font-normal text-sm md:text-base text-black max-w-[283px] duration-300 hover:text-[#003E92]'>How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?
                </p>
              </div>
            </div>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center '>
              <div className=' duration-300 hover:bg-[#F5FAFF] px-[48.5px] md:pt-[88px] pt-[20px] md:pb-[115px] pb-[20px] sm:w-[380px] sm:flex'>
                <p className=' font-Poppins font-normal text-sm md:text-base text-black max-w-[283px] duration-300 hover:text-[#003E92]'>Who are you without your EX?

                </p>
              </div>
              <div className=' duration-300 hover:bg-[#F5FAFF] px-[48.5px] md:py-[63px] py-[20px] sm:w-[380px] z-10'>
                <p className=' font-Poppins font-normal text-sm md:text-base text-black max-w-[283px] duration-300 hover:text-[#003E92]'>What new dreams and hopes do you want to live?
                </p>
              </div>
              <div className=' flex mx-auto'>
                <div className=' flex gap-1 items-center border-[1.7px] border-solid border-[#0C5FD1] rounded-[8px] py-[18px] pl-[9px] pr-[23px]'>
                  <Image/>
                  <p className=' text-g font-Inter font-medium text-sm md:text-base max-w-[203px] duration-300 hover:text-[#003E92]'>Book a non-binding initial consultation now</p>
                </div>
              </div>
              <span>
                <Image className=' absolute left-0 bottom-[1%]' src={leftflower} alt="leftflower" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Getsection
