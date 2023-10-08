import ActionBar from '@/components/ui/ActionBar'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import UMTable from '@/components/ui/UMTable'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

const departmentPage = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin"
          }
        ]}
      ></UMBreadCrumb>


      <ActionBar title="Department List">
        <Link href="/super_admin/department/create">
          <Button type='primary'>Create </Button>
        </Link>
      </ActionBar>

      <UMTable />
    </div>
  )
}

export default departmentPage