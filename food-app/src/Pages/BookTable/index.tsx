import React from 'react';
import { Button, Select, Space, Typography } from 'antd';
import "./bookTable.scss";
import { useNavigate } from 'react-router-dom';

const BookTable: React.FC = () => {
  const navigate = useNavigate()

  return (
    <main className='book-table title-color mx-8 flex flex-col justify-center items-left'>
      <Typography.Title className='title-color pb-3' level={1} style={{ margin: 0 }}>
        Select a table to continue:
      </Typography.Title>
      <Select
        showSearch
        placeholder="Book a table"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        size="large"
        options={new Array(24).fill(0).map((_, _index: number) => {
            return {
              value: (_index + 1).toString(),
              label: 'Table ' + (_index + 1),
            }
          })
        }
      />

      <Space wrap className='mt-8'>
        <Button 
          type="primary"
          size='large'
          className='btn-submit title-color'
          onClick={() => navigate("/")}
        >Confirm</Button>
        <Button 
          className='title-color'
          size='large'
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Space>
    </main>
  )
};

export default BookTable;