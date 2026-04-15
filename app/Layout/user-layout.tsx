import { Outlet } from 'react-router'
import UserFooter from '~/components/user/footer'
import UserHeader from '~/components/user/header'
import Cookies from 'js-cookie'
import { isExpired } from 'react-jwt'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import { Apis, AuthGeturl, CookieName } from '~/components/general/api'
import { dispatchProfile } from '~/Lib/reducer'
import { ErrorAlert } from '~/components/utils/utils'



export default function UserLayout() {
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const [show, setShow] = useState(false)
  useEffect(() => {
    (async () => {
      try {
        const token = Cookies.get(CookieName)
        const exp = isExpired(token || '')
        if (!exp) {
          const response = await AuthGeturl(Apis.users.profile)
          dispatch(dispatchProfile(response))
        }
      } catch (error) {
        ErrorAlert((error as Error).message)
      }
    })()
  }, [])

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
    <>
      <div>
        <UserHeader />
        <Outlet />
        <UserFooter />
      </div>
    </>
  )
}
