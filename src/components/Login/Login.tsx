"use client";

import { Button, Col, Row, message } from 'antd';
import loginImage from "../../assets/login-image.png";
import Image from 'next/image';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { SubmitHandler } from 'react-hook-form';
import { useUserLoginMutation } from '@/redux/api/authApi';
import { getUserInfo, isLoggedIn, storeUserInfo } from '@/services/auth.service';
import { useRouter } from 'next/navigation';

type FormValues = {
  id: string;
  password: string;
}

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  // console.log(isLoggedIn());

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      console.log(res);

      if (res?.accessToken) {
        router.push("/profile");
        message.success("user logged in successfully");
      }
      // console.log(res);
      storeUserInfo({ accessToken: res?.accessToken });

    } catch (error: any) {
      console.error(error.message);

    }
  }

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh"
      }}>
      <Col sm={12} md={16} lg={10} >
        <Image src={loginImage} width={500} height={500} alt='login image'></Image>
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1 style={{
          margin: "15px 0",
          fontSize: "28px",
          fontWeight: "bold"
        }}>First Login your account</h1>
        <div>
          <Form submitHandler={onSubmit} >
            <div>
              <FormInput name='id' type='text' size='large' label="User Id"></FormInput>
            </div>

            <div style={{
              margin: "15px 0"
            }}>
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