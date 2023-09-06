import { Typography } from 'antd';
import FoodList from '../../Components/FoodList';

function Dashboard() {
  const onSelectDish = () => {

  }
  return (
    <main>
      <Typography.Title level={4}>Choose Dishes</Typography.Title>

      <FoodList onClick={onSelectDish} type="view" />
    </main>
  );
}
export default Dashboard;
