
import { MdLogout } from 'react-icons/md'
import { adminSidebar, UserSidebar, userSideBar } from '~/components/utils/utils'
import Linked from '~/components/general/linked'
export default function Sidebar() {

    return (
        <div className="w-[20rem] fixed bg-white z-40">
            <div className="border-r border-[#AAAAAA] py-2 px-4 h-screen flex flex-col">
                <div className="">
                    <div className="bg-linear-to-r from-yellow-dark to-primary-dark p-3 rounded-xl">
                        <div className=" flex items-end justify-end "><div className="bg-white font-bold text-sm px-2 py-1 rounded-full">WALLET</div></div>
                        <div className="text-[1.5rem] font-bold text-white">Account Balance</div>
                        <div className="flex text-white text-lg mt-3 items-center justify-between">
                            <div className="font-bold">Main Wallet</div>
                            <div className="tont-bold">$0</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-4">
                        <div className="bg-primary-dark w-full rounded-full py-2.5 font-semibold text-center cursor-pointer text-white">Deposit</div>
                        <div className="bg-yellow-dark w-full rounded-full py-2.5 font-semibold text-center cursor-pointer text-white">Invest Now</div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col mt-5">
                        {UserSidebar.map((item, index) => {
                            const isActive = Array.isArray(item.url) ? item.url.some((path: string) => location.pathname.startsWith(path.replace('/:id', ''))) : location.pathname === item.url
                            return (
                                <Linked key={index} to={Array.isArray(item.url) ? item.url[0] : item.url} className={`flex items-center gap-2 p-2 transition-all rounded-lg ${isActive ? 'bg-yellow-dark    ' : ''}`}><item.Icon className="text-lg" /><span>{item.title}</span></Linked>
                            )
                        })}
                        <div className="flex items-center gap-2 p-2 rounded-lg cursor-pointer"><MdLogout /> Logout</div>

                    </div>
                </div>

            </div>
        </div>
    )
}
