import { Button, Drawer, Space, Typography, message, theme } from 'antd';
import FoodList from '../../Components/FoodList';
import { useCallback, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import OrderItem from '../../Components/OrderItem';
import { ICart } from '../../type';
import { createOrder, createOrderItem, getDetailFoodById, updateFoodById } from '../../API';
import { useSelector } from '../../redux/store';

function Dashboard() {
  const [orderItem, setOrderItem] = useState<ICart[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const tableId = useSelector((state) => state.user.table_id)

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

  const onSubmit = async () => {
    const discountAmount = orderItem.reduce((prev, currentItem) => prev + (currentItem.quantity * currentItem.foodData.discount_amount), 0)
    const totalPrice = orderItem.reduce((prev, currentItem) => prev + (currentItem.quantity * (currentItem.foodData.price - currentItem.foodData.discount_amount)), 0)
    const taxAmount = Math.round(totalPrice * 0.1)
    const order = await createOrder({
      total_price: Number(totalPrice.toLocaleString()),
      tax_amount: Number(taxAmount.toLocaleString()),
      discount_amount: Number(discountAmount.toLocaleString()),
      total_payment: Number((totalPrice + taxAmount).toLocaleString()),
      payment_at: new Date(),
      table_id: tableId
    });

    if (!order) {
      return;
    }

    const orderItemResp = await createOrderItem(orderItem.map(_item => ({
      quantity: _item.quantity,
      order_id: order.id,
      food_id: _item.foodData.id,
      price: _item.foodData.price,
      discount_amount: _item.foodData.discount_amount,
      total: (_item.foodData.price - _item.foodData.discount_amount) * _item.quantity,
      note: _item.note,
    })));    
    
    if (!orderItemResp) {
      return;
    }

    await Promise.all(orderItem.map(_item => {
      return updateFoodById({
        ..._item.foodData,
        quantity: _item.foodData.quantity - _item.quantity
      });
    }));

    message.success("Payment successful!")
    setOrderItem([])
    setIsOpen(false)
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
            <Button 
              disabled={orderItem.length === 0} 
              size="large" 
              type="primary" 
              color={colorPrimary}
              onClick={onSubmit}
            >Buy</Button>
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
