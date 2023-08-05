import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import { ConfigProvider } from "antd";
import "./App.css";
import "antd/dist/reset.css"

import BookTable from './Pages/BookTable'
import Dashboard from './Pages/Dashboard'
import Inventory from './Pages/Inventory'
import Orders from './Pages/Orders'
import Customers from './Pages/Customers'
import Authentication from './Pages/Authentication'
import Login from "./Pages/Login";

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
  },
  {
    path: "/book-table",
    element: <BookTable />
  },
  {
    path: "/login",
    element: <Login />
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
