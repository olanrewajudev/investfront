import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Apis, AuthGeturl } from '~/components/general/api'
import Linked from '~/components/general/linked'

export default function Plans() {
  const { data: plan = [] } = useQuery({
    queryKey: ['plans'],
    queryFn: async () => {
      const res = await AuthGeturl(Apis.plans.getallplans)
      return res.msg
    }
  })


  return (
    <div className='mx-5 mt-4'>
      <div className="text-[2.5rem] font-bold mb-6">All Plans</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plan.length > 0 ? (
          plan.map((item: any) => (
            <div key={item.id} className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex justify-between items-start mb-3"><div className="text-lg font-semibold">{item.title}</div><div className="text-xs text-gray-500">{item.duration} {item.durationType}</div></div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-primary-dark">{item.returns}%</div>
                <div className="text-xs text-gray-500">Return Rate</div>
              </div>

              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between"><span>Deposit</span><span>${item.minDept.toLocaleString()} - ${item.maxDept.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Withdraw</span><span>${item.minWithd.toLocaleString()} - ${item.maxWithd.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Capital</span><span className={item.returnCapital === "true" ? "text-green-600" : "text-red-500"}>{item.returnCapital === "true" ? "Returned" : "Not Returned"}</span></div>
                <div className="flex justify-between"><span>Referral Bonus</span><span> {item.refbonus} {item.refbonusType === "Percentage" ? "%" : ""}</span></div>
              </div>
              <Linked to={`/user/plans/invest-in-plan/${item.id}`}>
                <div className="mt-5 w-full border border-primary-dark text-primary-dark py-2 rounded-xl hover:bg-primary-dark hover:text-white transition text-center">Choose Plan</div>
              </Linked>
            </div>
          ))
        ) : (
          <div>No plans available</div>
        )}
      </div>
    </div>
  )
}