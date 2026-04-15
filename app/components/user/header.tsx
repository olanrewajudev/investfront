import React, { useEffect, useState } from 'react'
import { AiOutlineGooglePlus } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { TbBrandGmail } from 'react-icons/tb'
import { headerFirstLink, headerSecondLink, NavbarLink } from '../utils/utils'
import { Link } from 'react-router'
import Image from '../general/image'
import { SlMenu } from 'react-icons/sl'
import { Drawer, Modal, useModalsStack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Login from '~/routes/user/forms/login'
import VerifyEmail from '~/routes/user/forms/verify-mail'
import Signup from '~/routes/user/forms/signup'
import Linked from '../general/linked'
export type AuthModal = 'login' | 'signup' | 'otp'
export default function UserHeader() {
  const [scroll, setScroll] = useState(false)
  const [opened, { open, close }] = useDisclosure()
  const stack = useModalsStack<AuthModal>(['login', 'signup', 'otp']);
  const [verifyEmail, setVerifyEmail] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 55) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div>
      <Drawer className='' opened={opened} onClose={close} position='right' withCloseButton={false} >
        <Linked to='/' className=""> <Image src='/general/logo.png' alt="Cryptocoin" className="w-[13rem]" /> </Linked>
        <div className="mt-3">{NavbarLink.map((item) => (<div className=" " key={item.id}><Linked onClick={close} to={item.href} className="font-bold flex items-center justify-between hover:text-yellow text-center py-2 px-2 rounded-xl ">{item.name}</Linked></div>))}</div>
        <div className="space-y-4 mt-5 text-center">
          <div onClick={() => { close(), stack.open('login') }} className="bg-neutral-900 text-white px-6 py-3 rounded-full">Login</div>
          <div onClick={() => { close(), stack.open('signup') }} className="bg-neutral-900 text-white px-6 py-3 rounded-full">Sign Up</div>
        </div>
      </Drawer>
      <Modal.Stack>
        <Modal size={'32rem'} className='no-scrolls' withCloseButton={false} centered {...stack.register('login')}> <Login stack={stack} /> </Modal>
        <Modal size={'35rem'} className='no-scrolls' withCloseButton={false} centered {...stack.register('signup')}><Signup stack={stack} setVerifyEmail={setVerifyEmail} /></Modal>
        <Modal size={'35rem'} className='no-scrolls' withCloseButton={false} centered {...stack.register('otp')}><VerifyEmail stack={stack} email={''} tag={'REGISTRATION'} /></Modal>
      </Modal.Stack>
      <div className="">
        <div className="flex items-center justify-between xl:px-32 px-10 bg-neutral-900 text-white py-3 font-medium">
          <div className="gap-10 lg:flex hidden">
            {headerFirstLink.map((item, i: number) => (
              <Linked key={i} to={item.href} className='hover:text-yellow'>{item.title}</Linked>
            ))}
          </div>
          <div className="flex gap-5 text-2xl "><FaFacebookF /><BsInstagram /><AiOutlineGooglePlus /><TbBrandGmail /></div>
          <div className="lg:hidden block"><SlMenu size={20} /></div>
        </div>
      </div>


      <div className={`flex items-center justify-between text-center bg-white/30 backdrop-blur-xl shadow-2xl py-5 px-10 xl:px-32 z-50 w-full mx-auto ${scroll ? 'fixed -mt-12' : 'py-5'}`}>
        <Linked to='/' className=""> <Image src='/general/logo.png' alt="Cryptocoin" className="w-[13rem]" /> </Linked>
        <div className="gap-8 lg:flex font-medium  justify-center items-center hidden">
          {headerSecondLink.map((item, i: number) => (
            <Linked key={i} to={item.href} className='hover:text-yellow'>{item.title}</Linked>
          ))}
          <div onClick={() => stack.open('login')} className="bg-neutral-900 text-white px-6 py-1.5 rounded-full cursor-pointer hover:bg-yellow-dark hover:text-black">Login</div>
          <div onClick={() => stack.open('signup')} className="bg-neutral-900 text-white px-6 py-1.5 rounded-full cursor-pointer hover:bg-yellow-dark hover:text-black">Sign Up</div>
        </div>
        <div onClick={open} className="lg:hidden block"><SlMenu size={20} /></div>
      </div>
    </div>
  )
}
