import React from 'react'
import { Link } from 'react-router'
import Image from '~/components/general/image'
import banner from '../../../public/general/photo-md-a.jpg'

export default function Aboutus() {
  return (
    <div>
      <div className="">
        <div className="relative">
          <Image src={banner} className='h-[18rem] lg:h-[30rem] brightness-50 w-full object-cover object-left-bottom' />
          <div className="absolute inset-0 text-white flex items-center justify-center text-center flex-col">
            <p className="font-semibold text-[3rem] lg:text-[4rem]">About Us</p>
            <div className="flex items-center gap-2 font-medium mt-3">
              <Link to='' className='hover:text-yellow'>Home</Link> / <div className="">About Us  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
