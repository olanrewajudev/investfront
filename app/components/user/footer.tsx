import { TbBrandGmail } from "react-icons/tb";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import React from 'react'
import footerbg from '/public/general/footer.png'
import Image from '../general/image'
import { footerAddress, footersLink, recentBlogPosts } from '../utils/utils'
import { Link } from 'react-router'
export default function UserFooter() {
  const date = new Date()
  const fullYear = date.getFullYear()

  return (
    <div className="">
      <div className='bg-neutral-900 relative'>
        <Image src={footerbg} className='w-full h-[25rem] object-cover' alt=""  style={{ zIndex: 0 }} />
        <div className="absolute inset-0 z-10 flex flex-wrap items-start justify-center pt-20 bg-black/50 gap-32">
          {footersLink.map((_item, i: number) => (
            <div className="" key={i}>
              <div className="text-white text-lg font-semibold">{_item.title}</div>
              <div className="text-white grid grid-cols-1 gap-5 mt-4 text-base font-semibold">
                {_item.links.map((link, i: number) => (
                  <Link key={i} to={link.href}>{link.name}</Link>
                ))}
              </div>
            </div>
          ))}

          <div className="">
            <div className="text-white text-lg font-semibold mb-4">RECENT BLOG</div>
            {recentBlogPosts.map((_item, i: number) => (
              <div className="mb-4" key={i}>
                <div className="flex gap-2 ">
                  <Image src={_item.image} className="w-20 h-16 object-cover rounded-tl-lg rounded-br-lg" />
                  <div className="flex-col">
                    <div className="text-white font-semibold text-base">{_item.title}</div>
                    <div className="text-white  text-base">{_item.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-white text-base font-semibold">
            <div className="text-white text-lg font-semibold c">GET IN TOUCH</div>
            <div className="flex gap-2 items-center"><CiLocationOn size={32} />{footerAddress.address}</div>
            <div className="flex gap-2 items-center my-7"><BiPhone size={32} /><div className="">Telphone: {footerAddress.phone2} <br />Telphone: {footerAddress.phone2}</div></div>
            <div className="flex gap-2 items-center"><BsGlobe size={32} /><div className="">Email: {footerAddress.email} <br />Support: {footerAddress.support}</div></div>
          </div>
        </div>

      </div>
      <div className="bg-black flex  justify-between items-center px-32 text-white py-4">
        <div className="text-md font-semibold">Copyright © {fullYear} CryptoCoin.</div>
        <div className="flex gap-5 text-2xl"><FaFacebookF /><BsInstagram /><AiOutlineGooglePlus /><TbBrandGmail /></div>
      </div>  
    </div>
  )
}
