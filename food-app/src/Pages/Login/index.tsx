import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import "./login.scss"


function Login() {
  type FieldType = {
    username?: string;
    password?: string;
  };
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  
  return (
    <main className='login mx-8 flex flex-col justify-center items-center'>
      <div className="login-form">
        <Form
          name="login-form"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input size='large' />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password size='large' />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16 }}>
            <Button 
              type="primary" 
              htmlType="submit"
              size='large'
              className='btn-submit title-color m-2'
            >
              Login
            </Button>
            <Button
              className='title-color m-2'
              size='large'
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  )
}

export default Login