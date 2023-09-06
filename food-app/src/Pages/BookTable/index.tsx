import React, { useEffect } from "react";
import { Button, Form, Select, Space, Typography } from "antd";
import "./bookTable.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../redux/store";
import { getAvailableTable } from "../../redux/tableSlice";
import { AnyAction } from "redux";
import { onBookTable } from "../../redux/userSlice";

const BookTable: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tableReducer = useSelector((state) => state.table);

  useEffect(() => {
    if (tableReducer.availableTable.length === 0) {
      dispatch(getAvailableTable() as unknown as AnyAction);
    }
  }, [tableReducer.availableTable, dispatch]);

  return (
    <main className="book-table mx-8 flex flex-col justify-center items-left">
      <Form
        onFinish={({ table_id }) => {
          dispatch(onBookTable({ table_id }) as unknown as AnyAction);
        }}
      >
        <Typography.Title
          className="title-color pb-3"
          level={1}
          style={{ margin: 0 }}
        >
          Select a table to continue:
        </Typography.Title>
        <Form.Item
          name="table_id"
          rules={[
            {
              required: true,
              message: "Please choose a table",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Book a table"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            size="large"
            options={tableReducer.availableTable.map((_table) => {
              return {
                value: _table.id.toString(),
                label: "Table " + _table.id,
              };
            })}
          />
        </Form.Item>

        <Space wrap className="mt-8">
          <Button
            type="primary"
            size="large"
            className="btn-submit title-color"
            htmlType="submit"
          >
            Confirm
          </Button>
          <Button
            className="title-color"
            size="large"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Space>
      </Form>
    </main>
  );
};

export default BookTable;
