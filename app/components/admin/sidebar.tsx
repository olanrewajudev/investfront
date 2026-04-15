
import { MdLogout } from 'react-icons/md'
import { FaRegQuestionCircle } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router'
import Linked from '../general/linked'
import { adminSidebar } from '../utils/utils'

export default function AdminSidebar() {
 
    return (
        <div className="w-full pt-20">
            <div className="border-r border-[#AAAAAA] py-2 px-4 h-screen flex flex-col">
                <div>
                    <div className="flex flex-col mt-5">
                        {adminSidebar.map((item, index) => {
                            const isActive = Array.isArray(item.url) ? item.url.some((path) => location.pathname.startsWith(path.replace('/:id', ''))) : location.pathname === item.url
                            return (
                                <Linked key={index} to={Array.isArray(item.url) ? item.url[0] : item.url} className={`flex items-center gap-2 p-2 transition-all rounded-lg ${isActive ? 'bg-lightest' : ''}`}><item.Icon className="text-lg" /><span>{item.title}</span></Linked>
                            )
                        })}

                    </div>
                </div>

                <div className="flex mt-auto flex-col mb-16">
                    <Linked to="/admin/support-dashboard" className="flex items-center gap-2 p-2 rounded-lg"><FaRegQuestionCircle /> Support</Linked>
                    <div  className="flex items-center gap-2 p-2 rounded-lg cursor-pointer"><MdLogout /> Logout</div>
                </div>
            </div>
        </div>
    )
}
