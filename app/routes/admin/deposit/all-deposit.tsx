import React, { useState } from 'react'
import { Apis, AuthGeturl, AuthPosturl } from '~/components/general/api'
import Table from '~/components/table/Table'
import Tbody from '~/components/table/Tbody'
import Td from '~/components/table/Td'
import Thead from '~/components/table/Thead'
import Tr from '~/components/table/Tr'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { ErrorAlert, formatDate, HotAlert } from '~/components/utils/utils'
import Linked from '~/components/general/linked'
import { useForm } from '@mantine/form'
import { Menu, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
const Headers = ["Title", "Amount", "Status", "TxID", "Date", '', '']
export default function AllDeposit() {
  const queryClient = useQueryClient()
  const [note, setNote] = React.useState('')
  const [selectedDeposit, setSelectedDeposit] = useState<any>(null)
  const [declineOpened, { open: openDecline, close: closeDecline }] = useDisclosure(false)

  const { data: deposit = [], } = useQuery({
    queryKey: ['deposits'],
    queryFn: async () => {
      const res = await AuthGeturl(`${Apis.transaction.alldeposit}`)
      return res.msg
    },
  })

  const verifyDeposit = async (item: any) => {
    try {
      const payload = {
        userid: item.user,
        depositid: item.id
      }
      const res = await AuthPosturl(Apis.transaction.verifydeposit, payload)
      HotAlert(res.data.message)
      queryClient.invalidateQueries({ queryKey: ['deposits'] })
    } catch (error) {
      ErrorAlert((error as Error).message)
    }
  }
  const declineDeposit = async (item: any) => {
    if (!item) return ErrorAlert('No deposit selected')

    try {
      const payload = {
        userid: item.user,
        depositid: item.id,
        note: note,
      }

      const res = await AuthPosturl(Apis.transaction.declinedeposit, payload)

      if (res.data.status === 404) {
        ErrorAlert(res.data.msg)
      } else if (res.data.status === 200) {
        setNote('')
        setSelectedDeposit(null)
        closeDecline()
        HotAlert(res.data.message)
      }

      queryClient.invalidateQueries({ queryKey: ['deposits'] })
    } catch (error) {
      ErrorAlert((error as Error).message)
    }
  }

  return (
    <div>
      <Modal size="32rem" centered opened={declineOpened} onClose={closeDecline} title="Decline Deposit">
        <div className="flex flex-col gap-4">
          <div>
            <label className="font-semibold">Reason for declining</label>
            <textarea className="w-full border rounded-lg p-3 mt-2 outline-none" placeholder="Enter reason..." value={note} onChange={(e) => setNote(e.target.value)} />
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={closeDecline} className="w-full py-2.5 rounded-full bg-lightest font-semibold">Cancel</button>
            <button onClick={() => declineDeposit(selectedDeposit)} className="w-full py-2.5 rounded-full bg-error text-white font-semibold">Submit</button>
          </div>
        </div>
      </Modal>
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
                        <Td><span className={`px-2 py-1 rounded text-xs ${item.status === 'pending' ? 'bg-yellow' : item.status === 'successful' ? 'bg-primary-dark text-white' : 'bg-error text-white'}`}> {item.status}</span></Td>
                        <Td className="truncate max-w-[120px]">{item.txid}</Td>
                        <Td>{formatDate(item.date)}</Td>
                        <Td>
                          <Menu shadow="md" width={200}>
                            <Menu.Target><button className="text-primary-dark font-semibold">Update Status</button></Menu.Target>
                            <Menu.Dropdown>
                              <Menu.Item disabled={item.status !== 'pending'} onClick={() => verifyDeposit(item)}>Verify</Menu.Item>
                              <Menu.Item disabled={item.status !== 'pending'} onClick={() => { setSelectedDeposit(item), openDecline() }}>Decline</Menu.Item>
                            </Menu.Dropdown>
                          </Menu>
                        </Td>
                        <Td><Linked to={`/admin/deposit/single-deposit/${item.id}`} className='text-primary-dark font-semibold'>View</Linked></Td>
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
