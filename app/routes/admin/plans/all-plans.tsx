import React from 'react'
import { Apis, AuthGeturl, AuthPosturl, Delete, Put } from '~/components/general/api'
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
const Headers = ["Name", "Date", "Duration", "Duration Type", 'Min Deposit', 'Max Deposit', "Min. Withdraw", 'Max. Withdraw', '', '']
type PlanFormType = {
    title: string
    minDept: number
    maxDept: number
    minWithd: number
    maxWithd: number
    returns: number
    duration: number
    durationType: string
    refbonusType: string
    returnCapital: string
    refbonus: number
    id?: string
}
export default function AllPlans() {
    const queryClient = useQueryClient()
    const [opened, { open, close }] = useDisclosure()
    const [openedEdit, { open: openEdit, close: closseEdit }] = useDisclosure()
    const { data: plan = [], } = useQuery({
        queryKey: ['plans'],
        queryFn: async () => {
            const res = await AuthGeturl(`${Apis.admins.getallplans}`)
            return res.msg
        },
    })
    console.log(plan)
    const editForm = useForm<PlanFormType>({
        initialValues: { title: '', minDept: 0, maxDept: 0, minWithd: 0, maxWithd: 0, returns: 0, duration: 0, durationType: '', refbonusType: '', returnCapital: '', refbonus: 0, id: '' },
        validate: {
            title: value => !value ? 'Title is required' : null,
            minDept: value => !value ? 'Minimum deposit  is required' : null,
            maxDept: value => !value ? 'Maximum deposit is required' : null,
            minWithd: value => !value ? 'Minimum withdrawal  is required' : null,
            maxWithd: value => !value ? 'maximum withdrawal  is required' : null,
            returns: value => !value ? 'Return  is required' : null,
            returnCapital: value => !value ? 'Return capital  is required' : null,
            duration: value => !value ? 'Duration is required' : null,
            durationType: value => !value ? 'Duration type is required' : null,
            refbonus: value => !value ? 'Referral bonus  is required' : null,
            refbonusType: value => !value ? 'Referral bonus  is required' : null
        }
    })
    const form = useForm({
        initialValues: { title: '', minDept: '', maxDept: '', minWithd: '', maxWithd: '', returns: '', duration: '', durationType: '', refbonusType: '', returnCapital: '', refbonus: '', },
        validate: {
            title: value => !value ? 'Title is required' : null,
            minDept: value => !value ? 'Minimum deposit  is required' : null,
            maxDept: value => !value ? 'Maximum deposit is required' : null,
            minWithd: value => !value ? 'Minimum withdrawal  is required' : null,
            maxWithd: value => !value ? 'maximum withdrawal  is required' : null,
            returns: value => !value ? 'Return  is required' : null,
            returnCapital: value => !value ? 'Return capital  is required' : null,
            duration: value => !value ? 'Duration is required' : null,
            durationType: value => !value ? 'Duration type is required' : null,
            refbonus: value => !value ? 'Referral bonus  is required' : null,
            refbonusType: value => !value ? 'Referral bonus  is required' : null
        }
    })
    async function handleCreatePlan(value: typeof form.values) {
        try {
            const res = await AuthPosturl(Apis.admins.addplans, value)
            if (res.data.status === 400) {
                ErrorAlert(res.data.msg)
            } else if (res.status === 200) {
                HotAlert(res.data.msg)
                queryClient.invalidateQueries({ queryKey: ['plans'] })
                close()
            }
        } catch (error) {

        }
    }

    async function handleUpdatePlan(values: typeof editForm.values) {
        try {
            const res = await Put(`${Apis.admins.updateplans}/${values.id}`, values)
            if (res.status === 200) {
                HotAlert(res.msg)
                queryClient.invalidateQueries({ queryKey: ['plans'] })
                closseEdit()
                editForm.reset()
            }
        } catch (error) {
            ErrorAlert((error as Error).message)
        }
    }
    const DeletePlans = async (id: string) => {
        const res = await Delete(`${Apis.admins.deleteplans}/${id}`, {})
        if (res.status === 200) {
            HotAlert(res.data.msg)
            queryClient.invalidateQueries({ queryKey: ['plans'] })
        } else {
            ErrorAlert(res.data.msg)
        }
    }
    return (
        <div>
            <Drawer opened={opened} onClose={close} withCloseButton={false} position='right' size='32rem'>
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold">New Plan</div>
                    <div className=""><LiaTimesSolid size={24} /></div>
                </div>
                <form onSubmit={form.onSubmit(handleCreatePlan)}>
                    <Forminput content='Title' error='' {...form.getInputProps('title')} placeholder='title' />
                    <div className="flex gap-3">
                        <div className="flex-1"><Forminput type='number' content='Minimum Deposit' error='' {...form.getInputProps('minDept')} placeholder='' /></div>
                        <div className="flex-1"><Forminput type='number' content='Maximum Deposit' error='' {...form.getInputProps('maxDept')} placeholder='' /></div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex-1"><Forminput type='number' content='Minimum Withdrawal' error='' {...form.getInputProps('minWithd')} placeholder='' /></div>
                        <div className="flex-1"><Forminput type='number' content='Maximum Withdrawal' error='' {...form.getInputProps('maxWithd')} placeholder='' /></div>
                    </div>


                    <Forminput content='Returns' type='number' error='' {...form.getInputProps('returns')} placeholder='' />
                    <Forminput content='Return Capital' type='' error='' {...form.getInputProps('returnCapital')} placeholder='' />
                    <Forminput content='Duration' type='number' error='' {...form.getInputProps('duration')} placeholder='' />
                    <Forminput formtype='select' content='Duration Type' error='' {...form.getInputProps('durationType')} placeholder='' options={[
                        { label: '--Select--', value: '' },
                        { label: 'Days', value: 'Days' },
                        { label: 'Months', value: 'Months' },
                        { label: 'Yearly', value: 'Yearly' },
                    ]} />
                    <Forminput content='Referral Bonus' error='' {...form.getInputProps('refbonus')} placeholder='' />
                    <Forminput formtype='select' content='Referral Bonus' error='' {...form.getInputProps('refbonusType')} placeholder='' options={[
                        { label: '--Select--', value: '' },
                        { label: 'Percentage', value: 'Percentage' },

                    ]} />
                    <div className="mt-6">  <Formbutton title='Create Plan' loading={form.submitting} /></div>
                </form>
            </Drawer>
            <Drawer opened={openedEdit} onClose={closseEdit} withCloseButton={false} position='right' size='32rem'>
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold">Edit Plan</div>
                    <div className=""><LiaTimesSolid size={24} /></div>
                </div>
                <form onSubmit={editForm.onSubmit(handleUpdatePlan)}>
                    <Forminput content='Title' error='' {...editForm.getInputProps('title')} placeholder='title' />
                    <div className="flex gap-3">
                        <div className="flex-1"><Forminput type='number' content='Minimum Deposit' error='' {...editForm.getInputProps('minDept')} placeholder='' /></div>
                        <div className="flex-1"><Forminput type='number' content='Maximum Deposit' error='' {...editForm.getInputProps('maxDept')} placeholder='' /></div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex-1"><Forminput type='number' content='Minimum Withdrawal' error='' {...editForm.getInputProps('minWithd')} placeholder='' /></div>
                        <div className="flex-1"><Forminput type='number' content='Maximum Withdrawal' error='' {...editForm.getInputProps('maxWithd')} placeholder='' /></div>
                    </div>


                    <Forminput content='Returns' type='number' error='' {...editForm.getInputProps('returns')} placeholder='' />
                    <Forminput content='Return Capital' type='' error='' {...editForm.getInputProps('returnCapital')} placeholder='' />
                    <Forminput content='Duration' type='number' error='' {...editForm.getInputProps('duration')} placeholder='' />
                    <Forminput formtype='select' content='Duration Type' error='' {...editForm.getInputProps('durationType')} placeholder='' options={[
                        { label: '--Select--', value: '' },
                        { label: 'Days', value: 'Days' },
                        { label: 'Months', value: 'Months' },
                        { label: 'Yearly', value: 'Yearly' },
                    ]} />
                    <Forminput content='Referral Bonus' error='' {...editForm.getInputProps('refbonus')} placeholder='' />
                    <Forminput formtype='select' content='Referral Bonus' error='' {...editForm.getInputProps('refbonusType')} placeholder='' options={[
                        { label: '--Select--', value: '' },
                        { label: 'Percentage', value: 'Percentage' },

                    ]} />
                    <div className="mt-6">  <Formbutton title='Edit Plan' loading={editForm.submitting} /></div>
                </form>
            </Drawer>
            <div className="m-5">
                <div className="flex items-center justify-between mb-4">
                    <div className="text-[1.9rem] font-semibold">All Plans</div>
                    <div onClick={open} className="text-lg border rounded-full px-4 py-2 font-semibold hover:bg-yellow-dark cursor-pointer">Add Plan</div>
                </div>

                <div className="border rounded-2xl border-lightest">
                    <div className="border rounded-2xl border-lightest m-5">
                        <div className="overflow-x-auto w-full no-scrolls">
                            <Table>
                                <Thead><Tr header last={false}>{Headers.map((h, i) => (<Td key={i} className="font-semibold">{h}</Td>))}</Tr></Thead>
                                <Tbody>
                                    {plan.map((item: { title: string, duration: number, durationType: string, createdAt: string, minDept: number, maxDept: number, minWithd: number, maxWithd: number, id: string }, index: React.Key) => (
                                        <Tr className='my-4' key={index} last={index === plan.length - 1}>
                                            <Td>{item.title}</Td>
                                            <Td>{formatDate(item.createdAt)}</Td>
                                            <Td>{item.duration}</Td>
                                            <Td>{item.durationType}</Td>
                                            <Td>${formatAmount(item.minDept)}</Td>
                                            <Td>${formatAmount(item.maxDept)}</Td>
                                            <Td>${formatAmount(item.minWithd)}</Td>
                                            <Td>${formatAmount(item.maxWithd)}</Td>
                                            <Td onClick={() => { editForm.setValues(item), openEdit() }}>View</Td>
                                            <Td onClick={() => DeletePlans(item.id)} className='text-error'>Delete</Td>

                                        </Tr>
                                    ))}

                                </Tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
