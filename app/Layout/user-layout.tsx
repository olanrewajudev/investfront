import { Outlet, useNavigate } from 'react-router'
import Cookies from 'js-cookie'
import { isExpired } from 'react-jwt'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import { Apis, AuthGeturl, CookieName } from '~/components/general/api'
import { dispatchProfile, dispatchRole } from '~/Lib/reducer'
import { ErrorAlert } from '~/components/utils/utils'
import type { RootState } from '~/Lib/store'
import Header from '~/components/user/auth/header'
import Sidebar from '~/components/user/auth/sidebar'



export default function UserLayout() {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { role } = useSelector((state: RootState) => state.data)
  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const token = Cookies.get(CookieName)
        const exp = isExpired(token || '')

        if (!exp && token) {
          const response = await AuthGeturl(Apis.users.profile)
          dispatch(dispatchProfile(response.msg))
          dispatch(dispatchRole(response.msg.role))
        }
      } catch (error) {
        ErrorAlert((error as Error).message)
      } finally {
        setAuthChecked(true)
      }
    })()
  }, [])

  useEffect(() => {
    if (!authChecked) return;

    if (role !== 'user') {
      navigate("/", { replace: true });
    }
  }, [role, authChecked, navigate]);
  useEffect(() => {
    (() => {
      setShow(false)
      setTimeout(() => { setShow(true) }, 2000);
    })()
  }, [pathname])

  if (!show) return (
    <div>
      <div className="flex items-center justify-center h-[100dvh]">
        <div className='fixed top-0 left-0 w-full h-screen flex items-center justify-center'>
          <div className="lds-ripple"><div></div><div></div></div>
        </div>
      </div>
    </div>
  )

  if (show) return (
    <div className="h-screen">
      <Header />
      <div className="hidden lg:block"><Sidebar /></div>
      <div className="lg:ml-[20rem] overflow-y-auto"><Outlet /></div>
    </div>
  )
}
