import { Link } from "react-router";
import Image from "~/components/general/image";
import banner from '../../../public/general/cta-bg.jpg'
import FormInput from "~/components/general/form-input";
import FormButton from "~/components/general/form-button";
import Forminput from "~/components/general/form-input";
import Linked from '~/components/general/linked'

export default function Contactus() {
  return (
    <div>
      <div className="relative">
        <Image src={banner} className='h-[18rem] lg:h-[30rem] brightness-50 w-full object-cover' />
        <div className="absolute inset-0 text-white flex items-center justify-center text-center flex-col">
          <p className="font-medium text-[3rem] lg:text-[4rem]">Buy Crypto</p>
          <div className="flex items-center gap-2 font-medium mt-3">
            <Linked to='' className='hover:text-yellow'>Home</Linked> / <div>Contact Us</div>
          </div>
        </div>
      </div>

      <div className="lg:px-[5rem] px-5 py-10 grid lg:grid-cols-3 w-full gap-10">
        <div className="lg:col-span-2">
          <div>
            <div className="text-xl font-semibold mb-4">Contact Information</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="font-semibold">Crypto <span className="text-yellow">Coin</span></div>
                <div className="lg:text-sm">34 south franklin road santa ana,ca 8975,usa</div>
              </div>

              <div>
                <div className="font-semibold">Contact Number</div>
                <div className="lg:text-sm">phone: 781-123-9865</div>
                <div className="lg:text-sm">toll free: 800-123-5689</div>
              </div>

              <div>
                <div className="font-semibold">Office Hours</div>
                <div className="lg:text-sm">monday - friday</div>
                <div className="lg:text-sm">8:30am - 5:00pm</div>
              </div >
            </div>
          </div>

          <form className="mt-10 space-y-4 ">
            <div className="text-lg font-semibold">Complete and submit form below</div>
            <div className="grid grid-cols-2 gap-4">
              <FormInput error="" content={""} placeholder="Full Name" />
              <FormInput type="email" error="" content={""} placeholder="Email" />
              <FormInput type="number" error="" content={""} placeholder="Phone" />
              <FormInput error="" content={""} placeholder="Subject" />
            </div>
            <div>
              <Forminput error="" formtype="textarea" content="" textareaHeight={'11rem'} />
            </div>
            <FormButton className="bg-yellow px-4 py-3 rounded-md text-white" title={"Submit"} />
          </form>
        </div>
        <div className="mt-12 w-full">
          <div className="text-lg font-semibold mb-4">Our Location</div>

          <div className="w-full h-[27rem]  rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18255.67417998671!2d-97.61963338439034!3d35.50909204613822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sng!4v1776161200603!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  )
}