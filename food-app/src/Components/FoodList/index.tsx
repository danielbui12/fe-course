import React, { useCallback, useEffect, useState } from 'react'
import { FOOD_CATEGORY, LIMIT_DISPLAY_ITEM_PER_PAGE } from '../../utils/constants'
import { List, Radio } from 'antd'
import { IFood, Tag } from '../../type'
import { getFood } from '../../API'
import FoodItem from '../FoodItem'

interface IProps {
  onClick: (id: number) => void
  type: "view" | "create/edit"
}

function FoodList({
  onClick,
  type
}: IProps) {
  const [foodData, setFoodData] = useState<IFood[]>([])
  const [total, setTotal] = useState(0)
  const [skip, setSkip] = useState(0)
  const [filterTag, setFilterTag] = useState<Tag>("Hot Dish")


  const onGetFoodData = useCallback(() => {
    getFood({
      skip: skip,
      tag: filterTag
    })
      .then(resp => {
        setFoodData(resp.data)
        setTotal(resp.total)
      })
  }, [skip, filterTag])

  useEffect(() => {
    onGetFoodData()
  }, [onGetFoodData])

  return (
    <>
      <Radio.Group
        size="large"
        onChange={(event) => {
          setFilterTag(event.target.value)
        }}
        value={filterTag}
      >
        {
          FOOD_CATEGORY.map(_item => {
            return (
              <Radio.Button value={_item} key={_item}>{_item}</Radio.Button>
            )
          })
        }
      </Radio.Group>
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
        dataSource={foodData}
        renderItem={(item) => (
          <List.Item style={{ padding: "12px" }}>
            <FoodItem
              onClick={onClick}
              data={item}
              type={type}
            />
          </List.Item>
        )}
        pagination={{
          total: total,
          pageSize: LIMIT_DISPLAY_ITEM_PER_PAGE,
          position: 'bottom',
          onChange: (newPage: number) => {
            setSkip((newPage - 1) * LIMIT_DISPLAY_ITEM_PER_PAGE)
          }
        }}
      />

    </>
  )
}

export default FoodList