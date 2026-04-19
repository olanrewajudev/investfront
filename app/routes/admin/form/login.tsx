import { useForm } from "@mantine/form";
import Cookies from "js-cookie";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Apis, AuthPosturl, CookieName, Posturl } from "~/components/general/api";
import Formbutton from "~/components/general/form-button";
import Forminput from "~/components/general/form-input";
import Linked from "~/components/general/linked";
import { ErrorAlert, HotAlert } from "~/components/utils/utils";
import { dispatchToken } from "~/Lib/reducer";

export default function Login() {
    const [pass1, setPass1] = useState(false);
    const Icon1 = pass1 ? FaEye : FaEyeSlash;
    const [verifyEmail, setVerifyEmail] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const form = useForm({
        mode: "uncontrolled", initialValues: { email: '', password: '', },
        validate: {
            email: value => !value ? 'Email address is required' : null,
            password: value => !value ? 'Password is required' : null
        }
    })

      async function HandleSubmission(values: typeof form.values) {
    
        try {
          const res = await Posturl(Apis.users.login, values)
          console.log(res.status)
         if (res.status === 200) {
            const token = res.data.token;
            Cookies.set(CookieName, token);
            dispatch(dispatchToken(token));
            HotAlert(res.data.msg)
            navigate('/admin/home-dashboard');
    
          }
        } catch (error) {
          ErrorAlert((error as Error).message)
        }
      }
    

    return (
        <div>
            <div className='bg-gray lg:w-[50rem] mx-5 lg:mx-auto my-10 p-5'>

                <div className="flex items-center justify-center no-scrolls py-7 gap-10 mb-">
                    <div className="text-yellow-dark text-center font-extrabold text-4xl md:text-5xl font-base w-3/4">Log In As Admin</div>
                </div>
                <form onSubmit={form.onSubmit(HandleSubmission)}>
                    <Forminput content="Username or Email" error={form.errors.email?.toString() || ''}{...form.getInputProps("email")} placeholder='Username or Email' />
                    <div className="relative">
                        <Forminput content="Password" error={form.errors.password?.toString() || ""} {...form.getInputProps("password")} placeholder="Password" type={pass1 ? "text" : "password"} />
                        <div onClick={() => setPass1(!pass1)} className="absolute right-4 top-9.5 cursor-pointer text-dark-gray"><Icon1 /></div>
                    </div>
                    <div className="text-center uppercase">or</div>

                    <div className="space-y-3 mt-5">
                      
                        <Formbutton title="Continue" className='bg-yellow-dark text-white' loading={form.submitting} />
                        <Linked to="/admin/signup" className="text-center flex items-center justify-center gap-1 mt-5">Don’t have an account?<div className="underline cursor-pointer">Sign Up</div>
                        </Linked>
                        <div className="text-center mt-5 font-bold cursor-pointer">Forgot Password?</div>
                    </div>
                </form>
            </div>
        </div>
    )
}
