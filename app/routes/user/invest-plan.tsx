
import { useForm } from '@mantine/form'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Apis, AuthGeturl, AuthPosturl } from '~/components/general/api'
import Forminput from '~/components/general/form-input'
import Linked from '~/components/general/linked'
import { ErrorAlert, HotAlert } from '~/components/utils/utils'

export default function InvestInPlan() {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const { data: wallet = [], } = useQuery({
        queryKey: ['wallets'],
        queryFn: async () => {
            const res = await AuthGeturl(`${Apis.wallet.getallwallets}`)
            return res.msg
        },
    })
  
    const { data: plan, isLoading } = useQuery({
        queryKey: ['plans', id],
        queryFn: async () => {
            const res = await AuthGeturl(`${Apis.plans.getsingleplans}/${id}`)
            return res.msg
        }
    })
    const form = useForm({
        initialValues: {
            amount: '',
            walletid: '',
        },
    })
    const handleInvest = async () => {
        const { amount, walletid } = form.values

        if (!amount) return ErrorAlert('Enter amount')
        if (!walletid) return ErrorAlert('Select wallet')

        if (Number(amount) < plan.minDept || Number(amount) > plan.maxDept) {
            return HotAlert(`Amount must be between ${plan.minDept} and ${plan.maxDept}`)
        }

        try {
            setLoading(true)

            const res = await AuthPosturl(Apis.plans.investplan, {
                amount: Number(amount),
                planid: plan.id,
                walletid: Number(walletid),
            })

            if (res.status === 200) {
                HotAlert(res.data.msg)
                form.reset()
            } else {
                ErrorAlert(res.data.msg)
            }

        } catch (err) {
            ErrorAlert((err as Error).message)
        } finally {
            setLoading(false)
        }
    }
    const profit = form.values.amount ? (Number(form.values.amount) * plan.returns) / 100 : 0
    return (
        <div className="mx-6 my-5 ">
            <div className="mb-4"><Linked to="/user/plans" className="text-sm text-white bg-primary-dark px-5 py-2 rounded-md">← Back to Plans</Linked></div>
            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm mb-6">
                <div className="flex justify-between items-start mb-3">
                    <div className="text-xl font-semibold">{plan?.title}</div>
                    <div className="text-xs text-gray-500">{plan?.duration} {plan?.durationType}</div>
                </div>
                <div className="mb-4">
                    <div className="text-2xl font-bold">{plan?.returns}%</div>
                    <div className="text-xs text-gray-500">Return Rate</div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                        <span>Deposit</span>
                        <span>${plan?.minDept} - ${plan?.maxDept}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Withdraw</span>
                        <span>${plan?.minWithd} - ${plan?.maxWithd}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Capital</span>
                        <span className={plan?.returnCapital === "true" ? "text-green-600" : "text-red-500"}>{plan?.returnCapital === "true" ? "Returned" : "Not returned"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Referral</span>
                        <span>{plan?.refbonus}{plan?.refbonusType === "Percentage" ? "%" : ""}</span>
                    </div>
                </div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                <div className="text-lg font-semibold mb-3">Invest in this Plan</div>
                <Forminput  error=''
                    content={''} type="number"
                    placeholder={`Enter amount (${plan?.minDept} - ${plan?.maxDept})`}
                    {...form.getInputProps('amount')}                />    
                                {form.values.amount && (<div className="text-sm text-green-600 mb-3">Expected Profit: ${profit.toLocaleString()}</div>)}
                <Forminput error='' content='Select Wallet' formtype='select' options={[{ label: '-- Select Wallet --', value: '' }, ...wallet.map((w: any) => ({ label: w.title, value: String(w.id), }))]} {...form.getInputProps('walletid')} />

                <button onClick={handleInvest} disabled={loading} className="w-full border border-primary-dark text-primary-dark py-2 rounded-xl hover:bg-primary-dark hover:text-white transition">{loading ? 'Processing...' : 'Invest Now'}</button>
            </div>

        </div>
    )
}