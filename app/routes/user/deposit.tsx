import React from 'react'

import { Apis, AuthGeturl, AuthPosturl, } from '~/components/general/api'
import Table from '~/components/table/Table'
import Tbody from '~/components/table/Tbody'
import Td from '~/components/table/Td'
import Thead from '~/components/table/Thead'
import Tr from '~/components/table/Tr'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { LiaTimesSolid } from 'react-icons/lia'
import { useForm } from '@mantine/form'
import Forminput from '~/components/general/form-input'
import Formbutton from '~/components/general/form-button'
import { ErrorAlert, formatAmount, formatDate, HotAlert } from '~/components/utils/utils'
import ImageUpload from '~/components/general/ImageUpload'
import { useSelector } from 'react-redux'
import type { RootState } from '~/Lib/store'
import Linked from '~/components/general/linked'
const Headers = ["Title", "Amount", "Status", "TxID", "Date"]
export default function Deposit() {
  const queryClient = useQueryClient()
  const [opened, { open, close }] = useDisclosure()
  const { data: transaction = [], } = useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      const res = await AuthGeturl(`${Apis.transaction.alldeposit}`)
      return res.msg
    },
  })
  const { data: wallet = [], } = useQuery({
    queryKey: ['wallets'],
    queryFn: async () => {
      const res = await AuthGeturl(`${Apis.wallet.getallwallets}`)
      return res.msg
    },
  })
  const form = useForm<{ amount: string; adminwalletid: string; txid: string; image: File | null }>({
    initialValues: { amount: '', adminwalletid: "", txid: '', image: null },
    validate: {
      amount: value => !value ? 'amount is required' : null,
      adminwalletid: value => !value ? 'Select the wallet address of your choice' : null,
      txid: value => !value ? 'Transaction Id is required' : null,
    }
  })

  async function handleCreateDeposut(value: typeof form.values) {
    try {
      const formData = new FormData()
      formData.append('amount', value.amount)
      formData.append('txid', value.txid)
      formData.append('adminwalletid', value.adminwalletid)

      if (value.image) {
        formData.append('image', value.image)
      }
      const res = await AuthPosturl(Apis.transaction.deposit, formData, 'FILE',)
      if (res.data.status === 500) {
        ErrorAlert(res.data.msg)
      } else if (res.data.status === 404) {
        ErrorAlert(res.data.msg)
      } else if (res.status === 200) {
        HotAlert(res.data.msg)
        queryClient.invalidateQueries({ queryKey: ['transactions'] })
        close()
      }
    } catch (error) {

    }
  }
  const selectedWallet = wallet.find(
    (w: any) => String(w.id) === form.values.adminwalletid
  )
  const { profile } = useSelector((state: RootState) => state.data)
  return (
    <div>
      <div>
        {profile.verified === 'false' ? (
          <div className="flex items-center justify-center min-h-[90vh]">
            <div className="max-w-md w-full bg-white border rounded-2xl p-6 text-center shadow-sm">
              <div className="text-xl font-semibold mb-2">Complete Your KYC Verification</div>
              <p className="text-sm text-gray-500 mb-5">You need to verify your identity before you can make a deposit.</p>
              <Linked to='/user/kyc' className="inline-block bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium  transition">Go to KYC</Linked>
            </div>
          </div>
        ) : (
          <div className="">
            <Drawer opened={opened} onClose={close} withCloseButton={false} position='right' size='32rem'>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold">Deposit</div>
                <div className=""><LiaTimesSolid size={24} /></div>
              </div>
              <form onSubmit={form.onSubmit(handleCreateDeposut)}>
                <Forminput error='' content='Amount' {...form.getInputProps('amount')} placeholder='Enter amount' />
                <Forminput error='' content='Select Wallet' formtype='select' options={[{ label: '-- Select Wallet --', value: '' }, ...wallet.map((w: any) => ({ label: w.title, value: String(w.id), }))]} {...form.getInputProps('adminwalletid')} />
                {selectedWallet && (
                  <div className="my-3 flex items-center justify-between border rounded-lg px-3 py-2 bg-gray-50">
                    <div className="text-sm truncate">{selectedWallet.address}</div>
                    <div onClick={() => { navigator.clipboard.writeText(selectedWallet.address), HotAlert('Copied!') }} className="ml-3 cursor-pointer text-gray-600 hover:text-black" title="Copy address"> 📋</div>
                  </div>
                )}
                <div className="">
                  <div className="text-sm font-semibold">Proof</div>
                  <ImageUpload title={''} description={''} onChange={(files) => form.setFieldValue('image', files[0] || null)} />
                </div>
                <Forminput error='' content='Transaction ID' {...form.getInputProps('txid')} placeholder='Enter transaction ID' />

                <div className="mt-6"> <Formbutton title='Deposit' loading={form.submitting} /></div>
              </form>
            </Drawer >

            <div className="m-5">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[1.9rem] font-semibold">All Deposit</div>
                <div onClick={open} className="text-lg border rounded-full px-4 py-2 font-semibold hover:bg-yellow-dark cursor-pointer">Deposit</div>
              </div>

              <div className="border rounded-2xl border-lightest">
                <div className="border rounded-2xl border-lightest m-5">
                  <div className="overflow-x-auto w-full no-scrolls">
                    <Table>
                      <Thead><Tr header last={false}>{Headers.map((h, i) => (<Td key={i} className="font-semibold">{h}</Td>))}</Tr></Thead>
                      <Tbody>
                        {transaction.map((item: any, index: number) => (
                          <Tr key={index} last={index === transaction.length - 1}>
                            <Td>{item.title}</Td>
                            <Td>${formatAmount(item.amount)}</Td>
                            <Td><span className={`px-2 py-1 rounded text-xs ${item.status === 'pending' ? 'bg-yellow' : item.status === 'successful' ? 'bg-primary-dark text-white' : 'bg-error text-white'}`}> {item.status}</span></Td>
                            <Td className="truncate max-w-[120px]">{item.txid}</Td>
                            <Td>{formatDate(item.date)}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div >
        )
        }
      </div >
    </div >
  )
}
