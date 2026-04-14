import { Modal, type useModalsStack } from "@mantine/core";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import FormButton from "~/components/general/form-button";
import Forminput from "~/components/general/form-input";
import type { AuthModal } from "~/components/user/header";
import Signup from "./signup";

import { useForm } from "@mantine/form"
import Linked from "~/components/general/linked";

export default function Login({ stack }: { stack: ReturnType<typeof useModalsStack<AuthModal>> }) {
  const [pass1, setPass1] = useState(false);
  const Icon1 = pass1 ? FaEye : FaEyeSlash;
  const [verifyEmail, setVerifyEmail] = useState("")
  const navigate = useNavigate()

  const form = useForm({
    mode: "uncontrolled", initialValues: { email: '', password: '', },
    validate: {
      email: value => !value ? 'Email address is required' : null,
      password: value => !value ? 'Password is required' : null
    }
  })

  async function HandleSubmission(values: typeof form.values) {
    console.log(values)
  }

  return (
    <div>
      <div className=''>
       
        <div className="flex items-center justify-center no-scrolls py-7 gap-10 mb-">
          <div className="text-lime-dark text-center font-extrabold text-4xl md:text-5xl font-base w-3/4">Log In</div>
        </div>
        <form onSubmit={form.onSubmit(HandleSubmission)}>
          <Forminput content="Username or Email" error={form.errors.email?.toString() || ''}{...form.getInputProps("email")} placeholder='Username or Email' />
          <div className="relative">
            <Forminput content="Password" error={form.errors.password?.toString() || ""} {...form.getInputProps("password")} placeholder="Password" type={pass1 ? "text" : "password"} />
            <div onClick={() => setPass1(!pass1)} className="absolute right-4 top-9.5 cursor-pointer text-dark-gray"><Icon1 /></div>
          </div>
          <div className="text-center uppercase">or</div>

          <div className="space-y-3 mt-5">
            <div className="mb-5">
              By continuing, you agree to our
              <Linked className='text-lime-dark font-bold underline' to=""> Terms of Service,</Linked>
              <Linked className='text-lime-dark font-bold underline' to=""> Privacy Policy</Linked> &
              <Linked className='text-lime-dark font-bold underline' to=""> Health Data Notice</Linked>
            </div>
            <FormButton title="Continue" className='bg-lime-dark text-white' loading={form.submitting} />
            <div className="text-center flex items-center justify-center gap-1 mt-5">Don’t have an account?<div className="underline cursor-pointer" onClick={() => { stack.close('login'); stack.open('signup') }}>Sign Up</div>
            </div>
            <div className="text-center mt-5 font-bold cursor-pointer">Forgot Password?</div>
          </div>
        </form>
      </div>
    </div>
  )
}
