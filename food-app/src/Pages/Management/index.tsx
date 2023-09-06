import { Button, Form } from "antd";
import { IFood, INewFood } from "../../type";
import { PlusOutlined } from "@ant-design/icons";
import FoodForm from "../../Components/FoodForm";
import { useState } from "react";
import { createFood, updateFoodById } from "../../API";
import FoodList from "../../Components/FoodList";

function Management() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const [form] = Form.useForm()

  const onClose = () => {
    setIsOpen(false)
    form.resetFields()
    selectedItem !== null && setSelectedItem(null)
  }

  const onSubmit = async (data: INewFood | IFood) => {
    try {
      if (selectedItem) {
        await updateFoodById(data as IFood)
      } else {
        await createFood(data as INewFood)
      }
      onClose();
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
      <FoodList 
        onClick={(id: number) => {
          setSelectedItem(id)
          setIsOpen(true)
        }}
        type="create/edit"
      />
      <FoodForm 
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmit}
        selectedItemId={selectedItem}
        form={form}
      />
    </main>
  );
}

export default Management;
