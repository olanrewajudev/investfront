import { AiOutlineGooglePlus } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
 import { Link } from 'react-router'
import Image from '~/components/general/image'
import banner from '../../../public/general/inside-bg.jpg'
import { team } from '~/components/utils/utils'

export default function Team() {
  return (
    <div>
      <div className="">
        <div className="relative">
          <Image src={banner} className='h-[18rem] lg:h-[30rem] brightness-50 w-full object-cover object-left-bottom' />
          <div className="absolute inset-0 text-white flex items-center justify-center text-center flex-col">
            <p className="font-medium text-[3rem] lg:text-[4rem]">Expert Team</p>
            <div className="flex items-center gap-2 font-medium mt-3">
              <Linked to='' className='hover:text-yellow'>Home</Linked> / <div className="">Team  </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-6 lg:p-12 ">
        {team.map((item, i: number) => (
          <div className="flex items-center justify-center flex-col text-center" key={i}>
            <Image src={item.icon} className='w-[25rem] object-cover' />
            <div className="bg-yellow w-full rounded-full mt-5">
              <div className="pt-5">
                <b className="text-[1.6rem]">{item.name}</b>
                <p className="mt-3 text-lg font-semibold">{item.role}</p>
              </div>
              <div className="text-center flex items-center justify-center gap-7 mb-4 text-[1.5rem] mt-4">
                 <span className="bg-white/20 backdrop-blur-xl rounded-full p-4 hover:text-white transition-all ease-in-out"><CgFacebook className="" /></span>
                <span className="bg-white/20 backdrop-blur-xl rounded-full p-4 hover:text-white transition-all ease-in-out"><BsInstagram /></span>
                <span className="bg-white/20 backdrop-blur-xl rounded-full p-4 hover:text-white transition-all ease-in-out"><AiOutlineGooglePlus /></span>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
