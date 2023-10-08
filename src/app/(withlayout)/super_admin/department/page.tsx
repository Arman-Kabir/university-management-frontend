"use client";

import ActionBar from '@/components/ui/ActionBar'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import UMTable from '@/components/ui/UMTable'
import { useDepartmentsQuery } from '@/redux/api/departmentApi';
import { Button } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'

const ManageDepartmentPage = () => {

  const query:Record <string,any> = {};

  const [size,setSize] = useState<number>(10);
  const [page,setPage] = useState<number>(1);
  const [sortBy,setSortBy] = useState<string>("");
  const [sortOrder,setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const {data:any,isLoading} = useDepartmentsQuery({...query});

  
  // const {departments,meta} = data;

  const departments = data?.departments;
  const meta = data?.meta;

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title'
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',    
      sorter: true,
    },
    {
      title: 'Action',
      render: function (data: any) {
        return <Button onClick={() => console.log(data)} type="primary" danger>x</Button>
      }
    }
  ];

  // const tableData = [
  //   {
  //     key: '1',
  //     name: 'Tanmoy Brown',
  //     age: 32
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42
  //   }
  // ];


  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "pageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order==="ascend" ? "asc" : "desc");
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
        loading={isLoading}
        columns={columns}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange} 
        showPagination={true}
        />
    </div>
  )
}

export default ManageDepartmentPage;