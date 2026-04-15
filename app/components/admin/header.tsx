import { GoChevronDown, GoDotFill } from 'react-icons/go'
import { IoIosNotifications, IoIosSearch } from "react-icons/io"
import { useDisclosure } from '@mantine/hooks'
import { useState } from "react";
import { BiArrowBack, BiBell } from "react-icons/bi";
import Linked from '../general/linked';
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';
import { Modal } from '@mantine/core';
import Forminput from '../general/form-input';
import { useForm } from '@mantine/form';
import Formbutton from '../general/form-button';
import { Apis, AuthPosturl } from '../general/api';
import { ErrorAlert, HotAlert } from '../utils/utils';
export default function Header() {
  const [opened, { open, close }] = useDisclosure(false)
  const [pass1, setPass1] = useState(false);
  const [pass2, setPass2] = useState(false);
  const [pass3, setPass3] = useState(false);
  const Icon1 = pass1 ? FaEye : FaEyeSlash;
  const Icon2 = pass2 ? FaEye : FaEyeSlash;
  const Icon3 = pass3 ? FaEye : FaEyeSlash;

  const form = useForm({
    mode: "uncontrolled", initialValues: { current_password: '', password: '', confirm_password: "" },
    validate: {
      current_password: value => !value ? 'Current password is required' : null,
      password: (v) => v.length < 6 ? 'Password too short' : null,
      confirm_password: (v, values) => v !== values.password ? 'Passwords do not match' : null,
    }
  })
  async function HandleSubmission(values: typeof form.values) {
    try {
      const res = await AuthPosturl(Apis.users.updatepassword, values)
      HotAlert(res.data.msg)
      close()
    } catch (error) {
      ErrorAlert((error as Error).message)
    }
  }
  return (
    <>
      <Modal size={'32rem'} centered withCloseButton={false} opened={opened} onClose={close}>
        <div className="">
          <div className="text-center text-2xl font-semibold">Change Password</div>
          <form onSubmit={form.onSubmit(HandleSubmission)} className="my-6">
            <div className="relative">
              <Forminput content="Current Password" error={form.errors.current_password?.toString() || ""} {...form.getInputProps("current_password")} placeholder="Password" type={pass1 ? "text" : "password"} />
              <div onClick={() => setPass1(!pass1)} className="absolute right-4 top-9.5 cursor-pointer text-dark-gray"><Icon1 /></div>
            </div>
            <div className="relative">
              <Forminput content="New Password" error={form.errors.password?.toString() || ""} {...form.getInputProps("password")} placeholder="Password" type={pass1 ? "text" : "password"} />
              <div onClick={() => setPass1(!pass1)} className="absolute right-4 top-9.5 cursor-pointer text-dark-gray"><Icon1 /></div>
            </div>
            <div className="relative">
              <Forminput content="Confirm New Password" error={form.errors.confirm_password?.toString() || ""} {...form.getInputProps("confirm_password")} placeholder="Password" type={pass1 ? "text" : "password"} />
              <div onClick={() => setPass1(!pass1)} className="absolute right-4 top-9.5 cursor-pointer text-dark-gray"><Icon1 /></div>
            </div>

            <Formbutton title='Change' />
          </form>
        </div>
      </Modal>
      <div className="sticky top-0 left-0 border-b px-10 border-[#AAAAAA] z-50 bg-white">
        <div className='flex flex-row items-center gap-5 justify-between  py-3'>
          <Linked to='/admin/home-dashboard' className=""> <img src="/general/logo.png" loading="lazy" className="h-10 w-auto" /> </Linked>
          <div className="flex text-xl gap-3">
            <div className=""><IoIosNotifications /></div>
            <div className=""><CiGlobe /></div>
            <div className="" onClick={open}><FaUser /></div>
          </div>
        </div>
      </div>
    </>
  )
}
