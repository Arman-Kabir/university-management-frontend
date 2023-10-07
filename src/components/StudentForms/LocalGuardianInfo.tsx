import { Col, Row } from "antd"
import FormInput from "../Forms/FormInput"

const LocalGuardianInfo = () => {
  return (
    <div style={{ border: "1px solid #d9d9d9", borderRadius: "5px", padding: "15px", marginBottom: "10px" }}>

    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

      <Col className="gutter-row" span={6} style={{
        marginBottom: "10px"
      }}>
        <FormInput type="text" name="student.localGuardianName" size="large" label="Local Guardian Name"></FormInput>
      </Col>

      <Col className="gutter-row" span={6} style={{
        marginBottom: "10px"
      }}>
        <FormInput type="text" name="student.localGuardianOccupation" size="large" label="Local Guardian Occupation"></FormInput>
      </Col>

      <Col className="gutter-row" span={6} style={{
        marginBottom: "10px"
      }}>
        <FormInput type="text" name="student.localGuardianContactNo" size="large" label="Local Guardian ContactNo"></FormInput>
      </Col>

      <Col className="gutter-row" span={6} style={{
        marginBottom: "10px"
      }}>
        <FormInput type="text" name="student.localGuardianAddress" size="large" label="Local Guardian Address"></FormInput>
      </Col>
    </Row>
  </div>
  )
}

export default LocalGuardianInfo