import { useState } from "react";
import { Outlet } from "react-router";
import AdminHeader from "~/components/admin/header";
import AdminSidebar from "~/components/admin/sidebar";

export default function Layout() {
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(true);

  return (
    <div className="overflow-hidden relative">
      <div className="fixed w-full z-10">
        <AdminHeader />
      </div>

      <div className="flex w-full items-center">
        <div className={`h-screen ${mobile ? "w-[80vw] absolute" : "w-0"} transition-all lg:w-[27%] overflow-hidden`}>
          <AdminSidebar />
        </div>

        <div className={`h-screen ${mobile ? "w-[80vw]" : "w-full"} transition-all overflow-x-hidden`}>
          <div className="mb-10">
            <Outlet/>
          </div>
        </div>
      </div>

    </div>
  );
}