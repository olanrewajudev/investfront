import type { useModalsStack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { Apis, Posturl } from "~/components/general/api";
import Formbutton from "~/components/general/form-button";
import Forminput from "~/components/general/form-input";
import Linked from "~/components/general/linked";
import type { AuthModal } from "~/components/user/header";
import { ErrorAlert, HotAlert } from "~/components/utils/utils";

export default function Signup({ stack, setVerifyEmail }: { stack: ReturnType<typeof useModalsStack<AuthModal>>, setVerifyEmail: React.Dispatch<React.SetStateAction<string>> }) {
  const [pass1, setPass1] = useState(false);
  const [pass2, setPass2] = useState(false);
  const Icon1 = pass1 ? FaEye : FaEyeSlash;
  const Icon2 = pass2 ? FaEye : FaEyeSlash;
  const form = useForm({
    mode: "uncontrolled", initialValues: { email: '', firstName: '', lastName: '', username: '', password: '', confirmPassword: '', phone: '' },
    validate: {
      firstName: (v) => !v ? 'First name is required' : null,
      lastName: (v) => !v ? 'Last name is required' : null,
      username: (v) => !v ? 'Username is required' : null,
      email: (v) => !v ? 'Email is required' : null,
      phone: (v) => !v ? 'Phone number is required' : null,
      password: (v) => v.length < 6 ? 'Password too short' : null,
      confirmPassword: (v, values) =>
        v !== values.password ? 'Passwords do not match' : null,
    }
  })
  async function HandleSubmission(values: typeof form.values) {
    try {
      const res = await Posturl(Apis.users.signup, values)
      HotAlert(res.data.msg)
      if (res.status === 200) {
        stack.close('signup')
        stack.open('otp')
      }
    } catch (error) {
      ErrorAlert((error as Error).message)
    }
  }

  return (
    <div>
      <div className=''>
        <div className=" px-3">
          <div className="flex items-center justify-center gap-10"><div className="text-yellow-dark text-center font-extrabold text-4xl md:text-5xl font-base w-3/4">Sign Up</div></div>

          <form onSubmit={form.onSubmit(HandleSubmission)}>
            <Forminput content="First Name" error={form.errors.firstName?.toString() || ''}{...form.getInputProps("firstName")} placeholder='First Name' />
            <Forminput content="Last Name" error={form.errors.lastName?.toString() || ''}{...form.getInputProps("lastName")} placeholder='Last Name' />
            <Forminput content="Username" error={form.errors.username?.toString() || ''}{...form.getInputProps("username")} placeholder='Username' />
            <Forminput content="Email" type="email" error={form.errors.email?.toString() || ''}{...form.getInputProps("email")} placeholder='Email' />
            <Forminput content="number" type="number" error={form.errors.phone?.toString() || ''}{...form.getInputProps("phone")} placeholder='+123456789' />
            <div className="flex w-full gap-2">
              <div className="relative flex-1">
                <Forminput content="Password" error={form.errors.password?.toString() || ""} {...form.getInputProps("password")} placeholder="Password" type={pass1 ? "text" : "password"} />
                <div onClick={() => setPass1(!pass1)} className="absolute right-4 top-[38px] cursor-pointer text-dark-gray"><Icon1 /></div>
              </div>

              <div className="relative flex-1">
                <Forminput content="Confirm Password" error={form.errors.confirmPassword?.toString() || ""} {...form.getInputProps("confirmPassword")} placeholder="Confirm Password" type={pass2 ? "text" : "password"} />
                <div onClick={() => setPass2(!pass2)} className="absolute right-4 top-9.5 cursor-pointer text-dark-gray"><Icon2 /></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="">
                By continuing, you agree to our
                <Linked className='text-yellow-dark font-bold underline' to="/terms-of-service"> Terms of Service,</Linked>
                <Linked className='text-yellow-dark font-bold underline' to="/privacy-policy"> Privacy Policy</Linked> &
                <Linked className='text-yellow-dark font-bold underline' to="/health"> Health Data Notice</Linked>
              </div>
              <Formbutton title="Continue" className='bg-yellow-dark text-white' loading={form.submitting} />
              <div className="text-center flex items-center justify-center gap-1 mt-5">Already have an account?<div className="underline cursor-pointer" onClick={() => { stack.close('signup'), stack.open('login') }}>Log In</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
