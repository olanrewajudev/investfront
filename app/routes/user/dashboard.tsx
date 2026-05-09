import { useQuery } from "@tanstack/react-query"
import { MdContentCopy } from "react-icons/md"
import { TbChartHistogram } from "react-icons/tb"
import { useSelector } from "react-redux"
import { Apis, AuthGeturl } from "~/components/general/api"
import Image from "~/components/general/image"
import Table from "~/components/table/Table"
import Tbody from "~/components/table/Tbody"
import Td from "~/components/table/Td"
import Thead from "~/components/table/Thead"
import Tr from "~/components/table/Tr"
import type { RootState } from "~/Lib/store"
const Headers = ["Title", "Amount", "Status", "TxID", "Date"]

import { FaUsers, FaMoneyBillWave, FaWallet, FaBoxOpen, FaBitcoin, FaCommentDots } from 'react-icons/fa'
import Linked from "~/components/general/linked"
import { formatAmount, formatDate } from "~/components/utils/utils"

export default function dashboard() {
  const { profile } = useSelector((state: RootState) => state.data)
  const { data: transaction = [], } = useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      const res = await AuthGeturl(`${Apis.transaction.alltransactions}`)
      return res.msg
    },
  })
  const { data: admindashboard = [] } = useQuery({
    queryKey: ['admin-dashboards'],
    queryFn: async () => {
      const res = await AuthGeturl(`${Apis.users.userdasboard}/${profile.id}`)
      return res.msg
    },
  })

  const getIcon = (title: string) => {
    switch (title) {
      case 'registered users':
        return <FaUsers size={22} />

      case 'total withdrawals':
      case 'total deposits':
        return <FaMoneyBillWave size={22} />

      case 'total wallets':
        return <FaWallet size={22} />

      case 'total packages':
        return <FaBoxOpen size={22} />

      case 'mining investments':
      case 'active mining':
      case 'in-active mining':
        return <FaBitcoin size={22} />

      case 'feedbacks':
        return <FaCommentDots size={22} />

      default:
        return <FaUsers size={22} />
    }
  }

  return (
    <div>
      <div className="md:flex items-start justify-between border-b px-4 py-4 border-lightest">
        <div className="flex items-center flex-col gap ">
          <Image src={profile.image || '/general/user.png'} className="size-16" />
          <div className="text-center">{profile.firstName} {profile.lastName}</div>
        </div>
        <div className="">
          <div className="">Referral Code</div>
          <div className="border rounded-full py-2 px-5 justify-center gap-3 text-center flex items-center ">
            <div className="">{profile.refid}</div>
            <div className=""><MdContentCopy /></div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="lg:hidden">
          <div className="bg-linear-to-r from-yellow-dark to-primary-dark p-3 rounded-xl">
            <div className=" flex items-end justify-end "><div className="bg-white font-bold text-sm px-2 py-1 rounded-full">WALLET</div></div>
            <div className="text-[1.5rem] font-bold text-white">Account Balance</div>
            <div className="flex text-white text-lg mt-3 items-center justify-between">
              <div className="font-bold">Main Wallet</div>
              <div className="tont-bold">${formatAmount(profile.deposits)}</div>
            </div>
            <div className="flex text-white text-lg mt-3 items-center justify-between">
              <div className="font-bold">Profit Wallet</div>
              <div className="tont-bold">${formatAmount(profile.returns)}</div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 mt-4">
            <div className="bg-primary-dark w-full rounded-full py-2.5 font-semibold text-center cursor-pointer text-white"> <Linked to='/user/deposit'>Deposit</Linked> </div>
            <div className="bg-yellow-dark w-full rounded-full py-2.5 font-semibold text-center cursor-pointer text-white"><Linked to='/user/investment'>Invest Now</Linked></div>
          </div>
        </div>

        <div className="pt-5">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {admindashboard.map((item: any, index: number) => (
              <div key={index} className="bg-white border border-lightest rounded-xl shadow-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: item.color }}>{getIcon(item.title)}</div>
                  <div className="text-right">
                    <h2 className="text-[1.5rem] font-bold">{item.total}</h2>
                    {item.totalAmounts && (<p className="text-[0.9rem] text-gray-500">{item.totalAmounts}</p>)}
                  </div>
                </div>
                <div className="capitalize text-[0.95rem] font-medium text-gray-700">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="m-5">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[1.9rem] font-semibold">All Transaction</div>
          </div>

          <div className="border rounded-2xl border-lightest">
            <div className="border rounded-2xl border-lightest m-5">
              <div className="overflow-x-auto w-full no-scrolls">
                <Table>
                  <Thead><Tr header last={false}>{Headers.map((h, i) => (<Td key={i} className="font-semibold">{h}</Td>))}</Tr></Thead>
                  <Tbody>
                    {transaction.length > 0 ? (

                      transaction.map((item: any, index: number) => (
                        <Tr key={index} last={index === transaction.length - 1}>
                          <Td>{item.title}</Td>
                          <Td>${formatAmount(item.amount)}</Td>
                          <Td><span className={`px-2 py-1 rounded text-xs ${item.status === 'pending' ? 'bg-yellow' : item.status === 'successful' ? 'bg-primary-dark text-white' : 'bg-error text-white'}`}>{item.status}</span></Td>
                          <Td className="truncate max-w-[120px]">{item.txid}</Td>
                          <Td>{formatDate(item.date)}</Td>
                        </Tr>
                      ))

                    ) : (
                      <Tr last>
                        <div className="m-5">There is no transaction at the moment</div>
                      </Tr>
                    )}
                  </Tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
