import { Button, Card } from "antd";
import { IFood } from "../../type";
import "./foodStyle.scss";
import { EditOutlined } from "@ant-design/icons";

interface IProps {
  data: IFood;
  onClick: (id: number) => void
}

function FoodItem({ data, onClick }: IProps) {
  return (
    <div className="food-item">
      <Card bordered={false}>
        <img src={data.image} alt={data.name} />
        <div className="food-name">{data.name}</div>
        <div className="food-info">
          <span>$ {data.price - data.discount_amount}</span>
          <img src="/assets/ellipse.svg" alt="ellipse" />
          <span>{data.quantity} Bowl(s)</span>
        </div>
      </Card>

      <Button 
        icon={<EditOutlined />} 
        size="large" 
        className="edit-btn"
        onClick={() => onClick(data.id)}
      >
        Edit dish
      </Button>
    </div>
  );
}

export default FoodItem;
