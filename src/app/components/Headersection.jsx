import React from 'react'
import Navsection from './Navsection'
import Image from "next/image";
import Message from '../../../public/assets/images/message.png'
import { Callicon } from './Icon';

const Headersection = () => {
  return (
    <div className='bg-[url(/assets/images/hero-bg.png)] bg-cover bg-right bg-no-repeat min-h-screen flex-grow-1 relative flex flex-col items-center justify-center'>
      <Navsection />
      <div className=' container mx-auto px-3'>
        <div className=' grid lg:grid-cols-2 h-[90vh] gap-4 lg:gap-[222px]'>
          <div className=' flex flex-col justify-center'>
            <p className=' font-normal text-base md:text-lg text-[#F77B0B] capitalize ff-neue'>Marc joachim hubrich</p>
            <h1 className=' font-normal text-4xl md:text-6xl leading-[60px] md:leading-[77px] text-black max-w-[432px] capitalize pb-[7px] ff-neue'>NOW I lET YOU GO!</h1>
            <p className=' max-w-[517px] font-Poppins font-normal text-sm md:text-base text-[#4D4D4D] pb-[32px]'>For women who do not want to be completely dragged down by a SEPARATION.
              <span className=' block'>
                How to let go of your EX so you can leave him behind
                without
              </span> having to run to a therapist right away.</p>
            <div className=' flex items-center gap-2 md:gap-[17px] '>
              <div className=' flex gap-1 items-center border-[1.7px] border-solid border-[#0C5FD1] rounded-[63px] py-[5.83px] pl-[9px] pr-[48px] cursor-pointer duration-300 hover:scale-95 hover:shadow-2xl hover:shadow-blue-800 '>
                <Image className=' w-[30px] md:w-[50px]' src={Message} alt='#' width={50} height={47} />
                <p className=' text-g font-Inter font-medium text-sm md:text-base capitalize'>Book a non-binding initial consultation now</p>
              </div>
              <span className=' cursor-pointer duration-300 hover:animate-bounce'><Callicon /></span>
            </div>
          </div>
          <div className=' flex lg:items-end '>
            <div className=' flex items-center '>
              <div className=' border-l-2 border-solid border-[#9800B0] flex'>
                <p className=' text-white max-w-[154px] pl-[13px] font-normal text-sm md:text-base ff-neue uppercase'>Die wichtigsten Aspekte einer Trennung:</p>

                <ul className=' pl-1 md:pl-10'>
                  <li className=' text-white font-Poppins text-sm md:text-base font-medium list-disc pb-[2px]'>Physische Trennung</li>
                  <li className=' text-white font-Poppins text-sm md:text-base font-medium list-disc'>mentale Trennung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headersection
