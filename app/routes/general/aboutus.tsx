import React from 'react'
import { Link } from 'react-router'
import Image from '~/components/general/image'
import banner from '../../../public/general/inside-bg.jpg'
import video from '../../../public/general/video-md.jpg'
import { FaPlay, FaRegCheckCircle } from 'react-icons/fa'
import { CiPlay1 } from 'react-icons/ci'
import { about, chooseus, clientsLogo } from '~/components/utils/utils'

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

      <div className="">

        <div className="lg:flex items-center justify-between gap-10 my-20 w-[80%] mx-auto">
          <div className="">
            <b className="text-[2.5rem]">About Crypto<span className="text-yellow">Coin</span></b>
            <p className="my-5">Lorem ipsum dolor sit amet, ac donec hendrerit mi, fermentum ultricies, pellentesque harum luctus ut varius. Maecenas lacust ipsum mi</p>
            <div className="text-lg ">
              <h3 className='flex items-center gap-2 pb-3'> <span className="text-yellow"> <FaRegCheckCircle /> </span> you can exchange your bitcoin by eth. </h3>
              <h3 className='flex items-center gap-2 pb-3'> <span className="text-yellow"><FaRegCheckCircle /></span> best profite bitco.exge for all over the world.</h3>
              <h3 className='flex items-center gap-2 pb-3'> <span className="text-yellow"> <FaRegCheckCircle /> </span> we take a big missoin for growth business.</h3>
              <h3 className='flex items-center gap-2 pb-3'> <span className="text-yellow"> <FaRegCheckCircle /> </span> we have top lavel bitcoin experts</h3>
            </div>
          </div>

          <div className="relative flex items-center justify-center mt-10 lg:mt-0">
            <Image src={video} className="w-full" />
            <a href='https://www.youtube.com/watch?v=Ig6e5HxLFH4' target='_blank' className="absolute inset-0 flex items-center justify-center"><div className="bg-yellow rounded-full p-3 w-fit h-fit flex items-center justify-center text-white text-lg"><FaPlay /></div></a>
          </div>
        </div>

        <div className=" bg-black/10 py-32 my-32">
          <div className="w-[80%] mx-auto">
            <div className="flex items-center justify-center flex-col text-center mb-20">
              <b className="text-[3rem]">Why choose Us</b>
              <p className="mt-4">Sed ut perspi ciatis unde omnis iste natus error sit volup tatem accusa ntium dolor emque lauda ntium, totam rem aperiam</p>
            </div>

            <div className="lg:flex text-center gap-10">
              {chooseus.map((item, i: number) => (
                <div className="flex items-center justify-center flex-col mb-12" key={i}>
                  <Image src={item.icon} className='w-20 pb-2' />
                  <b className="text-[1.5rem]">{item.title}</b>
                  <p className="pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="w-[85%] mx-auto ">
          <div className="flex items-center justify-center flex-col text-center mb-20">
            <b className="text-[3rem]">what you can do ?</b>
            <p className="mt-4">Sed ut perspi ciatis unde omnis iste natus error sit volup tatem accusa ntium dolor emque lauda ntium, totam rem aperiam</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 text-center">
            {about.map((item, i: number) => (
              <div className="flex items-center justify-center flex-col mb-12" key={i}>
                <Image src={item.icon} className="rounded-tr-2xl rounded-tl-2xl xl:h-[15rem] w-full object-cover" />
                <div className="bg-white shadow-2xl text-center rounded-br-2xl rounded-bl-2xl py-4 px-4">
                  <div className="">
                    <p className="my-4 font-bold text-lg capitalize">{item.title}</p>
                    <p className="pb-6 text-sm xl:text-base">{item.text}</p>
                  </div>
                  <Link to='' className=""> <div className="uppercase rounded-full bg-black text-white px-6 font-bold py-3 right-0 ">read more</div></Link>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="mt-[6rem]">
          <div className="flex flex-wrap items-center justify-center bg-black/10 py-16">
            {clientsLogo.map((i) => (<Image src={i.img} key={i.id} className="w-[15rem]" />))}
          </div>
        </div>
      </div>
    </div>
  )
}
