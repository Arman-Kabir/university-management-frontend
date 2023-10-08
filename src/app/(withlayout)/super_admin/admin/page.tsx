"use client";

import ActionBar from '@/components/ui/ActionBar'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import UMTable from '@/components/ui/UMTable'
import { useDeleteDepartmentMutation, useDepartmentsQuery } from '@/redux/api/departmentApi';
import { useDebounced } from '@/redux/hooks';
import { DeleteOutlined, EditOutlined, EyeOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Input, message } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react';
import dayjs from 'dayjs';
// import { UserOutlined } from '@ant-design/icons';

const ManageAdminPage = () => {

  const query: Record<string, any> = {};

  const [size, setSize] = useState<number>(1);
  const [page, setPage] = useState<number>(2);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteDepartment] = useDeleteDepartmentMutation();

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useDepartmentsQuery({ ...query });
  // const {departments,meta} = data;

  const departments = data?.departments;
  const meta = data?.meta;

  const deleteHandler = async (id:string) => {
    message.loading("Deleting.........")
    
    try {
      console.log(data);
      await deleteDepartment(id);
      message.success("Department deleted successfully")
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Department',
      dataIndex: 'department',
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',
    },
    {
      title: 'ContactNo',
      dataIndex: 'contactNo',
    },
    {
      title: 'Action',
      render: function (data: any) {
        return (
          <>
            {/* <Button onClick={() => console.log(data)} type="primary">
              <EyeOutlined />
            </Button> */}
            <Link href={`/super_admin/department/edit/${data?.id}`}>
              <Button style={{
                margin: "0px 5px"
              }} onClick={() => console.log(data)} type="primary">
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => deleteHandler(data?.id)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>

        )
      }
    }
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "pageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  }



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
        <Input
          type='text' size='large'
          placeholder='Search....' style={{
            width: '20%'
          }}
          onChange={(e) => { setSearchTerm(e.target.value) }}
        ></Input>

        <Link href="/super_admin/department/create">
          <Button type='primary'>Create </Button>
        </Link>
        {
          (!!sortBy || !!sortOrder || !!searchTerm) && (<Button onClick={resetFilters} type='primary' style={{ margin: "0px 5px" }}>
            <ReloadOutlined />
          </Button>)
        }
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

export default ManageAdminPage;