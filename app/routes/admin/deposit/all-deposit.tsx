import React from 'react'
import { Apis, AuthGeturl } from '~/components/general/api'
import Table from '~/components/table/Table'
import Tbody from '~/components/table/Tbody'
import Td from '~/components/table/Td'
import Thead from '~/components/table/Thead'
import Tr from '~/components/table/Tr'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { ErrorAlert, formatDate, HotAlert } from '~/components/utils/utils'
import Linked from '~/components/general/linked'
const Headers = ["Title", "Amount", "Status", "TxID", "Date", '', '']
export default function AllDeposit() {
  const { data: deposit = [], } = useQuery({
    queryKey: ['deposits'],
    queryFn: async () => {
      const res = await AuthGeturl(`${Apis.transaction.alldeposit}`)
      return res.msg
    },
  })
  return (
    <div>
      <div>


        <div className="m-5">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[1.9rem] font-semibold">All Deposit</div>
            <div className="text-lg border rounded-full px-4 py-2 font-semibold hover:bg-yellow-dark cursor-pointer">Deposit</div>
          </div>

          <div className="border rounded-2xl border-lightest">
            <div className="border rounded-2xl border-lightest m-5">
              <div className="overflow-x-auto w-full no-scrolls">
                <Table>
                  <Thead><Tr header last={false}>{Headers.map((h, i) => (<Td key={i} className="font-semibold">{h}</Td>))}</Tr></Thead>
                  <Tbody>
                    {deposit.map((item: any, index: number) => (
                      <Tr key={index} last={index === deposit.length - 1}>
                        <Td>{item.title}</Td>
                        <Td>${item.amount}</Td>
                        <Td><span className={`px-2 py-1 rounded text-xs ${item.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : item.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}> {item.status}</span></Td>
                        <Td className="truncate max-w-[120px]">{item.txid}</Td>
                        <Td>{formatDate(item.date)}</Td>
                        <Td>Update</Td>
                        <Td><Linked to={`/admin/deposit/single-deposit/${item.id}`}>View</Linked></Td>
                      </Tr>
                    ))}
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
