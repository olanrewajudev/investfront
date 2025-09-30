import React from 'react'
import { Link } from 'react-router'
import Image from '~/components/general/image'
import banner from '../../../public/general/cta-bg.jpg'
import image1 from '../../../public/general/icon-a.png'
import image2 from '../../../public/general/icon-b.png'
import { buyandsell } from '~/components/utils/utils'
import TabPanel from '~/components/general/tab-panel'
export default function BuySell() {
    return (
        <div>
            <div className="">
                <div className="relative">
                    <Image src={banner} className='h-[18rem] lg:h-[35rem] brightness-50 w-full object-cover' />
                    <div className="absolute inset-0 text-white flex items-center justify-center text-center flex-col">
                        <p className="font-semibold text-[3rem] lg:text-[4rem]">Buy Crypto</p>
                        <div className="flex items-center gap-2 font-medium mt-3">
                            <Link to='' className='hover:text-yellow'>Home</Link> / <div className="">Buy Crypto  </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[80%] mx-auto'>

                <div className="">
                    <div className="mt-32 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                        {buyandsell.map((item) => (
                            <div className="bg-black/20 backdrop-blur-xl rounded-xl mb-4 flex items-center justify-center flex-col px-5 py-10 text-center" key={item.id}>
                                <Image src={item.img} alt="" className=" w-[3rem]" />
                                <p className="font-bold mb-1 mt-4 uppercase">{item.title}</p>
                                <p className="text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" mt-28">
                    <TabPanel />
                </div>

                <div className="border my-28 border-gray-200"></div>

                <div className="mb-32">
                    <div className="lg:flex gap-10">
                        <div className="">
                            <b className='text-[1.7rem]'>Buy Bitcoin Instantly from a Safe Exchange</b>
                            <p className="my-4">Many services nowadays offer their users to buy Bitcoins, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et lorem nec felis finibus laoreet. The company is officially registered in the UK, has a Money Services Busialiquam tellus, sit amet tristique ipsum.</p>
                            <p className="mb-4">Many services nowadays offer their users to buy Bitcoins, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et lorem nec felis finibus laoreet. The company is officially registered in the UK has a Money Services Business status</p>
                        </div>
                        <div className="">
                            <div className="lg:flex items-center gap-4">
                                <Image src={image1} className='w-28 mb-3' />
                                <p className="">Many services nowadays offer their users to buy Bitcoins, Lorem ipsum dolor sit</p>
                            </div>
                            <div className="my-4">
                                <p className="">Nowadays offer their Many services users to buy Bitcoins, Lorem ipsum dolor sit amet Many services nowadays offer their users to buy Bitcoins, Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:flex gap-10 mt-16">
                        <div className="">
                            <b className='text-[1.7rem]'>Buy Bitcoin Instantly from a Safe Exchange</b>
                            <p className="my-4">Many services nowadays offer their users to buy Bitcoins, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et lorem nec felis finibus laoreet. The company is officially registered in the UK, has a Money Services Busialiquam tellus, sit amet tristique ipsum.</p>
                            <p className="mb-4">Many services nowadays offer their users to buy Bitcoins, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et lorem nec felis finibus laoreet. The company is officially registered in the UK has a Money Services Business status</p>
                        </div>
                        <div className="">
                            <div className="lg:flex items-center gap-4">
                                <Image src={image2} className='w-28 mb-3' />
                                <p className="">Many services nowadays offer their users to buy Bitcoins, Lorem ipsum dolor sit</p>
                            </div>
                            <div className="my-4">
                                <p className="">Nowadays offer their Many services users to buy Bitcoins, Lorem ipsum dolor sit amet Many services nowadays offer their users to buy Bitcoins, Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">

                </div>
            </div>
        </div>
    )
}
