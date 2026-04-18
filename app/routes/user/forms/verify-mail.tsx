import type { useModalsStack } from '@mantine/core'
import { useForm } from '@mantine/form'
import React from 'react'
import { Apis, AuthPosturl } from '~/components/general/api'
import Forminput from '~/components/general/form-input'
import type { AuthModal } from '~/components/user/header'
import { ErrorAlert, HotAlert } from '~/components/utils/utils'


type VerifyEmailStack = ReturnType<typeof useModalsStack<AuthModal>>

type VerifyEmailProps = { stack?: VerifyEmailStack, email: string, tag: "REGISTRATION" | "FORGOT-PASSWORD", onSuccess?: () => void }

export default function VerifyEmail({ stack, email, tag, onSuccess }: VerifyEmailProps) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { otp: "", },
    validate: { otp: (value) => value.length !== 6 ? "OTP must be 6 digits" : null, },
  })

  form.watch("otp", ({ value }) => {
    if (value.length === 6) {
      HandleSubmission({ otp: value })
    }
  })
  async function resendHandleSubmission() {
    const res = await AuthPosturl(Apis.users.resendotp, { email })
    if (res.status === 200) {

    }
  }

  async function HandleSubmission(values: typeof form.values) {
    try {
      const res = await AuthPosturl(Apis.users.acceptotp, { email, code: values.otp, tag })
      console.log(res.status)
      if (res?.data.status === 400) {
        ErrorAlert(res.data.msg)
      }  else if (res?.data.status === 200) {
        stack?.close('otp')
        stack?.open('login')
        onSuccess?.()
              HotAlert(res.data.msg)

      }
    } catch (error) {
      ErrorAlert((error as Error).message);
    }
  }


  return (
    <div>
      <div>
        <div className="w-full max-w-xl mx-auto py-10 px-3">
          <div className="text-yellow-dark font-base text-center font-extrabold text-4xl md:text-5xl mb-7">Verify Email</div>
          <div className="text-center">We sent a 6-digit code to {email}. It expires soon - check your inbox (spam).</div>

          <form onSubmit={form.onSubmit(HandleSubmission)} className="size-fit mx-auto my-10">
            <Forminput formtype="otp" error={form.errors.otp?.toString() || ""}{...form.getInputProps("otp")} content="" />
          </form>
          <div className="mb-5 text-center">Didn’t receive the email? <button className="text-lime-dark font-bold underline" onClick={resendHandleSubmission}>Resend a new code</button></div>
        </div>
      </div>
    </div>
  )
}
