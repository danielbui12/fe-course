import { Button, Card } from "antd";
import { IFood } from "../../type";
import "./foodStyle.scss";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";

interface IProps {
  data: IFood;
  onClick: (id: number) => void
  type: "view" | "create/edit"
}

function FoodItem({ data, onClick, type }: IProps) {
  return (
    <div className="food-item">
      <Card bordered={false}>
        <img 
          src={data.image} 
          alt={data.name} 
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/assets/spicySeasonedSeafoodNoodles.svg"
          }}
        />
        <div className="food-name">{data.name}</div>
        <div className="food-info">
          <span>$ {(data.price - data.discount_amount).toLocaleString()}</span>
          <img src="/assets/ellipse.svg" alt="ellipse" />
          <span>{data.quantity} Bowl(s)</span>
        </div>
      </Card>
      <Button 
        icon={type === 'view' ? <PlusOutlined /> :<EditOutlined />} 
        size="large"
        className="edit-btn"
        onClick={() => onClick(data.id)}
      >
        {
          type === 'view' ? 'Add to order' : 'Edit dish'
        }
      </Button>
    </div>
  );
}

export default FoodItem;
