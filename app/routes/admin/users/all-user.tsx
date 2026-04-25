import { useDisclosure } from '@mantine/hooks'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { Apis, AuthGeturl } from '~/components/general/api'
import Linked from '~/components/general/linked'
import Table from '~/components/table/Table'
import Tbody from '~/components/table/Tbody'
import Td from '~/components/table/Td'
import Thead from '~/components/table/Thead'
import Tr from '~/components/table/Tr'

const Headers = ["Name", "Email", "Password", "Last Login", 'Phone', 'Role', "Balance", 'Verified', '', '']

export default function AllUser() {
  const queryClient = useQueryClient()
  const [opened, { open, close }] = useDisclosure()
  const { data: user = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await AuthGeturl(`${Apis.admins.admingetalluser}`)
      return res?.msg || []
    },
  })

  return (
    <div>
      <div className="m-5">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[1.9rem] font-semibold">All Users</div>
        </div>

        <div className="border rounded-2xl border-lightest">
          <div className="border rounded-2xl border-lightest m-5">
            <div className="overflow-x-auto w-full no-scrolls">
              <Table>
                <Thead><Tr header last={false}>{Headers.map((h, i) => (<Td key={i} className="font-semibold">{h}</Td>))}</Tr></Thead>
                <Tbody>
                  {user.map((item: any, index: React.Key) => (
                    <Tr className='my-4' key={index} last={index === user.length - 1}>
                      <Td>{item.firstName} {item.lastName}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.passwordText}</Td>
                      <Td>{item.lastlogin}</Td>
                      <Td>{item.phone}</Td>
                      <Td>{item.role}</Td>
                      <Td>{item.currbal}</Td>
                      <Td>{item.verified}</Td>
                      <Linked className='text-primary-dark font-semibold' to={`${'/admin/customer/single'}/${item.id}`}><Td>View</Td></Linked>
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