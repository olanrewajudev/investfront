import { MdContentCopy } from "react-icons/md"
import { TbChartHistogram } from "react-icons/tb"
import { useSelector } from "react-redux"
import Image from "~/components/general/image"
import Table from "~/components/table/Table"
import Tbody from "~/components/table/Tbody"
import Td from "~/components/table/Td"
import Thead from "~/components/table/Thead"
import Tr from "~/components/table/Tr"
import type { RootState } from "~/Lib/store"
const Headers = [
  "Description",
  "Transaction Id",
  "Type",
  "Amount",
  "Fee",
  "Status",
  "Gateway",
  "",
]
export default function dashboard() {
  const { profile } = useSelector((state: RootState) => state.data)
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
              <div className="tont-bold">$0</div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 mt-4">
            <div className="bg-primary-dark w-full rounded-full py-2.5 font-semibold text-center cursor-pointer text-white">Deposit</div>
            <div className="bg-yellow-dark w-full rounded-full py-2.5 font-semibold text-center cursor-pointer text-white">Invest Now</div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-5 ">
          <div className="flex md:items-start items-center gap-3 bg-lightest py-3 px-4">
            <div className="bg-dark-gray text-lightest rounded-full p-1 text-2xl"><TbChartHistogram /></div>
            <div className="">{ } All Transactions</div>
          </div>
          <div className="flex  md:items-start items-center cursor-pointer gap-3 bg-lightest py-3 px-4">
            <div className="bg-dark-gray text-lightest rounded-full p-1 text-2xl"><TbChartHistogram /></div>
            <div className="">{ } Total Deposits</div>
          </div>
          <div className="flex  md:items-start items-center cursor-pointer gap-3 bg-lightest py-3 px-4">
            <div className="bg-dark-gray text-lightest rounded-full p-1 text-2xl"><TbChartHistogram /></div>
            <div className="">{ } Total Investment</div>
          </div>
          <div className="flex  md:items-start items-center cursor-pointer gap-3 bg-lightest py-3 px-4">
            <div className="bg-dark-gray text-lightest rounded-full p-1 text-2xl"><TbChartHistogram /></div>
            <div className="">{ } Total Profit</div>
          </div>
          <div className="flex  md:items-start items-center cursor-pointer gap-3 bg-lightest py-3 px-4">
            <div className="bg-dark-gray text-lightest rounded-full p-1 text-2xl"><TbChartHistogram /></div>
            <div className="">{ } All Transactions</div>
          </div>
          <div className="flex  md:items-start items-center cursor-pointer gap-3 bg-lightest py-3 px-4">
            <div className="bg-dark-gray text-lightest rounded-full p-1 text-2xl"><TbChartHistogram /></div>
            <div className="">{ } All Withdraw</div>
          </div>
        </div>

        <div className="border border-lightest rounded-2xl mt-10">
          <div className="border border-lightest rounded-2xl p-5 m-4">
            <div className="overflow-x-auto no-scrolls">
              <Table>
                <Thead> <Tr header last={false}>{Headers.map((h, i) => (<Td key={i} className="font-semibold">{h}</Td>))}</Tr></Thead>
                <Tbody>
                  {
                    <div className=""></div>
                  }
                </Tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
