import UserFooter from '~/components/user/footer'
import UserHeader from '~/components/user/header'

import { Outlet, useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Apis, AuthGeturl, CookieName } from '~/components/general/api'
import { isExpired } from 'react-jwt'
import { dispatchProfile } from '~/Lib/reducer'

export default function Layout() {
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
                    dispatch(dispatchProfile(response.data.msg))
                }
            } catch (error) {
            }
        })()
    }, [])

    useEffect(() => {
        (() => {
            setShow(false)
            setTimeout(() => {setShow(true)}, 2000);
        })()
    }, [pathname])

    if (!show) return null;
    if (show) return (
        <div>
            <UserHeader />
            <Outlet />
            <UserFooter />
        </div>
    )
}