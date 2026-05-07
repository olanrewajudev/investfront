import React from 'react'
import { useSelector } from 'react-redux'
import { offlineServer } from '~/components/general/api'
import { BiWallet, BiTrendingUp, BiDollarCircle, } from 'react-icons/bi'
import type { RootState } from '~/Lib/store'

export default function Wallet() {
  const { profile } = useSelector((state: RootState) => state.data)

  const formatAmount = (amount: number) => {
    return Number(amount).toLocaleString()
  }

  const totalBalance = profile?.wallets?.reduce(
    (acc: number, item: { currbal: number }) =>
      acc + Number(item.currbal),
    0
  )

  return (
    <div className="w-full p-4 md:p-8">
      <div className="grid lg:grid-cols-3 gap-5 mb-8">
        <div className="bg-linear-to-r from-yellow-dark to-primary-dark  rounded-3xl p-6 text-white shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Total Wallet Balance</p>
              <h1 className="text-4xl font-bold mt-3">${formatAmount(totalBalance || 0)}</h1>
            </div>
            <div className="w-[70px] h-[70px] rounded-2xl bg-white/20 flex items-center justify-center text-4xl"><BiWallet /></div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 border border-lightest shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Deposits</p>
              <h2 className="text-3xl font-bold mt-3 text-gray-800">${formatAmount(profile?.deposits || 0)}</h2>
            </div>
            <div className="w-[65px] h-[65px] rounded-2xl bg-lime-light text-primary-dark flex items-center justify-center text-3xl"><BiTrendingUp /></div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 border border-lightest shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Withdrawals</p>
              <h2 className="text-3xl font-bold mt-3 text-gray-800">${formatAmount(profile?.withdraws || 0)}</h2>
            </div>
            <div className="w-[65px] h-[65px] rounded-2xl bg-red-100 text-error flex items-center justify-center text-3xl"><BiDollarCircle /></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-lightest shadow-sm overflow-hidden">
        <div className="p-6 border-b border-lightest">
          <h2 className="text-2xl font-bold text-gray-800">My Wallets</h2>
          <p className="text-gray-500 mt-1">View all your crypto wallet balances</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
          {profile?.wallets?.map((item: { id: number, currbal: number, prevbal: number, admins: { title: string, short: string, image: string, sellprice: string, address: string, } }, i: React.Key) => (
            <div key={i} className="rounded-3xl border-2 border-primary-dark p-5 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={`${offlineServer}/wallets/${item.admins.image}`} alt={item.admins.title} className="w-[55px] h-[55px] rounded-full object-cover" />
                  <div><h3 className="font-bold text-lg text-gray-800">  {item.admins.title}</h3><p className="text-sm text-gray-500">{item.admins.short}</p></div>
                </div>
                <div className="bg-primary-dark text-white text-xs font-semibold px-3 py-1 rounded-full">Active</div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-500">Current Balance</p>
                <h1 className="text-3xl font-bold text-gray-900 mt-2">${formatAmount(item.currbal)}</h1>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Market Price</span>
                  <span className="font-semibold">{item.admins.sellprice}</span>
                </div>

                {/* <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Previous Balance</span>
                  <span className="font-semibold">${formatAmount(item.prevbal)}</span>
                </div> */}
              </div>

              <div className="mt-6 bg-gray-50 rounded-2xl p-4">
                <p className="text-xs text-gray-500 mb-2">Wallet Address</p>
                <p className="text-xs break-all font-medium text-gray-700">{item.admins.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}