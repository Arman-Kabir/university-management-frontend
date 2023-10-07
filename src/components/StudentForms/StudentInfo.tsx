"use client";

import { Col, Row } from "antd"
import FormInput from "../Forms/FormInput"
import FormSelectField from "../Forms/FormSelectField"
import UploadImage from "../ui/UploadImage"
import { departmentOptions, genderOptions } from "@/constants/global"

const StudentInfo = () => {
  return (
    <div style={{ border: "1px solid #d9d9d9", borderRadius: "5px", padding: "15px", marginBottom: "10px" }}>

     
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6} style={{
          marginBottom: "10px"
        }}>
          <FormInput type="text" name="student.name.firstName" size="large" label="First Name"></FormInput>
        </Col>

        <Col className="gutter-row" span={6} style={{
          marginBottom: "10px"
        }}>
          <FormInput type="text" name="student.name.middleName" size="large" label="Middle Name"></FormInput>
        </Col>

        <Col className="gutter-row" span={6} style={{
          marginBottom: "10px"
        }}>
          <FormInput type="text" name="student.name.lastName" size="large" label="Last Name"></FormInput>
        </Col>

        <Col className="gutter-row" span={6} style={{
          marginBottom: "10px"
        }}>
          <FormInput type="password" name="password" size="large" label="Password"></FormInput>
        </Col>

        <Col className="gutter-row" span={8} style={{
          marginBottom: "10px"
        }}>
          <FormSelectField size="large" name="student.academicDepartment" options={genderOptions} label="Academic Department" placeholder="Select"></FormSelectField>
        </Col>

        <Col className="gutter-row" span={8} style={{
          marginBottom: "10px"
        }}>
          <FormSelectField size="large" name="student.academicFaculty" options={genderOptions} label="Academic Faculty" placeholder="Select"></FormSelectField>
        </Col>

        <Col className="gutter-row" span={8} style={{
          marginBottom: "10px"
        }}>
          <FormSelectField size="large" name="student.academicSemester" options={genderOptions} label="Academic Semester" placeholder="Select"></FormSelectField>
        </Col>

      </Row>
    </div>
  )
}

export default StudentInfo