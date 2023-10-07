import { Col, Row } from "antd"
import FormInput from "../Forms/FormInput"
import FormDatePicker from "../Forms/FormDatePicker"
import FormSelectField from "../Forms/FormSelectField"

const GuardianInfo = () => {
  return (
    <div style={{ border: "1px solid #d9d9d9", borderRadius: "5px", padding: "15px", marginBottom: "10px" }}>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

        <Col className="gutter-row" span={6} style={{
          marginBottom: "10px"
        }}>
          <FormInput type="text" name="student.fatherName" size="large" label="Father Name"></FormInput>
        </Col>

        <Col className="gutter-row" span={6} style={{
          marginBottom: "10px"
        }}>
          <FormInput type="text" name="student.fatherOccupation" size="large" label="Father Occupation"></FormInput>
        </Col>

        <Col className="gutter-row" span={6} style={{
          marginBottom: "10px"
        }}>
          <FormInput type="text" name="student.fatherContactNo" size="large" label="Father ContactNo"></FormInput>
        </Col>

        <Col className="gutter-row" span={6} style={{
          marginBottom: "10px"
        }}>
          <FormInput type="text" name="student.motherName" size="large" label="Mother Name"></FormInput>
        </Col>

        <Col className="gutter-row" span={6} style={{
          marginBottom: "10px"
        }}>
          <FormInput type="text" name="student.motherOccupation" size="large" label="Mother Occupation"></FormInput>
        </Col>

        <Col className="gutter-row" span={6} style={{
          marginBottom: "10px"
        }}>
          <FormInput type="text" name="student.motherContactNo" size="large" label="Mother ContactNo"></FormInput>
        </Col>

        <Col className="gutter-row" span={6} style={{
          marginBottom: "10px"
        }}>
          <FormInput type="text" name="student.address" size="large" label="Address"></FormInput>
        </Col>
       
      </Row>
    </div>
  )
}

export default GuardianInfo