import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import type { RootState } from '~/Lib/store'

export default function AdminDashboard() {
    const {profile} = useSelector((state: RootState) => state.data)
    return (
        <div>
            <div className="pt-5 mx-5">
                <div className="text-[2rem] font-semibold mb-3">Welcome back, {profile.firstName}</div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="bg-gray flex border border-lightest items-center py-10 gap-2 px-3 cursor-pointer rounded-xl shadow-xl"><FaUsers size={22} />Registered Users</div>
                    <div className="bg-gray flex border border-lightest items-center py-10 gap-2 px-3 cursor-pointer rounded-xl shadow-xl"><FaUsers size={22} />Total Deposit</div>
                    <div className="bg-gray flex border border-lightest items-center py-10 gap-2 px-3 cursor-pointer rounded-xl shadow-xl"><FaUsers size={22} />Total Withdraw</div>
                    <div className="bg-gray flex border border-lightest items-center py-10 gap-2 px-3 cursor-pointer rounded-xl shadow-xl"><FaUsers size={22} />Total Referral</div>
                    <div className="bg-gray flex border border-lightest items-center py-10 gap-2 px-3 cursor-pointer rounded-xl shadow-xl"><FaUsers size={22} />Total Send</div>
                    <div className="bg-gray flex border border-lightest items-center py-10 gap-2 px-3 cursor-pointer rounded-xl shadow-xl"><FaUsers size={22} />Total Investment</div>
                    <div className="bg-gray flex border border-lightest items-center py-10 gap-2 px-3 cursor-pointer rounded-xl shadow-xl"><FaUsers size={22} />Total Ticket</div>
                </div>
                
            </div>
        </div>
    )
}
