"use client"
import React, { useState } from 'react'
import { Navicon } from './Icon'

const Navsection = () => {
        const [first, setfirst] = useState(false);
        function MobileView() {
                setfirst(!first);
                if (first === false) {
                        document.body.classList.add("overflow");
                } else {
                        document.body.classList.remove("overflow");
                }
        }
        return (
                <div className=' pt-6 absolute top-0  left-0 w-full'>
                        <div className=' container mx-auto px-3'>
                                <div className=' flex items-center justify-between'>
                                        <div>
                                                <a href=""><Navicon /></a>
                                        </div>
                                        <ul onClick={MobileView} className={`${first ? "left-0" : "left-[-100%]"} flex items-center duration-300 justify-center gap-10 max-lg:flex-col max-lg:w-full max-lg:h-full max-lg:fixed max-lg:top-0 max-lg:z-20 max-lg:bg-blue-900 max-lg:over `}>
                                                <li onClick={() => setfirst(false)} className=' text-sm md:text-base font-normal text-white after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-[#0C5FD1] ff-neue'><a href="#benifits">Benifits</a></li>
                                                <li onClick={() => setfirst(false)} className=' text-sm md:text-base font-normal text-white after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-[#0C5FD1] ff-neue'><a href="#testimonials">Testimonials</a></li>
                                                <li onClick={() => setfirst(false)} className=' cursor-pointer duration-300 hover:scale-95 bg-gradient-to-br to-[#0C5FD1] to-1.25%%  from-[#8703C5] from-93.71% font-Inter font-medium text-sm md:text-base py-4 px-7 text-white capitalize hover:shadow-2xl hover:shadow-blue-800' >Book consultation now</li>
                                        </ul>
                                        <label className=" lg:hidden" onClick={MobileView}>
                                                {first ? (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-black absolute -left-7 duration-300 rounded-lg top-1 rotate-45 h-[3px] w-6"></span>
                                                                <span className="flex bg-black absolute -left-7 duration-300 rounded-lg -rotate-45 h-[3px] w-6 mt-1"></span>
                                                        </div>
                                                ) : (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-black h-[3px] rounded-xl duration-300 w-6 "></span>
                                                                <span className="flex bg-black h-[3px] rounded-xl duration-300 w-6 my-1"></span>
                                                                <span className="flex bg-black h-[3px] rounded-xl duration-300 w-6 "></span>
                                                        </div>
                                                )}
                                        </label>
                                </div>
                        </div>
                </div>
        )
}

export default Navsection
