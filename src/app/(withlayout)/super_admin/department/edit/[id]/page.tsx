"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useDepartmentQuery, useUpdateDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
    params: any;
}

const EditDepartmentPage = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = useDepartmentQuery(id);
    const [updateDepartment] = useUpdateDepartmentMutation();
    console.log(data);


    const onSubmit = async (values: { title: string }) => {
        message.loading("Updating.........")
        try {
            await updateDepartment({ id, body: values });
            // console.log(data);
            message.success("Department updated successfully")
        } catch (err: any) {
            console.error(err.message);
            message.error(err.message);
        }
    };

    const defaultValues: any = {
        title: data?.title || "",
    }
    // console.log(params.id);
    return (
        <div>
            <h1>Updating id {id}</h1>
            <UMBreadCrumb
                items={[
                    {
                        label: "super_admin",
                        link: "/super_admin"
                    },
                    {
                        label: "department",
                        link: "/super_admin/department"
                    }
                ]}
            ></UMBreadCrumb>


            <ActionBar title="Update Department "></ActionBar>

            <Form submitHandler={onSubmit} defaultValues={defaultValues}>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={8} style={{
                        marginBottom: "10px"
                    }}>
                        <FormInput type="text" name="title" size="large" label="Title"></FormInput>
                    </Col>
                </Row>
                <Button type='primary' htmlType='submit'>Update</Button>

            </Form>

        </div>
    )
}

export default EditDepartmentPage;