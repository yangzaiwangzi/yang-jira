import { Form, Input, Button } from 'antd';
import { useAuth } from 'context/auth-context';
export const Register = () => {
  const { register } = useAuth();
  const handleSbumit = (values) => {
    register(values);
  };
  return (
    <div>
      <Form onFinish={handleSbumit}>
        <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input placeholder="用户名：" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password placeholder="密码：" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
