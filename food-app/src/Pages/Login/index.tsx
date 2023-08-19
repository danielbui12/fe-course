import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { useDispatch } from "../../redux/store";
import { handleLogin } from "../../redux/adminSlice";
import { AnyAction } from "redux";

function Login() {
  type FieldType = {
    email: string;
    password: string;
  };
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onFinish = (values: FieldType) => {
    dispatch(handleLogin(values.email, values.password) as unknown as AnyAction)
  };

  return (
    <main className="login mx-8 flex flex-col justify-center items-center">
      <div className="login-form">
        <Form
          name="login-form"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Invalid email!" }
          ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="btn-submit title-color m-2"
            >
              Login
            </Button>
            <Button
              className="title-color m-2"
              size="large"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
}

export default Login;
