import { Link } from 'react-router'
import Image from '~/components/general/image'
import banner from '../../../public/general/inside-bg.jpg'
import { services } from '~/components/utils/utils'

export default function Service() {
  return (
    <div>

      <div className="">
        <div className="relative">
          <Image src={banner} className='h-[18rem] lg:h-[30rem] brightness-50 w-full object-cover object-left-bottom' />
          <div className="absolute inset-0 text-white flex items-center justify-center text-center flex-col">
            <p className="font-medium text-[3rem] lg:text-[4rem]">Service</p>
            <div className="flex items-center gap-2 font-medium mt-3">
              <Link to='' className='hover:text-yellow'>Home</Link> / <div className="">Service  </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto my-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 text-center">
          {services.map((item, i: number) => (
            <div className="flex items-center justify-center flex-col mb-12" key={i}>
              <Image src={item.icon} className="rounded-tr-2xl rounded-tl-2xl xl:h-[17rem] w-full object-cover" />
              <div className="bg-white shadow-2xl text-center rounded-br-2xl rounded-bl-2xl py-4 px-4">
                <div className="">
                  <p className="my-4 font-bold text-lg capitalize">{item.title}</p>
                  <p className="pb-6 text-sm xl:text-base">{item.text}</p>
                </div>
                <Link to={item.id} className=""> <div className="uppercase rounded-full bg-black text-white px-6 font-bold py-3 right-0 ">read more</div></Link>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
