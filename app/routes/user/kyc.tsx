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
    const [reupload, setReupload] = useState(false)
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
            window.location.reload()
        } catch (error) {
            ErrorAlert((error as Error).message)
        }
    }
    return (
        <div>
            <div className="m-5">
                <div className="text-[2rem] font-bold mb-4">Upload KYC</div>
                {profile.submitted === 'false' || reupload ? (
                    <div className="border p-5 rounded-2xl">
                        <form onSubmit={form.onSubmit(handleSubmissin)}>
                            <div className="mb-5"><Select label="Document Type" placeholder="Select your ID type" data={[{ value: 'Driver’s License', label: 'Driver’s License' }, { value: 'State ID Card', label: 'State ID Card' }, { value: 'Passport', label: 'Passport' }, { value: 'Green Card', label: 'Green Card' },]} {...form.getInputProps('type')} searchable clearable /></div>
                            <div className="mb-4"><ImageUpload title="Front Image" description="" value={form.values.front ? [form.values.front] : []} onChange={(files: File[]) => form.setFieldValue('front', files[0])} /></div>
                            <div className="mb-6"><ImageUpload title="Back Image" description="" value={form.values.back ? [form.values.back] : []} onChange={(files: File[]) => form.setFieldValue('back', files[0])} /></div>
                            <Checkbox mt="md" label="I confirm the document is valid" {...form.getInputProps('agree', { type: 'checkbox' })} className="mb-5" />
                            <Formbutton title="Submit KYC" loading={loading} />
                        </form>
                    </div>
                ) : profile.verified === 'verified' ? (
                    <div className="bg-lime-light border border-discount p-5 rounded-xl">
                        <div className="text-primary-dark text-xl font-bold mb-2">✅ KYC Verified</div>
                        <div className="text-lg font-semibold">Document Type: {profile?.type}</div>
                        <p className="text-primary-dark mt-2">Your identity has been successfully verified. You now have full access to all platform features.</p>
                    </div>
                ) : profile.verified === 'declined' ? (
                    <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
                        <div className="text-red-600 text-xl font-bold mb-2">❌ KYC Declined</div>
                        <p className="text-red-500 mb-4">
                            Your verification was not approved. Please review your documents and try again.
                        </p>

                        <button
                            onClick={() => setReupload(true)}
                            className="bg-primary text-white px-4 py-2 rounded-lg"
                        >
                            Reupload Documents
                        </button>
                    </div>
                ) : (
                    <div className="border rounded-2xl p-5">
                        <div className="text-[1.5rem] font-semibold">KYC Submitted Successfully ✅</div>
                        <div className="mt-2">Your verification documents have been received and are currently under review.</div>
                        <div className="mt-3">This process may take some time. We’ll notify you once it’s approved.</div>
                    </div>
                )}
            </div>
        </div>
    )
}
