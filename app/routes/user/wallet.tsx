import React from 'react'
import { useSelector } from 'react-redux'
import { offlineServer } from '~/components/general/api'
import { BiWallet, BiTrendingUp, BiDollarCircle, } from 'react-icons/bi'
import type { RootState } from '~/Lib/store'
import Linked from '~/components/general/linked'

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
          {profile?.wallets?.length > 0 ? (
            profile?.wallets?.map((item: { id: number, currbal: number, prevbal: number, admins: { title: string, short: string, image: string, sellprice: string, address: string, } }, i: React.Key) => (

              <div key={i} className="relative overflow-hidden rounded-[28px] border border-[var(--color-border-gray)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary-lighter)] rounded-full blur-3xl opacity-70" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-lighter)] flex items-center justify-center overflow-hidden border border-[var(--color-border-gray)]"><img src={`${offlineServer}/wallets/${item.admins.image}`} alt={item.admins.title} className="w-10 h-10 object-cover" /></div>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--color-deep-gray)]">{item.admins.title}</h3>
                        <p className="text-sm text-[var(--color-text-gray)]">{item.admins.short}</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[var(--color-store-open)] text-[var(--color-store-text)] text-xs font-semibold">Active</div>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm text-[var(--color-text-gray)] mb-2">Current Balance</p>
                    <h1 className="text-4xl font-black tracking-tight text-[var(--color-primary-dark)]">${formatAmount(item.currbal)}</h1>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[var(--color-light-gray)] p-4 border border-[var(--color-border-gray)]">
                      <p className="text-xs text-[var(--color-text-gray)] mb-1">Previous</p>
                      <h2 className="text-lg font-bold text-[var(--color-deep-gray)]">${formatAmount(item.prevbal || 0)}</h2>
                    </div>
                    <div className="rounded-2xl bg-[var(--color-primary-lighter)] p-4 border border-[var(--color-primary-light)]">
                      <p className="text-xs text-[var(--color-text-gray)] mb-1">Market</p>
                      <h2 className="text-lg font-bold text-[var(--color-primary-dark)]">{item.admins.sellprice}</h2>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-dashed border-[var(--color-border-gray)] bg-[var(--color-bg)] p-4">
                    <p className="text-xs uppercase tracking-wider text-[var(--color-text-gray)] mb-2">Wallet Address</p>
                    <p className="text-sm break-all font-medium text-[var(--color-deep-gray)] leading-relaxed">{item.admins.address}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-[var(--color-primary-lighter)] flex items-center justify-center mb-5">
                <BiWallet className="text-5xl text-[var(--color-primary-dark)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-deep-gray)]">No Wallet Assets Yet</h2>
              <p className="text-[var(--color-text-gray)] mt-3 max-w-md leading-relaxed">Your wallet portfolio is currently empty. Once you receive deposits or activate an investment package, your crypto assets will appear here.</p>

              <Linked to='/user/plans' className="mt-6 px-6 py-3 rounded-2xl bg-[var(--color-primary-dark)] text-white font-semibold hover:opacity-90 transition">
                Explore Investment Plans
              </Linked>
            </div>)}
        </div>
      </div>
    </div>
  )
}