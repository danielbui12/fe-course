import { Button, List } from "antd";
import { IFood, INewFood } from "../../type";
import FoodItem from "../../Components/FoodItem";
import { PlusOutlined } from "@ant-design/icons";
import FoodForm from "../../Components/FoodForm";
import { useState } from "react";
import { createFood, updateFoodById } from "../../API";

const food: IFood[] = [
  {
    id: 1,
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    quantity: 20,
    image: "/assets/spicySeasonedSeafoodNoodles.svg",
    discount_amount: 0,
    tag: "Hot Dish",
  },
  {
    id: 1,
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    quantity: 20,
    image: "/assets/spicySeasonedSeafoodNoodles.svg",
    discount_amount: 0,
    tag: "Hot Dish",
  },
  {
    id: 1,
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    quantity: 20,
    image: "/assets/spicySeasonedSeafoodNoodles.svg",
    discount_amount: 0,
    tag: "Hot Dish",
  },
  {
    id: 1,
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    quantity: 20,
    image: "/assets/spicySeasonedSeafoodNoodles.svg",
    discount_amount: 0,
    tag: "Hot Dish",
  },
  {
    id: 1,
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    quantity: 20,
    image: "/assets/spicySeasonedSeafoodNoodles.svg",
    discount_amount: 0,
    tag: "Hot Dish",
  },
];

function Management() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const onClose = () => {
    setIsOpen(false)
    selectedItem !== null && setSelectedItem(null)
  }

  const onSubmit = async (data: INewFood | IFood) => {
    try {
      let resp;
      if (selectedItem) {
        resp = await updateFoodById(data as IFood)
      } else {
        resp = await createFood(data as INewFood)
      }
      setIsOpen(!resp);
    } catch (error) {
      console.log(__filename, error);
    }
  }

  return (
    <main>
      <div>
        <Button 
          icon={<PlusOutlined />} 
          size="large"
          onClick={() => setIsOpen(true)}
        >
          Create new dish
        </Button>
      </div>
      <br />
      <List
        grid={{
          gutter: 16,
          column: 5,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        dataSource={food}
        renderItem={(item) => (
          <List.Item style={{ padding: "12px" }}>
            <FoodItem 
              onClick={(id: number) => {
                setSelectedItem(id)
                setIsOpen(true)
              }} 
              data={item} 
            />
          </List.Item>
        )}
      />

      <FoodForm 
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmit}
        selectedItemId={selectedItem}
      />
    </main>
  );
}

export default Management;
