"use client"

import Form from '@/components/Forms/Form'
import FormInput from '@/components/Forms/FormInput'
import ActionBar from '@/components/ui/ActionBar'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import { useAddDepartmentMutation } from '@/redux/api/departmentApi'
import { Button, Col, Row, message } from 'antd'
import Link from 'next/link'

const CreateDepartmentPage = () => {

  const [addDepartment] = useAddDepartmentMutation();


  const onSubmit = async (data: any) => {
    message.loading("Creating.........")
    
    try {
      console.log(data);
      await addDepartment(data);
      message.success("Department added successfully")
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
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
          <Col span={8} style={{
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