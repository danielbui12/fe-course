import { Button, Drawer, Space, Typography, theme } from 'antd';
import FoodList from '../../Components/FoodList';
import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import OrderItem from '../../Components/OrderItem';

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false)
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const onSelectDish = () => {

  }
  return (
    <main>
      <div className='flex justify-between mb-5'>
        <Typography.Title level={4}>Choose Dishes</Typography.Title>
        <Button
          icon={isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <FoodList onClick={onSelectDish} type="view" />

      <Drawer
        title={"New order"}
        width={window.screen.availWidth < 400 ? 320 : 520}
        onClose={() => setIsOpen(false)}
        open={isOpen}
        closeIcon={null}
        bodyStyle={{ paddingBottom: 80 }}
        footer={(
          <Space>
            <Button size="large" type="primary" color={colorPrimary}>Buy</Button>
            <Button size="large">Cancel</Button>
          </Space>
        )}
      >
        <OrderItem />
      </Drawer>
    </main>
  );
}
export default Dashboard;
