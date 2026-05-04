import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router'
import { Apis, AuthGeturl } from '~/components/general/api'

export default function SingleDeposit() {
    const { depositid } = useParams()
    const { data: deposit = [], } = useQuery({
        queryKey: ['deposits', depositid],
        queryFn: async () => {
            const res = await AuthGeturl(`${Apis.transaction.singledeposit}/${depositid}`)
            return res.msg
        },
    })
    console.log(deposit)
    return (
        <div>

        </div>
    )
}
