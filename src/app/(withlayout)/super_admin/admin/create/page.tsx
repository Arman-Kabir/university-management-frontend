"use client"

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb"
import UploadImage from "@/components/ui/UploadImage";
import { bGroupOptions, departmentOptions, genderOptions } from "@/constants/global";
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

                            <Col className="gutter-row" span={8} style={{
                                marginBottom: "10px"
                            }}>
                                <UploadImage>

                                </UploadImage>
                            </Col>

                        </Row>
                    </div>

                    {/* basic info  */}
                    <div style={{ border: "1px solid #d9d9d9", borderRadius: "5px", padding: "15px", marginBottom: "10px" }}>

                        <p style={{
                            fontSize: "18px",
                            marginBottom: "10px"
                        }}>Basic Information</p>

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={8} style={{
                                marginBottom: "10px"
                            }}>
                                <FormInput type="email" name="admin.email" size="large" label="Email"></FormInput>
                            </Col>

                            <Col className="gutter-row" span={8} style={{
                                marginBottom: "10px"
                            }}>
                                <FormInput type="text" name="admin.contactNo" size="large" label="Contact Number"></FormInput>
                            </Col>

                            <Col className="gutter-row" span={8} style={{
                                marginBottom: "10px"
                            }}>
                                <FormInput type="text" name="admin.emergencyContactNo" size="large" label="Emergency Contact Number"></FormInput>
                            </Col>

                            <Col className="gutter-row" span={8} style={{
                                marginBottom: "10px"
                            }}>
                               <FormDatePicker name="admin.dateOfBirth" label="Date of birth" size="large" >

                               </FormDatePicker>
                            </Col>

                            <Col className="gutter-row" span={8} style={{
                                marginBottom: "10px"
                            }}>
                                <FormSelectField size="large" name="admin.bloodGroup" options={bGroupOptions} label="Blood Group" placeholder="Select"></FormSelectField>
                            </Col>

                            <Col className="gutter-row" span={8} style={{
                                marginBottom: "10px"
                            }}>
                                <FormInput type="text" name="admin.designation" size="large" label="Designation">

                                </FormInput>
                            </Col>

                           


                            <Col className="gutter-row" span={12} style={{
                                margin: "10px 0"
                            }}>
                                <FormTextArea  name="admin.presentAddress" label="Present Address" rows={4} >

                                </FormTextArea>
                            </Col>

                            <Col className="gutter-row" span={12} style={{
                                margin: "10px 0"
                            }}>
                                <FormTextArea  name="admin.permanentAddress" label="Permanent Address" rows={4} >
                                </FormTextArea>
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