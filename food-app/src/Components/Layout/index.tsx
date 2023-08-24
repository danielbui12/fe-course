import { Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function CommonLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()

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
      }
    } as MenuItem;
  }

  const adminItems: MenuItem[] = [
    getItem("Setting", "1", <SettingOutlined />, '/management'),
    getItem("Statistic", "2", <PieChartOutlined />, '/management/statistic'),
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
                const paths = window.location.pathname.split('/')
                return paths[paths.length - 1]
              })()}
            </>
          ) : (
            <>Jaegar Resto</>
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
