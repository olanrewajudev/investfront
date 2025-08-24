import React from 'react'
import { Outlet } from 'react-router'
import UserFooter from '~/components/user/footer'
import UserHeader from '~/components/user/header'

export default function UserLayout() {
  return (
    <div>
      <UserHeader />
      <Outlet />
      <UserFooter />
    </div>
  )
}
