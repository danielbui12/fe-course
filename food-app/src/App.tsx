import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import { ConfigProvider } from "antd";
import "./App.css";
import "antd/dist/reset.css"

const Dashboard = lazy(() => import('./Pages/Dashboard'))
const Inventory = lazy(() => import('./Pages/Inventory'))
const Orders = lazy(() => import('./Pages/Orders'))
const Customers = lazy(() => import('./Pages/Customers'))
const Authentication = lazy(() => import('./Pages/Authentication'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
    ]
  },
  {
    path: "/authentication",
    element: <Authentication />
  }
]);

function App() {
  return (
    <div className="dark container">
      <ConfigProvider 
        theme={{
          token: {
            colorPrimary: "#EA7C69"
          }
        }}
      >
        <RouterProvider router={router}/>
      </ConfigProvider>
    </div>
  );
}
export default App;
