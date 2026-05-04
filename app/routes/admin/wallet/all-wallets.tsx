import React from 'react'
import { Apis, AuthGeturl, AuthPosturl, Delete, offlineServer, Put } from '~/components/general/api'
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
import Image from '~/components/general/image'
const Headers = ["Logo", "Name", "Address", "Sell Price", '', '']
type WalletFormType = {
    title: string
    short: string
    address: string
    sellprice: string
    image: File | null
    id?: number
}
export default function AllWallet() {
    const queryClient = useQueryClient()
    const [opened, { open, close }] = useDisclosure()
    const [openedEdit, { open: openEdit, close: closseEdit }] = useDisclosure()
    const [selectedWallet, setSelectedWallet] = React.useState<{
        image: string
        title: string
        address: string
        sellprice: number
        id: number
    } | null>(null)
    const { data: wallet = [], } = useQuery({
        queryKey: ['wallets'],
        queryFn: async () => {
            const res = await AuthGeturl(`${Apis.wallet.getallwallets}`)
            return res.msg
        },
    })
    const editForm = useForm<WalletFormType>({
        initialValues: { title: '', short: '', address: '', sellprice: '', image: null, },
        validate: {
            title: value => !value ? 'Title is required' : null,
            short: value => !value ? 'Short is required' : null,
            address: value => !value ? 'Address is required' : null,
            sellprice: value => !value ? 'Sell price is required' : null,
        }
    })
    const form = useForm<WalletFormType>({
        initialValues: { title: '', short: '', address: '', sellprice: '', image: null },
        validate: {
            title: value => !value ? 'Title is required' : null,
            short: value => !value ? 'Short note is required' : null,
            address: value => !value ? 'Address is required' : null,
            sellprice: value => !value ? 'Sell price is required' : null,
        }
    })
    async function handleCreateWallet(values: typeof form.values) {
        try {
            const formData = new FormData()
            formData.append('title', values.title)
            formData.append('short', values.short)
            formData.append('address', values.address)
            formData.append('sellprice', values.sellprice)
            if (values.image) {
                formData.append('image', values.image)
            }

            const res = await AuthPosturl(Apis.wallet.createwallet, formData, "FILE")

            if (res.data.status === 500) {
                ErrorAlert(res.data.msg)
            } else if (res.status === 200) {
                HotAlert(res.data.msg)
                queryClient.invalidateQueries({ queryKey: ['wallets'] })
                close()
            }
        } catch (error) { }
    }

    async function handleUpdateWallet(values: typeof editForm.values) {
        try {
            const formData = new FormData()
            formData.append('title', values.title)
            formData.append('short', values.short)
            formData.append('address', values.address)
            formData.append('sellprice', values.sellprice)

            if (values.image) {
                formData.append('image', values.image)
            }

            formData.append('id', String(values.id)) // include ID

            const res = await Put(`${Apis.wallet.updatewallet}`, formData, 'FILE')

            if (res.status === 200) {
                HotAlert(res.msg)
                queryClient.invalidateQueries({ queryKey: ['wallets'] })
                closseEdit()
                editForm.reset()
            }
        } catch (error) {
            ErrorAlert((error as Error).message)
        }
    }
    const DeleteWallets = async (id: number) => {
        const res = await Delete(`${Apis.wallet.deletewallet}`, { id })
        if (res.status === 200) {
            HotAlert(res.msg)
            queryClient.invalidateQueries({ queryKey: ['wallets'] })
        } else {
            ErrorAlert(res.msg)
        }
    }
    return (
        <div>
            <div>
                <Drawer opened={opened} onClose={close} withCloseButton={false} position='right' size='32rem'>
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-semibold">New Wallet</div>
                        <div className=""><LiaTimesSolid size={24} /></div>
                    </div>
                    <form onSubmit={form.onSubmit(handleCreateWallet)}>
                        <ImageUpload
                            title=""
                            description=""
                            onChange={(files) => form.setFieldValue('image', files[0] || null)}
                        />
                        <Forminput content='Title' error='' {...form.getInputProps('title')} placeholder='BTC' />
                        <div className="flex-1"><Forminput type='text' content='Address' error='' {...form.getInputProps('address')} placeholder='' /></div>
                        <div className="flex-1"><Forminput type='text' content='Short Note' error='' {...form.getInputProps('short')} placeholder='' /></div>
                        <div className="flex-1"><Forminput type='text' content='Selling Price' error='' {...form.getInputProps('sellprice')} placeholder='' /></div>
                        <div className="mt-6">  <Formbutton title='Create Wallet' loading={form.submitting} /></div>
                    </form>
                </Drawer>
                <Drawer opened={openedEdit} onClose={closseEdit} withCloseButton={false} position='right' size='32rem'>
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-semibold">Edit Wallet</div>
                        <div className=""><LiaTimesSolid size={24} /></div>
                    </div>
                    <form onSubmit={editForm.onSubmit(handleUpdateWallet)}>
                        <ImageUpload
                            value={[`${offlineServer}/wallets/${selectedWallet?.image}`]}
                            onChange={(files) => editForm.setFieldValue('image', files[0] || null)} title={''} description={''} />
                        <Forminput content='Title' error='' {...editForm.getInputProps('title')} placeholder='BTC' />
                        <div className="flex-1"><Forminput type='text' content='Address' error='' {...editForm.getInputProps('address')} placeholder='' /></div>
                        <div className="flex-1"><Forminput type='text' content='Short Note' error='' {...editForm.getInputProps('short')} placeholder='' /></div>
                        <div className="flex-1"><Forminput type='text' content='Selling Price' error='' {...editForm.getInputProps('sellprice')} placeholder='' /></div>
                        <div className="mt-6">  <Formbutton title='Edit Wallet' loading={editForm.submitting} /></div>
                    </form>
                </Drawer>
                <div className="m-5">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-[1.9rem] font-semibold">All Wallets</div>
                        <div onClick={open} className="text-lg border rounded-full px-4 py-2 font-semibold hover:bg-yellow-dark cursor-pointer">Add Wallet</div>
                    </div>

                    <div className="border rounded-2xl border-lightest">
                        <div className="border rounded-2xl border-lightest m-5">
                            <div className="overflow-x-auto w-full no-scrolls">
                                <Table>
                                    <Thead><Tr header last={false}>{Headers.map((h, i) => (<Td key={i} className="font-semibold">{h}</Td>))}</Tr></Thead>
                                    <Tbody>
                                        {wallet.map((item: { image: string, title: string, address: string, sellprice: number, id: number }, index: React.Key) => (
                                            <Tr className='my-4' key={index} last={index === wallet.length - 1}>
                                                <Td><Image src={`${offlineServer}/wallets/${item.image}`} alt={item.title} className='size-10' /></Td>
                                                <Td>{item.title}</Td>
                                                <Td>{item.address}</Td>
                                                <Td>${item.sellprice}</Td>

                                                <Td onClick={() => { setSelectedWallet(item); editForm.setValues({ ...item, sellprice: item.sellprice.toString(), image: null }); openEdit() }}>View</Td>
                                                <Td onClick={() => DeleteWallets(item.id)} className='text-error'>Delete</Td>

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
