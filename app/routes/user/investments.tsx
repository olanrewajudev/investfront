import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Apis, AuthGeturl } from '~/components/general/api'

export default function MyInvestments() {

  const { data: investments = [], isLoading } = useQuery({
    queryKey: ['my-investments'],
    queryFn: async () => {
      const res = await AuthGeturl(Apis.plans.getallinvestment)
      return res.msg
    }
  })

  if (isLoading) return <div className="p-5">Loading investments...</div>

  // 🔥 Stats
  const totalInvested = investments.reduce((acc: number, i: any) => acc + i.amount, 0)
  const totalReturns = investments.reduce((acc: number, i: any) => acc + i.returns, 0)
  const active = investments.filter((i: any) => i.status === 'active').length
  const completed = investments.filter((i: any) => i.status === 'completed').length

  // 🔥 Progress calculator
  const getProgress = (start: string, end: string) => {
    const startDate = new Date(start).getTime()
    const endDate = new Date(end).getTime()
    const now = new Date().getTime()

    const total = endDate - startDate
    const current = now - startDate

    const percent = (current / total) * 100
    return Math.min(100, Math.max(0, percent))
  }

  return (
    <div className="mx-5 mt-4">

      {/* HEADER */}
      <div className="text-[2.5rem] font-bold mb-6">My Investments</div>

      {/* 🔥 PREMIUM STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

        <div className="rounded-2xl p-4 text-primary-dark bg-linear-to-r from-yellow-dark to-primary-dark shadow">
          <div className="text-sm opacity-80 font-bold">Invested</div>
          <div className="text-xl font-bold">${totalInvested.toLocaleString()}</div>
        </div>

        <div className="rounded-2xl p-4 text-white bg-linear-to-r from-primary-dark to-lime-light shadow">
          <div className="text-sm opacity-80 font-bold">Returns</div>
          <div className="text-xl font-bold">${totalReturns.toLocaleString()}</div>
        </div>

        <div className="rounded-2xl p-4 text-primary-dark bg-linear-to-r from-lime to-primary-dark shadow">
          <div className="text-sm opacity-80 font-bold">Active</div>
          <div className="text-xl font-bold">{active}</div>
        </div>

        <div className="rounded-2xl p-4 text-primary-dark bg-linear-to-r from-dark-green to-lime-dark shadow">
          <div className="text-sm opacity-80 font-bold">Completed</div>
          <div className="text-xl font-bold">{completed}</div>
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {investments.length > 0 ? (
          investments.map((item: any) => {
            const progress = getProgress(item.startDate, item.endDate)
            return (
              <div key={item.id} className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <div className="font-semibold text-lg">{item.plans?.title}</div>
                  <div className={`text-xs px-3 py-1 rounded-full font-medium
                    ${item.status === 'active' ? 'bg-yellow-dark text-white' : 'bg-primary-dark text-white'}`}>
                    {item.status}
                  </div>
                </div>

                <div className="text-xs text-gray-500 mb-3">{item.walletName}</div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-lg font-bold">${item.amount.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Invested</div>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-bold text-lime">${item.returns.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Returns</div>
                  </div>
                </div>
                <div className="text-sm mb-3">Ends <span className="font-semibold">{item.timed}</span></div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-2">
                  <div className={`h-2 ${   item.status === 'completed' ? 'bg-primary-dark' : 'bg-yellow-dark' }`} style={{ width: `${progress}%` }}/>
                </div>
                <div className="text-xs text-gray-500 text-right">{Math.floor(progress)}%</div>
              </div>
            )
          })
        ) : (
          <div>No investments yet</div>
        )}
      </div>

    </div>
  )
}