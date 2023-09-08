import { Button, Drawer, Space, Typography, message, theme } from 'antd';
import FoodList from '../../Components/FoodList';
import { useCallback, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import OrderItem from '../../Components/OrderItem';
import { ICart } from '../../type';
import { getDetailFoodById } from '../../API';

function Dashboard() {
  const [orderItem, setOrderItem] = useState<ICart[]>([
    {
      foodData: {
        id: 1,
        name: "test",
        price: 2.20,
        quantity: 10, // total quantity
        image: "string;",
        discount_amount: 1,
        tag: "Cold Dish"
      },
      quantity: 1, // in cart quantity
      note: "",
    }
  ])
  const [isOpen, setIsOpen] = useState(false)
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const onUpdateDish = useCallback((index: number, data: object) => {
    const _newOrderItem = [...orderItem];
    _newOrderItem[index] = {
      ..._newOrderItem[index],
      ...data
    }
    if (_newOrderItem[index].quantity > _newOrderItem[index].foodData.quantity) {
      _newOrderItem[index].quantity = _newOrderItem[index].foodData.quantity
    }
    setOrderItem(_newOrderItem)
  }, [orderItem])

  const onSelectDish = useCallback((foodId: number) => {
    getDetailFoodById(foodId)
      .then((foodData) => {
        if (foodData && foodData.quantity > 0) {
          const _isExistingItem = orderItem.findIndex(_item => _item.foodData.id === foodId);
          if (_isExistingItem > -1) {
            onUpdateDish(
              _isExistingItem, 
              { quantity: orderItem[_isExistingItem].quantity + 1 }
            )
          } else {
            setOrderItem(prev => prev.concat({
              foodData: foodData,
              quantity: 1,
              note: ""
            }))
            message.success("Added to cart")
          }
        } else {
          message.error("This dish is out of quantity!")
        }
      })
  }, [orderItem, onUpdateDish])

  const onRemoveDish = (foodId: number) => {
    setOrderItem(prev => prev.filter(_item => _item.foodData.id !== foodId))
  }

  const onSubmit = () => {
    
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
            <Button disabled={orderItem.length === 0} size="large" type="primary" color={colorPrimary}>Buy</Button>
            <Button onClick={() => setIsOpen(false)} size="large">Cancel</Button>
          </Space>
        )}
      >
        <OrderItem 
          data={orderItem} 
          onRemoveItem={onRemoveDish}
          onUpdateItem={onUpdateDish}
        />
      </Drawer>
    </main>
  );
}
export default Dashboard;
