import { Link } from "react-router";
import Image from "~/components/general/image";
import banner from '../../../public/general/cta-bg.jpg'
import { chooseus, clientsLogo } from "~/components/utils/utils";
import Linked from '~/components/general/linked'
import bit from '../../../public/general/illustration-md-e.png'
export default function Howitworks() {
  return (
    <div>
      <div className="">
        <div className="relative">
          <Image src={banner} className='h-[18rem] lg:h-[30rem] brightness-50 w-full object-cover object-center' />
          <div className="absolute inset-0 text-white flex items-center justify-center text-center flex-col">
            <p className="font-medium text-[3rem] lg:text-[4rem]">How It Works</p>
            <div className="flex items-center gap-2 font-medium mt-3">
              <Linked to='' className='hover:text-yellow'>Home</Linked> / <div className="">How It Works</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/10 p-32">
      
      </div>

      <div className="mb-20"></div>

      <div className="bg-black/10 py-20">
        <div className="lg:flex items-center justify-center gap-15 w-[80%] mx-auto">
          <div className="w-full"><Image src={bit} className="" /></div>
          <div className="max-w-3xl mt-10 lg:mt-0">
            <h2 className="lg:text-[2.5rem] text-[1.9rem] font-semibold mb-3">How Bitcoin are earned?</h2>
            <p className="mb-2 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <p className="leading-8 mb-9">Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <Linked to='' className="bg-neutral-900 text-white px-6 py-2.5 rounded-full hover:bg-yellow hover:text-black">Get Started</Linked>
          </div>
        </div>
      </div>

      <div className="mt-[6rem]">
        <div className="lg:flex items-center justify-center text-center gap-12 mx-10">
          {chooseus.map((item, i: number) => (
            <div className="flex items-center justify-center flex-col mb-12" key={i}>
              <Image src={item.icon} className='w-20 pb-2' />
              <b className="text-[1.5rem]">{item.title}</b>
              <p className="pt-2">{item.text}</p>
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
  )
}
