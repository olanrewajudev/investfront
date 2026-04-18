import { Checkbox, Select } from '@mantine/core'
import { useForm } from '@mantine/form'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Apis, AuthPosturl } from '~/components/general/api'
import Formbutton from '~/components/general/form-button'
import ImageUpload from '~/components/general/ImageUpload'
import { ErrorAlert, HotAlert } from '~/components/utils/utils'
import type { RootState } from '~/Lib/store'

export default function Kyc() {
    const [loading, setLoading] = useState(false)
    const { profile } = useSelector((state: RootState) => state.data)
    const form = useForm({
        initialValues: {
            type: '',
            agree: false,
            front: null as File | null,
            back: null as File | null,
        },
        validate: {
            type: (value) => (!value ? 'Select document type' : null),
            front: (value) => (!value ? 'Front image is required' : null),
            back: (value) => (!value ? 'Back image is required' : null),
            agree: (value) => (!value ? 'You must confirm' : null),
        },
    })
    async function handleSubmissin(value: typeof form.values) {
        try {
            setLoading(true)
            const formData = new FormData()
            formData.append('type', value.type)
            formData.append('agree', String(value.agree))

            if (value.front) formData.append('front', value.front)
            if (value.back) formData.append('back', value.back)

            const res = await AuthPosturl(Apis.users.uploadkyc, formData, 'FILE')
            setLoading(false)
            HotAlert(res.data.msg)
        } catch (error) {
            ErrorAlert((error as Error).message)
        }
    }
    return (
        <div>
            <div className="m-5">
                <div className="text-[2rem] font-bold mb-4">Upload KYC</div>
                {profile.submitted === false ? (
                    <div className="border p-5 rounded-2xl">
                        <form action="" onSubmit={form.onSubmit(handleSubmissin)}>
                            <div className="mb-5">
                                <Select
                                    label="Document Type"
                                    placeholder="Select your ID type"
                                    data={[
                                        { value: 'us_drivers_license', label: 'US Driver’s License' },
                                        { value: 'us_state_id', label: 'US State ID Card' },
                                        { value: 'us_passport', label: 'US Passport' },
                                        { value: 'us_green_card', label: 'US Green Card' },
                                    ]}
                                    {...form.getInputProps('type')}
                                    searchable
                                    clearable
                                />
                            </div>
                            <div className="mb-4"> <ImageUpload title="Front Image" description="" value={form.values.front ? [form.values.front] : []} onChange={(files: File[]) => form.setFieldValue('front', files[0])} /></div>
                            <div className="mb-6"> <ImageUpload title="Back Image" description="" value={form.values.back ? [form.values.back] : []} onChange={(files: File[]) => form.setFieldValue('back', files[0])} /></div>

                            <Checkbox mt="md" label="I confirm the document is valid" {...form.getInputProps('agree', { type: 'checkbox' })} className='mb-5' />
                            <Formbutton title='Submit KYC' loading={loading} />
                        </form>
                    </div>
                ) : (
                    <div className="border rounded-2xl p-5">
                        <div className="text-[1.5rem] font-semibold">KYC Submitted Successfully</div>
                        <div className="mt-2">Your verification documents have been received and are currently under review. Our team is carefully checking the information you provided. This process may take a little time, but we’ll notify you as soon as your KYC is approved.</div>
                        <div className="mt-4">In the meantime, you can continue exploring the platform, but some features may remain limited until verification is complete. Thank you for your patience.</div>
                    </div>
                )}
            </div>
        </div>
    )
}
