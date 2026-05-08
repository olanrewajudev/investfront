
import { Apis, AuthGeturl, AuthPosturl } from '~/components/general/api'
import Table from '~/components/table/Table'
import Tbody from '~/components/table/Tbody'
import Td from '~/components/table/Td'
import Thead from '~/components/table/Thead'
import Tr from '~/components/table/Tr'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Drawer, Select } from '@mantine/core'
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
import { countries } from 'countries-list'

const Headers = ["Title", "Amount", "Status", "TxID", "Date"]

export default function Withdraw() {
  const queryClient = useQueryClient()
  const [opened, { open, close }] = useDisclosure()
  const [openedCrypto, { open: openCrypto, close: closeCrypto }] = useDisclosure()

  const { data: transaction = [] } = useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      const res = await AuthGeturl(`${Apis.transaction.allwithdrawal}`)
      return res.msg
    },
  })

  const { data: wallet = [] } = useQuery({
    queryKey: ['wallets'],
    queryFn: async () => {
      const res = await AuthGeturl(`${Apis.wallet.getallwallets}`)
      return res.msg
    },
  })

  const form = useForm({
    initialValues: { country: '', accName: '', bank: '', accNumber: '', routineNumber: '', amount: '', walletid: '' },
    validate: {
      country: value => !value ? 'Country is required' : null,
      accName: value => !value ? 'Account Name is required' : null,
      bank: value => !value ? 'Bank is required' : null,
      accNumber: value => !value ? 'Account Number is required' : null,
      routineNumber: value => !value ? 'Routing Number is required' : null,
      amount: value => !value ? 'Amount is required' : null,
      walletid: value => !value ? 'Wallet is required' : null,
    }
  })

  const Cryptoform = useForm({
    initialValues: { address: '', amount: '', walletid: '' },
    validate: {
      amount: value => !value ? 'Amount is required' : null,
      address: value => !value ? 'Wallet Address is required' : null,
      walletid: value => !value ? 'Wallet is required' : null,
    }
  })

  async function handlebankdeposit(value: typeof form.values) {
    try {
      const payload = { ...value, walletid: Number(value.walletid) }
      const res = await AuthPosturl(Apis.transaction.bankwithdrawal, payload)
      HotAlert(res?.data.msg || 'Withdrawal submitted successfully')
      queryClient.invalidateQueries({
        queryKey: ['transactions']
      })
      form.reset()
      close()
    } catch (error: any) {
      ErrorAlert(error?.data?.message || 'Something went wrong')
    }
  }

  async function handlecryptodeposit(value: typeof Cryptoform.values) {
    try {
      const payload = { ...value, walletid: Number(value.walletid) }
      const res = await AuthPosturl(Apis.transaction.cryptowithdrawal, payload)
      HotAlert(res?.data.msg || 'Withdrawal submitted successfully')
      queryClient.invalidateQueries({ queryKey: ['transactions'] })
      Cryptoform.reset()
      closeCrypto()
    } catch (error: any) {
      ErrorAlert(error?.data?.message || 'Something went wrong')
    }
  }

  const selectedWallet = wallet.find((w: any) => String(w.id) === form.values.walletid)
  const selectedCryptoWallet = wallet.find((w: any) => String(w.id) === Cryptoform.values.walletid)
  const { profile } = useSelector((state: RootState) => state.data)

  return (
    <div>
      <div>
        {profile.verified === 'false' ? (
          <div className="flex items-center justify-center min-h-[90vh]">
            <div className="max-w-md w-full bg-white border rounded-2xl p-6 text-center shadow-sm"><div className="text-xl font-semibold mb-2">Complete Your KYC Verification</div>
              <p className="text-sm text-gray-500 mb-5">You need to verify your identity before you can make a deposit.</p>
              <Linked to='/user/kyc' className="inline-block bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium transition">Go to KYC</Linked>
            </div>
          </div>
        ) : (
          <div>
            <Drawer opened={opened} onClose={close} withCloseButton={false} position='right' size='32rem'>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold">Bank Withdrawal</div>
                <div onClick={close} className="cursor-pointer"><LiaTimesSolid size={24} /></div>
              </div>
              <form onSubmit={form.onSubmit(handlebankdeposit)}>
                <div className="mt-5">
                  <label className="text-sm font-medium mb-2 block">Country</label>
                  <Select searchable placeholder="Select country" data={Object.values(countries).map((country) => ({ value: country.name, label: country.name }))} value={form.values.country} onChange={(value) => form.setFieldValue('country', value || '')} />
                  {form.errors.country && (<div className="text-red-500 text-xs mt-1">{form.errors.country}</div>)}
                </div>
                <Forminput error='' content='Bank Name' {...form.getInputProps('bank')} placeholder='Enter bank name' />
                <Forminput error='' content='Account Number' {...form.getInputProps('accNumber')} placeholder='Enter account number' />
                <Forminput error='' content='Account Name' {...form.getInputProps('accName')} placeholder='Enter account name' />
                <Forminput error='' content='Routing Number' {...form.getInputProps('routineNumber')} placeholder='Enter routing number' />
                <Forminput error='' content='Select Wallet' formtype='select' options={[{ label: '-- Select Wallet --', value: '' }, ...wallet.map((w: any) => ({ label: w.title, value: String(w.id), }))]} {...form.getInputProps('walletid')} />
                {selectedWallet && (
                  <div className="my-3 flex items-center justify-between border rounded-lg px-3 py-2 bg-gray-50"><div className="text-sm truncate">{selectedWallet.address}</div></div>
                )}
                <Forminput error='' content='Amount' {...form.getInputProps('amount')} placeholder='Enter amount' />
                <div className="mt-6"><Formbutton title='Withdraw' loading={form.submitting} /></div>
              </form>
            </Drawer>

            <Drawer opened={openedCrypto} onClose={closeCrypto} withCloseButton={false} position='right' size='32rem'>
              <div className="flex items-center justify-between"><div className="text-2xl font-semibold">Crypto Withdrawal</div><div onClick={closeCrypto} className="cursor-pointer"><LiaTimesSolid size={24} /></div></div>
              <form onSubmit={Cryptoform.onSubmit(handlecryptodeposit)}>
                <Forminput error='' content='Wallet Address' {...Cryptoform.getInputProps('address')} placeholder='Enter your wallet address' />
                <Forminput error='' content='Amount' {...Cryptoform.getInputProps('amount')} placeholder='Enter amount' />
                <Forminput error='' content='Select Wallet' formtype='select' options={[{ label: '-- Select Wallet --', value: '' }, ...wallet.map((w: any) => ({ label: w.title, value: String(w.id), }))]} {...Cryptoform.getInputProps('walletid')} />
                {selectedCryptoWallet && (<div className="my-3 flex items-center justify-between border rounded-lg px-3 py-2 bg-gray-50"><div className="text-sm truncate">{selectedCryptoWallet.address}</div></div>)}
                <div className="mt-6"><Formbutton title='Withdraw' loading={Cryptoform.submitting} /></div>
              </form>
            </Drawer>

            <div className="m-5">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[1.9rem] font-semibold">All Withdraw</div>
                <div className="flex items-center gap-3">
                  <div onClick={open} className="text-sm border rounded-full px-4 py-2 font-semibold hover:bg-yellow-dark cursor-pointer">Bank Withdraw</div>
                  <div onClick={openCrypto} className="text-sm border rounded-full px-4 py-2 font-semibold hover:bg-yellow-dark cursor-pointer">Crypto Withdraw</div>
                </div>
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
                            <Td><span className={`px-2 py-1 rounded text-xs ${item.status === 'pending' ? 'bg-yellow' : item.status === 'successful' ? 'bg-primary-dark text-white' : 'bg-error text-white'}`}>{item.status}</span></Td>
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
          </div>
        )}
      </div>
    </div>
  )
}