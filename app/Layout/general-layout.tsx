import UserFooter from '~/components/user/footer'
import UserHeader from '~/components/user/header'

import { Outlet, useLocation, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Apis, AuthGeturl, CookieName } from '~/components/general/api'
import { isExpired } from 'react-jwt'
import { dispatchLoggedin, dispatchProfile } from '~/Lib/reducer'
import type { RootState } from '~/Lib/store'
import { ErrorAlert } from '~/components/utils/utils'

export default function Layout() {
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

    if (show) return (
        <div>
            <UserHeader />
            <Outlet />
            <UserFooter />
        </div>
    )
}