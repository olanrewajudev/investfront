import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Apis, AuthGeturl } from '~/components/general/api'
import Table from '~/components/table/Table'
import Tbody from '~/components/table/Tbody'
import Td from '~/components/table/Td'
import Thead from '~/components/table/Thead'
import Tr from '~/components/table/Tr'
import { formatAmount, formatDate } from '~/components/utils/utils'
const Headers = ["Title", "Amount", "Status", "TxID", "Date"]

export default function Transaction() {
    const { data: transaction = [], } = useQuery({
        queryKey: ['transactions'],
        queryFn: async () => {
            const res = await AuthGeturl(`${Apis.transaction.alltransactions}`)
            return res.msg
        },
    })
    return (
        <div>
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
    )
}
