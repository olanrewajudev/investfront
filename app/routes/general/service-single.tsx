import { Link, useParams } from "react-router";
import Image from "~/components/general/image";
import banner from '../../../public/general/inside-bg.jpg';
import { chooseus, serviceSingle } from "~/components/utils/utils";

export default function ServiceSingle() {
    const params = useParams() as { id?: string };
    const id = params?.id ?? '';
    const item = serviceSingle.find(s => s.id === id);

    return (
        <div>
            <div className="">
                <div className="relative">
                    <Image src={banner} className='h-[18rem] lg:h-[30rem] brightness-50 w-full object-cover object-left-bottom' />
                    <div className="absolute inset-0 text-white flex items-center justify-center text-center flex-col"><p className="font-medium text-[3rem] lg:text-[4rem]">Single Service</p><div className="flex items-center gap-2 font-medium mt-3"><Link to='' className='hover:text-yellow'>Home</Link> / <div className="">Single Service</div></div></div>
                </div>
            </div>

            <div className="w-[80%] mx-auto my-20">
                {item ? (
                    <div className="lg:flex gap-10  items-center justify-center">
                        <div className="">
                            <p className="my-4 font-bold text-[2.5rem] capitalize">{item.title}</p>
                            <p className="pb-6 lg:text-lg base leading-7">{item.text}</p>
                            <p className="pb-6 lg:text-lg base leading-7">{item.text2}</p>
                        </div>
                        <Image src={item.icon} className="h-[20rem] object-cover" />

                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-lg mb-4">Service not found.</p>
                        <Link to="/service" className="text-white bg-black px-4 py-2 rounded">Back to Services</Link>
                    </div>
                )}
            </div>

            <div className=" bg-black/10 py-32 my">
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
            <div className="">
                <div className="relative">
                    <Image src={banner} className='h-[18rem] lg:h-[30rem] brightness-50 w-full object-cover object-left-bottom' />
                    <div className="absolute inset-0 text-white flex items-center justify-center text-center flex-col">
                        <p className="font-medium text-[1.9rem] lg:text-[4rem]">Are you searching for a quick, cheap, and safe way to buy Bitcoins?</p>
                        <div className="hover:border-2 py-3 bg-yellow px-6 hover:border-yellow hover:bg-transparent rounded-3xl mt-10">Buy Bitcoin</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
