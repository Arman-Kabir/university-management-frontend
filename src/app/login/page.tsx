"use client";

import { Button, Col, Row } from 'antd';
import loginImage from "../../assets/login-image.png";
import Image from 'next/image';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { SubmitHandler } from 'react-hook-form';

type FormValues = {
  id: string;
  password: string;
}

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {

    }
  }
  return (
    <Row>
      <Col sm={12} md={16} lg={16} >
        <Image src={loginImage} width={500} height={500} alt='login image'></Image>
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1>First Login your account</h1>
        <div>
          <Form submitHandler={onSubmit} >
            <div>
              <FormInput name='id' type='text' size='large' label="User Id"></FormInput>
            </div>

            <div>
              <FormInput name='password' type='password' size='large' label="User Password"></FormInput>
            </div>
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  )
}

export default LoginPage