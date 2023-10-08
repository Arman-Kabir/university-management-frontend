"use client"

import Form from '@/components/Forms/Form'
import FormInput from '@/components/Forms/FormInput'
import ActionBar from '@/components/ui/ActionBar'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import { Button, Col, Row } from 'antd'
import Link from 'next/link'

const CreateDepartmentPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.error(error.message);
    }
  }
  return (
    <div>
      <UMBreadCrumb items={[
        {
          label: "super_admin",
          link: "/super_admin"
        },
        {
          label: "department",
          link: "/super_admin/department"
        }

      ]}>
      </UMBreadCrumb>
      <h1>Create Department</h1>
      <Form submitHandler={onSubmit}>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col  span={8} style={{
            marginBottom: "10px"
          }}>
            <FormInput type="text" name="title" size="large" label="Title"></FormInput>
          </Col>
        </Row>
        <Button type='primary' htmlType='submit'>Add</Button>

      </Form>

    </div>
  )
}

export default CreateDepartmentPage;