import { Col, Row } from "antd"
import FormInput from "../Forms/FormInput"
import FormSelectField from "../Forms/FormSelectField"
import FormDatePicker from "../Forms/FormDatePicker"
import { bGroupOptions } from "@/constants/global"
import FormTextArea from "../Forms/FormTextArea"

const StudentBasicInfo = () => {
  return (
    <div style={{ border: "1px solid #d9d9d9", borderRadius: "5px", padding: "15px", marginBottom: "10px" }}>


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


        <Col className="gutter-row" span={12} style={{
          margin: "10px 0"
        }}>
          <FormTextArea name="admin.presentAddress" label="Present Address" rows={4} >

          </FormTextArea>
        </Col>

        <Col className="gutter-row" span={12} style={{
          margin: "10px 0"
        }}>
          <FormTextArea name="admin.permanentAddress" label="Permanent Address" rows={4} >
          </FormTextArea>
        </Col>
      </Row>
    </div>
  )
}

export default StudentBasicInfo