"use client"

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb"
import { Col,  Row } from "antd"

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
                <Form SubmitHandler={onSubmit}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={8}>
                            <FormInput type="text" name="name" size="large" label="First Name"></FormInput>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FormInput type="text" name="name" size="large" label="First Name"></FormInput>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FormInput type="text" name="name" size="large" label="First Name"></FormInput>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FormInput type="password" name="password" size="large" label="Password"></FormInput>
                        </Col>

                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default CreateAdminPage