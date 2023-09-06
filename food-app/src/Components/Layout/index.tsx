import { Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Input, Layout, Menu, theme } from "antd";
import moment from "moment";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function CommonLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    path?: string,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      onClick: () => {
        if (path) {
          navigate(path);
        }
      },
    } as MenuItem;
  }

  const adminItems: MenuItem[] = [
    getItem("Setting", "1", <SettingOutlined />, "/management"),
    getItem("Statistic", "2", <PieChartOutlined />, "/management/statistic"),
  ];

  return (
    <Layout style={{ minHeight: "100vh", maxWidth: "100vw" }}>
      {window.location.href.includes("management") && (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            backgroundColor: colorBgContainer,
          }}
          trigger={null}
        >
          <div
            style={{
              paddingLeft: collapsed ? "8px" : "24px",
              margin: "4px",
            }}
          >
            <img src="/assets/logo.svg" alt="logo" />
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={adminItems}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Sider>
      )}
      <Layout
        style={{
          backgroundColor: "var(--bg-dark-1, #252836)",
        }}
      >
        <Header
          style={{
            padding: 0,
            marginBottom: "24px",
            background: colorBgContainer,
            textTransform: "capitalize",
            fontSize: "28px",
            display: "flex",
            height: 'fit-content'
          }}
        >
          {window.location.href.includes("management") ? (
            <>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
              {(() => {
                const paths = window.location.pathname.split("/");
                return paths[paths.length - 1];
              })()}
            </>
          ) : (
              <div className="flex justify-between w-full px-6 py-3">
                <div>
                  <div 
                    style={{
                      color: 'var(--white-color)',
                      fontSize: '28px',
                      fontWeight: 600,
                      lineHeight: "140%"
                    }}
                  >
                    Restaurant
                  </div>
                  <div 
                    style={{
                      fontSize: '16px',
                      lineHeight: '140%',
                      fontWeight: 400,
                      color: 'var(--text-light)',
                      height: 'fit-content',
                      marginTop: '6px'
                    }}
                  >{moment().format('dddd, Do MMM')}</div>
                </div>
                <div>
                  <Input prefix={<SearchOutlined />} size="large" placeholder="Search for food, coffee, etc.."/>
                </div>
              </div>
          )}
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default CommonLayout;
