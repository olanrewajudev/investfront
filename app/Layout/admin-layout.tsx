import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { isExpired } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router";
import AdminHeader from "~/components/admin/header";
import AdminSidebar from "~/components/admin/sidebar";
import { Apis, AuthGeturl, CookieName } from "~/components/general/api";
import { ErrorAlert } from "~/components/utils/utils";
import { dispatchLoggedin, dispatchProfile, dispatchRole } from "~/Lib/reducer";
import type { RootState } from "~/Lib/store";

export default function Layout() {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { role } = useSelector((state: RootState) => state.data)
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
          dispatch(dispatchLoggedin(true))
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

    if (role !== 'admin') {
      navigate("/admin/login", { replace: true });
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
      <AdminHeader />
      <div className="hidden lg:block"><AdminSidebar /></div>
      <div className="lg:ml-[20rem] overflow-y-auto"><Outlet /></div>
    </div>
  )
}