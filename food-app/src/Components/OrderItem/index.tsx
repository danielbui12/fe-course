import { DeleteOutlined } from "@ant-design/icons"
import { Button, Card, Input, List } from "antd"
import { ICart } from "../../type"

interface IProps {
  data: ICart[];
  onRemoveItem: (foodId: number) => void;
  onUpdateItem: (index: number, data: object) => void;
}

function OrderItem({ data, onRemoveItem, onUpdateItem }: IProps) {
  return (
    <Card 
      bordered={false}
      bodyStyle={{
        padding: 0
      }}
    >
      <List
        className="w-full"
        dataSource={data}
        renderItem={(item, index) => {
          const { foodData, quantity, note } = item
          const foodPrice = foodData.price - foodData.discount_amount
          return (
          <List.Item className="w-full" style={{ padding: 0, paddingBottom: '12px' }}>
              <div className="flex justify-between gap-5 w-full">
              {/* left */}
              <div className="w-5/6">
                <div className="flex mb-5">
                  <div className="w-5/6">
                    <div className="flex">
                      <div>
                        <img 
                          className="w-11 h-11 mr-3" 
                          src={foodData.image} 
                          alt={foodData.name} 
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/assets/spicySeasonedSeafoodNoodles.svg"
                            }}
                        />
                      </div>
                      <div>
                        {foodData.name} <br />
                        <span
                          style={{
                            color: 'var(--text-light, #abbbc2)'
                          }}
                          >$ {foodPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/6">
                    <Input 
                      size="large" 
                      type="number" 
                      min={1} 
                      max={foodData.quantity}
                      value={quantity}
                      onChange={(event) => onUpdateItem(index, {quantity: Number(event.target.value)})} 
                    />
                  </div>
                </div>

                <div>
                    <Input 
                      value={note} 
                      onChange={(event) => onUpdateItem(index, { note: event.target.value })} 
                      size="large" 
                      placeholder="Order note..." 
                    />
                </div>
              </div>

              {/* right*/}
              <div className="w-1/6">
                <div className="flex flex-col items-center justify-center">
                  <div className="h-11 mb-5 flex items-center justify-center font-medium text-base">
                      $ {(foodPrice * quantity).toLocaleString()}
                  </div>
                  <div>
                    <Button
                        onClick={() => onRemoveItem(foodData.id)}
                      size="large"
                      icon={<DeleteOutlined />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </List.Item>
  )}}
      />
    </Card>
  )
}

export default OrderItem