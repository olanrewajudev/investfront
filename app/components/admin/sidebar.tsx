
import { MdLogout } from 'react-icons/md'
import { adminSidebar, HotAlert, UserSidebar, userSideBar } from '~/components/utils/utils'
import Linked from '~/components/general/linked'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { CookieName } from '~/components/general/api'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
export default function AdminSidebar() {
    const navigate = useNavigate()
    const [opened, { open, close }] = useDisclosure(false)

    const Logout = async () => {
        Cookies.remove(CookieName)
        HotAlert('User logged out successfully')

        setTimeout(() => {
            navigate('/')
            window.location.reload()
        }, 100)
    }
    return (
        <div className="w-[20rem] fixed bg-white z-40">
            <Modal size={'32rem'} centered withCloseButton={false} opened={opened} onClose={close}>
                <div className="my-4">
                    <div className="text-error text-[1.5rem] font-bold text-center mb-2">Logout</div>
                    <div className="text-center">
                        <div className="mb-5">
                            <div className="font-semibold text-lg">Are you sure you want to log out of your account?</div>
                            <p className="">You’ll need to sign in again to continue.</p>
                        </div>
                        <div className="flex items-center justify-between gap-3 mt-4">
                            <div onClick={close} className="bg-lightest w-full rounded-full py-2.5 font-semibold text-center cursor-pointer ">Cancel</div>
                            <div onClick={Logout} className="bg-error w-full rounded-full py-2.5 font-semibold text-center cursor-pointer text-white">Logout</div>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="border-r border-[#AAAAAA] py-2 px-4 h-screen flex flex-col">

                <div>
                    <div className="flex flex-col mt-5">
                        {adminSidebar.map((item, index) => {
                            const isActive = Array.isArray(item.url) ? item.url.some((path: string) => location.pathname.startsWith(path.replace('/:id', ''))) : location.pathname === item.url
                            return (
                                <Linked key={index} to={Array.isArray(item.url) ? item.url[0] : item.url} className={`flex items-center gap-2 p-2 transition-all rounded-lg ${isActive ? 'bg-yellow-dark    ' : ''}`}><item.Icon className="text-lg" /><span>{item.title}</span></Linked>
                            )
                        })}
                        <div onClick={open} className="flex items-center gap-2 p-2 text-error font-bold text-lg rounded-full cursor-pointer"><MdLogout /> Logout</div>

                    </div>
                </div>

            </div>
        </div>
    )
}
