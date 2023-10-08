"use client";

import ActionBar from '@/components/ui/ActionBar'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import UMTable from '@/components/ui/UMTable'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

const departmentPage = () => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a: any, b: any) => a.age - b.age
    },
    {
      title: 'Action',
      render: function (data: any) {
        return <Button onClick={() => console.log(data)} type="primary" danger>x</Button>
      }
    }
  ];

  const tableData = [
    {
      key: '1',
      name: 'Tanmoy Brown',
      age: 32
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42
    }
  ];


  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "pageSize:", pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    console.log(order, field);
  };

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

      <UMTable
        loading={false}
        columns={columns}
        dataSource={tableData}
        pageSize={5}
        totalPages={100}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange} 
        showPagination={true}
        />
    </div>
  )
}

export default departmentPage