import HomeCarousel from "~/components/general/home-carousel";
import type { Route } from "./+types/home";
import { clientsLogo, homeabout, recentBlogPosts, reviews } from "~/components/utils/utils";
import { Link } from "react-router";
import bitcoin from '../../../public/general/photo-md-a.jpg'
import chart from '../../../public/general/calc-bg.jpg'
import CurrencyConverter from "~/components/general/currency-converter";
import Image from "~/components/general/image";
import center from '../../../public/general/square-md-a.png'
import TradingViewChart from "~/components/general/trading-chart";
import { IoAnalyticsOutline, IoLockClosedOutline } from "react-icons/io5";
import { BsCashStack, BsGlobe2 } from "react-icons/bs";
import { BiPieChartAlt2 } from "react-icons/bi";
import { CiDatabase, CiDesktop } from "react-icons/ci";
import { RiEditBoxLine } from "react-icons/ri";
import Scroller from "~/components/general/scroller";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className=""><HomeCarousel /></div>

      <div className="">
        <div className="my-20 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 w-[85%] mx-auto">
          {homeabout.map((item) => (
            <div className="bg-black/20 backdrop-blur-xl rounded-xl mb-4 flex items-center justify-center flex-col px-5 py-10 text-center" key={item.id}>
              <Image src={item.img} alt="" className=" w-[3rem]" />
              <p className="font-bold mb-1 mt-4 uppercase">{item.title}</p>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black/20 backdrop-blur-xl md:py-32 py-24 ">
        <div className="lg:flex items-center gap-10 w-[85%] mx-auto">
          <Image src={bitcoin} alt="" className="rounded-xl lg:w-[30rem]" />
          <div className="mt-10">
            <p className="font-bold text-[1.5rem] md:text-[2rem] mb-4 ">Bitcoin is an innovative & a new kind of money.</p>
            <p className="mb-3 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <p className="mb-12 leading-8">Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <Link to='' className="uppercase rounded-full bg-black text-white px-9 font-bold py-5 hover:text-black hover:border border-yellow hover:bg-white hover:transition-all hover:ease-in-out mt-">read more</Link>
          </div>
        </div>
      </div>

      <div className="">
        <div className="relative">
          <Image src={chart} alt="" className="w-full h-[30rem] object-cover" />
          <div className="absolute inset-0 flex items-center justify-center mx-10">
            <div className="bg-white/30 backdrop-blur-xl lg:flex items-center justify-center p-6 lg:py-24 rounded-2xl ">
              <div className="">
                <p className="text-[2rem] lg:text-[2.5rem] font-semibold">BTC Calculator</p>
                <p className="text-sm lg:text-base">Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.</p>
              </div>
              <div className="w-full"><CurrencyConverter /></div>
            </div>
          </div>
        </div>
      </div>


      <div className="pt-32">
        <div className="text-center px-5 lg:px-32 mb-16">
          <p className="font-bold text-[2.5rem] mb-3 lg:text-[4rem]">Why choose Us</p>
          <p className="">Sed ut perspi ciatis unde omnis iste natus error sit volup tatem accusa ntium dolor emque lauda ntium, totam rem aperiam</p>
        </div>
        <div className="flex items-center justify-center text-lg">
          <div className="lg:flex items-center jusctify-center ">
            <div className="">
              <div className="flex flex-col items-center text-center mb-20">
                <CiDatabase className="text-yellow mb-4" size={52} />
                <p className="mb-2">Payment Options</p>
                <p className=""> ut venenatis libero Pellentesque <br /> in porta dui.</p>
              </div>
              <div className="flex flex-col items-center text-center mb-20">
                <RiEditBoxLine className="text-yellow mb-4" size={52} />
                <p className="mb-2">Legal Compliance</p>
                <p className=""> ut venenatis libero Pellentesque <br /> in porta dui.</p>
              </div>
              <div className="flex flex-col items-center text-center mb-20">
                <CiDesktop className="text-yellow mb-4" size={52} />
                <p className="mb-2">Cross-Platform Trading</p>
                <p className=""> ut venenatis libero Pellentesque  <br /> in porta dui.</p>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col mx-10">
              <div className="flex flex-col items-center text-center mb-">
                <IoLockClosedOutline className="text-yellow mb-4" size={52} />
                <p className="mb-2">Strong Security</p>
                <p className=""> ut venenatis libero Pellentesque <br /> in porta dui.</p>
              </div>

              <Image src={center} className="lg:w-[40rem] px-20 py-20" />

              <div className="flex flex-col items-center text-center mb-20">
                <BsCashStack className="text-yellow mb-4" size={52} />
                <p className="mb-2">Competitive Commissions</p>
                <p className=""> ut venenatis libero Pellentesque <br /> in porta dui.</p>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col items-center text-center mb-20">
                <BsGlobe2 className="text-yellow mb-4" size={52} />
                <p className="mb-2">World Coverage</p>
                <p className=""> ut venenatis libero Pellentesque <br /> in porta dui.</p>
              </div>
              <div className="flex flex-col items-center text-center mb-20">
                <BiPieChartAlt2 className="text-yellow mb-4" size={52} />
                <p className="mb-2">Advanced Reporting</p>
                <p className=""> ut venenatis libero Pellentesque <br /> in porta dui.</p>
              </div>
              <div className="flex flex-col items-center text-center mb-20">
                <IoAnalyticsOutline className="text-yellow mb-4" size={52} />
                <p className="mb-2">Margin Trading</p>
                <p className=""> ut venenatis libero Pellentesque <br /> in porta dui.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 lg:flex items-center justify-center gap-16 w-[85%] mx-auto">
        <TradingViewChart />
        <div className="mt-12 lg:mt-0">
          <div className="font-bold lg:text-[3rem] text-[2.5rem] mb-6">
            <p className="">No Experience?</p>
            <p className="">No worries</p>
          </div>
          <p className="mb-4 leading-8">Looking to get started in the world of cryptocurrency trading sit amet tristique?</p>
          <p className="leading-8 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et lorem nec felis finibus laoreet. Nullam id dictum urna. Vestibulum in aliquam tellus, sit amet tristique ipsum.</p>
          <Link to='' className="uppercase rounded-full bg-black text-white px-9 font-bold py-5 hover:text-black hover:border border-yellow hover:bg-white hover:transition-all hover:ease-in-out mt-">read more</Link>

        </div>
      </div>

      <div className="mt-[10rem] bg-black/10 py-20 px-10">
        <div className="text-center px-5 lg:px-32 mb-16">
          <p className="font-bold text-[2.5rem] mb-3 lg:text-[4rem]">What investors say</p>
          <p className="text-lg">Sed ut perspi ciatis unde omnis iste natus error sit volup tatem accusa ntium dolor emque lauda ntium, totam rem aperiam</p>
        </div>
        <Scroller>
          {reviews.map((item) => (
            <div className="flex flex-col items-center text-center lg:w-[50%] lg:mx-auto mx-5 gap-4 mb-10" key={item.id}>
              <Image src={item.img} className="w-36" />
              <div><p className="font-bold mb-1">{item.name}</p><p>{item.role}</p></div>
              <div className="text- lg:text-base">{item.content}</div>
            </div>
          ))}
        </Scroller>

      </div>

      <div className="mt-[8rem] px-10 lg:px-32">
        <div className="text-center mb-16">
          <p className="font-bold text-[2.5rem] mb-3 lg:text-[4rem]">our latest news</p>
          <p className="">Sed ut perspi ciatis unde omnis iste natus error sit volup tatem accusa ntium dolor emque lauda ntium, totam rem aperiam</p>
        </div>
        <div className="">
          <div className="lg:flex items-center justify-center gap-10">
            {recentBlogPosts.slice(0, 3).map((item, i: number) => (
              <div className="mb-10" key={i}>
                <Image src={item.image} className="rounded-tr-2xl rounded-tl-2xl h-[20rem] w-full object-cover" />
                <div className="bg-white shadow-2xl text-center rounded-br-2xl rounded-bl-2xl py-4 px-4">
                  <div className="">
                    <p className="pt-6">Posted {item.date}</p>
                    <p className="my-4 font-bold text-lg">{item.title}</p>
                    <p className="pb-6 text-sm lg:text-base">{item.content}</p>
                  </div>
                  <Link to='' className=""> <div className="uppercase rounded-full bg-black text-white px-6 font-bold py-3 right-0 ">read more</div></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[6rem]">
        <div className="flex flex-wrap items-center justify-center bg-black/10 py-16">
          {clientsLogo.map((i) => (<Image src={i.img} key={i.id} className="w-[15rem]" />))}
        </div>
      </div>
    </>
  );
} 
