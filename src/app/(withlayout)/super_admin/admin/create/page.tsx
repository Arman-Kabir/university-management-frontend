"use client"

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb"
import { departmentOptions, genderOptions } from "@/constants/global";
import { Button, Col, Row } from "antd"

const CreateAdminPage = () => {

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
                    label: "admin",
                    link: "/super_admin/admin"
                }

            ]}>
            </UMBreadCrumb>
            <h1>Create Admin</h1>

            <div>
                <Form submitHandler={onSubmit}>
                    <div style={{ border: "1px solid #d9d9d9", borderRadius: "5px", padding: "15px", marginBottom: "10px" }}>

                        <p style={{
                            fontSize: "18px",
                            marginBottom: "10px"
                        }}>Admin Information</p>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={8} style={{
                                 marginBottom: "10px"
                            }}>
                                <FormInput type="text" name="admin.name.firstName" size="large" label="First Name"></FormInput>
                            </Col>

                            <Col className="gutter-row" span={8} style={{
                                 marginBottom: "10px"
                            }}>
                                <FormInput type="text" name="admin.name.middleName" size="large" label="Middle Name"></FormInput>
                            </Col>

                            <Col className="gutter-row" span={8} style={{
                                 marginBottom: "10px"
                            }}>
                                <FormInput type="text" name="admin.name.lastName" size="large" label="Last Name"></FormInput>
                            </Col>

                            <Col className="gutter-row" span={8} style={{
                                 marginBottom: "10px"
                            }}>
                                <FormInput type="password" name="password" size="large" label="Password"></FormInput>
                            </Col>

                            <Col className="gutter-row" span={8} style={{
                                 marginBottom: "10px"
                            }}>
                                <FormSelectField size="large" name="admin.gender" options={genderOptions} label="Gender" placeholder="Select"></FormSelectField>
                            </Col>

                            <Col className="gutter-row" span={8} style={{
                                 marginBottom: "10px"
                            }}>
                                <FormSelectField size="large" name="admin.managementDepartment" options={departmentOptions} label="Department" placeholder="Select"></FormSelectField>
                            </Col>
                        </Row>
                    </div>
                    <Button htmlType="submit" type="primary">Create</Button>
                </Form>
            </div>
        </div>
    )
}

export default CreateAdminPage