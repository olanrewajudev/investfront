import React, { useEffect, useState } from 'react'
import { AiOutlineGooglePlus } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { TbBrandGmail } from 'react-icons/tb'
import { headerFirstLink, headerSecondLink } from '../utils/utils'
import { Link } from 'react-router'
import Image from '../general/image'

export default function UserHeader() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 55) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div>
      {/* unfixed header */}
      <div className="">
        <div className="flex items-center justify-between px-32 bg-neutral-900 text-white py-3 font-medium">
          <div className="gap-10 flex">
            {headerFirstLink.map((item, i: number) => (
              <Link key={i} to={item.href} className='hover:text-yellow'>{item.title}</Link>
            ))}
          </div>
          <div className="flex gap-5 text-2xl "><FaFacebookF /><BsInstagram /><AiOutlineGooglePlus /><TbBrandGmail /></div>
        </div>
      </div>

      {/* fixed header */}
      <div className={`flex items-center justify-between text-center bg-white shadow-2xl py-5 px-32  z-99 w-full ${scroll ? 'fixed -mt-12' : 'py-5'}`}>
        <div className=""> <Image src='/general/logo.png' alt="Cryptocoin" className="w-[15rem]" /> </div>
        <div className="gap-10 flex font-medium  justify-center items-center">
          {headerSecondLink.map((item, i: number) => (
            <Link key={i} to={item.href} className='hover:text-yellow'>{item.title}</Link>
          ))}
          <div className="bg-neutral-900 text-white px-6 py-2.5 rounded-full hover:bg-yellow hover:text-black">Get Started</div>
        </div>
      </div>
    </div>
  )
}
