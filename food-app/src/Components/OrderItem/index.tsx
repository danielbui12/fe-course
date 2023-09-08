import { DeleteOutlined } from "@ant-design/icons"
import { Button, Card, Input } from "antd"

function OrderItem() {
  return (
    <Card 
      bordered={false}
      bodyStyle={{
        padding: 0
      }}
    >
      <div className="flex justify-between gap-5">
        {/* left */}
        <div className="w-5/6">
          <div className="flex mb-5">
            <div className="w-5/6">
              <div className="flex">
                <div>
                  <img className="w-11 h-11 mr-3" src="/assets/spicySeasonedSeafoodNoodles.svg" alt="food" />
                </div>
                <div>
                  Spicy seasoned seafood noddles <br />
                  <span 
                    style={{
                      color: 'var(--text-light, #abbbc2)'
                    }}
                  >$ 2.29</span>
                </div>
              </div>
            </div>

            <div className="w-1/6">
              <Input size="large" type="number" defaultValue={1}/>
            </div>
          </div>

          <div>
            <Input size="large" placeholder="Order note..."/>
          </div>
        </div>

        {/* right*/}
        <div className="w-1/6">
          <div className="flex flex-col items-center justify-center">
            <div className="h-11 mb-5 flex items-center justify-center font-medium text-base">
              $ 4,58
            </div>
            <div>
              <Button 
                size="large"
                icon={<DeleteOutlined />}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default OrderItem